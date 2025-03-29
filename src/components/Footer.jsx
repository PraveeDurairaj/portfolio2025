import React from 'react';
import Image from 'next/image';
import linkedIcon from '../../public/linkedin.png';
import emailIcon from '../../public/gmail.png';
import whatsappLogo from '../../public/whatsappLogo.png';

const Footer = () => {
    return (
        <div className='footer-bg'>
            <div className='footer-container'>
                <div className='footer-text-Container'>
                    <p className="mb-8">Built with Next.js & ❤️</p>
                    <p className="copy-rights-text">© {new Date().getFullYear()} Praveen. All rights reserved.</p>
                </div>
                <div className='footer-line' />
                <div className='icon-container'>
                    <a className='iconFlex' target='_blank' href='mailto:praveendurai1516@gmail.com'  title='Email'> <Image src={emailIcon} className='icon' alt='email'></Image></a>
                    <a className='iconFlex' target='_blank' href='https://www.linkedin.com/in/praveendurairaj15/' title='Linked in'> <Image src={linkedIcon} className='icon' alt='linked in'></Image></a>
                    <a className='iconFlex' target='_blank' href="https://wa.me/9345818731" title='whatsapp'> <Image src={whatsappLogo} className='icon' alt='whatsapp'></Image></a>
                </div>
            </div>

        </div>
    )
}

export default Footer
