import { useState, useEffect } from "react";
import React from 'react'
import validateInfo from "./validateInfo";

const useForm = (callback, validateInfo) => {
    const [values, setValues] = useState({
        username: '', email: '', password: '', password2: ''
    })

    const [errors, setErrors] = useState({ })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        console.log(e.target)
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfo(values));
        setIsSubmitting(true)

    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    })

    return { handleChange, values, handleSubmit, errors }
}

export default useForm
