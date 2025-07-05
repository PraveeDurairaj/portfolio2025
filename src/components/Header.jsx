import React, { useState } from 'react';
import Image from 'next/image';
import DarkModeSwitch from './DarkModeSwitch';
import PrimaryButton from './PrimaryButton';
import menuIcon from '../../public/menu.png';
import closeIconLight from '../../public/closeLight.png';
import closeIconDark from '../../public/closeDark.png';



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const menuList = [
        {
            text:'Home',
            id:'/'
        },
        {
            text:'About',
            id:'/#About'
        },
        {
            text:'Skills',
            id:'/#Skills'
        },
        {
            text:'Why choose',
            id:'/#WhyChoose'
        },
        {
            text:'Expreience',
            id:'/#Expreience'
        },
        {
            text:'Contact',
            id:'/contact'
        },

    ]
    return (
        <>
            <div className='header-container'>
                <p className='brand-name'>Praveen</p>
                <div className='nav-container hidden-sm'>
                    {menuList?.map((data, index) => {
                        return (<a key={index} href={data?.id} className='nav-item'>{data?.text}</a>)
                    })}
                </div>
                <div className='button-container'>
                    <DarkModeSwitch />
                    <PrimaryButton type={'button'} text={'Get in Touch'} icon className={'hidden-mobile btn-primary-icon-padding'} />
                    <Image className='icon-filter' src={menuIcon} onClick={handleMenu} alt='menu icon' ></Image>
                </div>
            </div>
            {/* mobile menu */}
            <div className={`side-menu-sm ${menuOpen && 'side-menu-open'}`} onClick={handleMenu}>
                <div className='close-icon-container'>
                    <p className='brand-name'>Praveen</p>
                  <Image src={closeIconLight} onClick={handleMenu} alt='close' className='close-light'></Image>
                  <Image src={closeIconDark} onClick={handleMenu} alt='close' className='close-dark'></Image>
                </div>
                <div className='nav-container'>
                    {menuList?.map((data, index) => {
                        return (<a key={index} href={data?.id} className='nav-item'>{data?.text}</a>)
                    })}
                </div>
                <PrimaryButton type={'button'} text={'Get in Touch'} icon className={'mt-10 btn-primary-icon-padding'} />
            </div>
        </>

    )
}

export default Header
