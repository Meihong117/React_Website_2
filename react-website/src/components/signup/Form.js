import React, { useState } from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess'
import './Form.css'
import img5 from '../../assets/img-5.png'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img className='form-img' src={img5} alt='spaceship' />
                </div>
                {!isSubmitted ? (
                    <FormSignUp submitForm={submitForm} />
                ) : (
                    <FormSuccess />
                )}
            </div>
        </>
    );
};

export default Form
