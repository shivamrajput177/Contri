import {useState,useEffect} from 'react'


const useForm = (validate) =>{
    const [values,setValues] = useState({
        username : '',
        email : '',
        password : '',
        password2 : ''
    })

    const [errors,setErrors] = useState({})
    const [isSubmitting,setIsSubmitting] = useState(false)

    const handleChange = (e) =>{
        const {name,values} = e.target
        setValues({
            ...values,
            [name] : values
        })
    }
    const handleSubmitIn = (e) =>{
        e.preventDefault()

        setErrors(validate(values))
        setIsSubmitting(true)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()

        setErrors(validate(values))
        setIsSubmitting(true)
    }

    return {handleChange,values,handleSubmit,handleSubmitIn,errors}
}

export default useForm