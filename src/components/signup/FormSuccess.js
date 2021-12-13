import React from 'react'
import img5 from '../../assets/img-5.png'

const FormSuccess = () => {
    return (
        <div className='form-content-right'>
            <div className="form-success">We have received your request!</div>
            <img src={img5} alt="success-img" className='form-img-2' />
        </div>
    )
}

export default FormSuccess
