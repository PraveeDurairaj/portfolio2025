'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import emailIcon from '../../public/formEmail.png';
import linkedInIcon from '../../public/formLinkedIn.png';
import thanksIcon from '../../public/thanksIcon.gif';
import PrimaryButton from './PrimaryButton';
import { useFormvalidation } from '@/hook/useFormvalidation';
import { useAddDos } from '@/hook/useFirebaseCURD';


const ctaSocialLinkData = [
  {
    image: linkedInIcon,
    altText: 'linked icon',
    link: 'linkedin/in/',
    linkText: 'PraveenDurairaj',
    url: 'https://www.linkedin.com/in/praveendurairaj15/'
  },
  {
    image: emailIcon,
    altText: 'email icon',
    link: 'mail.google.com/',
    linkText: 'praveen.d@gamil.com',
    url: 'mailto:praveendurai1516@gmail.com'
  }
]
const renterForm = ({ formData, handleSumbit, handleChange, errors }) => {
  return (
    <>
      <div className="input-groub">
        <label htmlFor="name">Name</label>
        <input
          id='name'
          type='text'
          name='name'
          value={formData?.name}
          placeholder='Enter your name'
          onChange={handleChange}

        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div className="input-groub">
        <label htmlFor="phone">Phone No</label>
        <input
          id='phone'
          type='text'
          name='phoneNo'
          value={formData?.phoneNo}
          placeholder='Enter your phone'
          onChange={handleChange}
        />
        {errors.phoneNo && <span>{errors.phoneNo}</span>}
      </div>
      <div className="input-groub">
        <label htmlFor="message">Message</label>
        <textarea
          id='message'
          name='message'
          value={formData?.message}
          onChange={handleChange}
          placeholder='Message..'
        >
        </textarea>
      </div>
      <PrimaryButton type={'button'} onClickFunction={handleSumbit} text={"Let's go"} className={'cta-contact-btn'} />
    </>
  )
}
const renterThanks = () => {
  return (
    <div className='thanks-container'>
      <Image src={thanksIcon} width={100} height={100} alt='thanks icon' unoptimized></Image>
      <p>Thanks for reaching out!. I 'll get back to you soon</p>
    </div>
  )
}

const CtaForm = () => {
  const [isthanks, setThanks] = useState(false)
  const [formData, setFormData] = useState({ name: '', phoneNo: '', message: '' })
  const [errors, setErrors] = useState({ name: true, phoneNo: true })
  const { validate } = useFormvalidation()
  const { addData, addDocStatus } = useAddDos('manageEnquiry');

  useEffect(()=>{
    if(addDocStatus){
      setThanks(!isthanks) 
    }
  },[addDocStatus])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value, }));
    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error, }));
  };

  const handleSumbit = () => {
    if (errors.name) setErrors((pre) => ({ ...pre, name: 'Name is required' }))
    if (errors.phoneNo) setErrors((pre) => ({ ...pre, phoneNo: 'Mobile number is required' }))
    if (!errors.name && !errors.phoneNo) { 
      addData({
        name:formData?.name,
        mobileNo:formData?.phoneNo,
        message:formData?.message
      })
    }
  }
  return (
    <div className='container'>
      <div className='cta-form-box '>
        <div>
          <h2 className='cta-title'>Let's<span className='cta-title-spl-text'>Build</span>Something Great Together</h2>
          {
            ctaSocialLinkData?.map((data, key) => {
              return (
                <a href={data?.url} target='_blank' className='cta-icon-flex' key={key}>
                  <div className='cta-icon-contaier'><Image src={data?.image} alt={data?.altText} ></Image></div>
                  <div className='cta-icon-text'>
                    <span>{data?.link}</span>
                    <span className='cta-icon-spl-text'>{data?.linkText}</span>
                  </div>
                </a>
              )
            })
          }
        </div>
        <div className='cta-form'>{isthanks ? renterThanks()
          : renterForm({ handleSumbit, handleChange, formData, errors })}</div>
      </div>

    </div>
  )
}

export default CtaForm
