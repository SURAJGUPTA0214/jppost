import React from "react";


interface buttonType {
    label?: string;
    onClick?: any;
    style?: any;
    className?: string;
}
const CustomButton = ({ label, style, onClick }: buttonType) => {

    const buttonstyle = {

        backgroundSize: 'auto 140%',
        backgroundImage: '-webkit-linear-gradient(top, #f0ac0e 0%, #f56616 100%)',
        fontSize: '14px',
        color: '#fff',
        letterSpacing: '1px',
        fontWeight: 800,
        padding: '0px 30px',
        lineHeight: '48px',
        outline: 0,
        border: 0,
        borderRadius: '6px',
        ...style
    }
    return (
        <>
            <button className="custombtn" onClick={onClick} style={buttonstyle}> {label} </button>
        </>
    )
}
export default CustomButton;



export const SubmitButton = ({ label, style, className, onClick }: buttonType) => {

    const subbmitbuttonstyle = {
        boxShadow: '-1px 1px 14px 0px rgb(0 0 0 / 30%)',
        fontWeight: 600,
        backgroundColor: '#485974',
        color: '#fff',
        border: 'none',
        margin: '0px 5px',
        padding: '8px 15px',
        borderRadius: '8px',
        ...style
    }

    return (
        <>
            <button className={className} onClick={onClick} style={subbmitbuttonstyle}> {label} </button>
        </>
    )
}