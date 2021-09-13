import { useState, useEffect } from "react";

const useForm = (callback, validateInfo) => {
    //console.log(callback) //function submitForm()
    //console.log(validateInfo) //function validateInfo(values)
    const [values, setValues] = useState({
        username: '', email: '', password: '', password2: ''
    })
    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
        // console.log(e.target.name)
    }

    const [errors, setErrors] = useState({ })
    
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfo(values));
        setIsSubmitting(true)

    }
    //没有这个，按sign-up直接会跳转到成功页面
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    })

    return { handleChange, values, handleSubmit, errors }
}

export default useForm
