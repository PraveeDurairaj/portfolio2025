import React from 'react';

const PrimaryButton = ({ text, className,onClick }) => {
    const openWhatapp = () => {
        const phNo = '9345818731';
        const url = `https://wa.me/${phNo}`
        window.open(url, '_blank')
    }
    return (
        <button  onClick={onClick ?? openWhatapp}className={`btn-primary ${className}`}>
            {text}
        </button>
    )
}

export default PrimaryButton
