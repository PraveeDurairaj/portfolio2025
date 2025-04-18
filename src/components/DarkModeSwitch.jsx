import React from 'react';
import Image from 'next/image';
import { useEffect } from "react";
import useDarkMode from "@/hook/useDarkMode";
import dark from '../../public/darkMode.png';
import light from '../../public/light.png';

const DarkModeSwitch = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light')
        } else {
            document.body.classList.add('light')
            document.body.classList.remove('dark');
        }

    }, [isDarkMode]);
    return (
        <button onClick={toggleDarkMode} className='theme-switch-button'>
            <Image src={isDarkMode ? light : dark} alt='dark and light mode icon' ></Image>
        </button>
    )
}

export default DarkModeSwitch
