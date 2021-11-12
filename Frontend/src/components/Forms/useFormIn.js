import {useState,useEffect} from 'react'


const useFormIn = (validate) =>{
    const [values,setValues] = useState({
        username : '',
        password : '',
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
    const handleSubmit = (e) =>{
        e.preventDefault()

        setErrors(validate(values))
        setIsSubmitting(true)
    }
   

    return {handleChange,values,handleSubmit,errors}
}

export default useFormIn