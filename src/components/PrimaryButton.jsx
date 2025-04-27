import React from 'react';

const PrimaryButton = ({ text, className, onClickFunction, type ,link}) => {
    const openWhatapp = () => {
        const phNo = '9345818731';
        const url = `https://wa.me/${phNo}`
        window.open(url, '_blank')
    }
    return (
        <>
            {type == 'button' && <button onClick={onClickFunction ?? openWhatapp} className={`btn-primary ${className}`}>
                {text}
            </button>}
            {type == 'link' && <a href={link} className={`btn-primary ${className}`}>
            {text}
            </a>}



        </>

    )
}

export default PrimaryButton
