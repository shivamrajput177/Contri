import React from 'react'
import useForm from './useForm'
import validate from './validation'
import './Form.css'

const Signup = () => {

    const {handleChange,values,handleSubmit,handleSubmitIn,errors} = useForm(validate)

    return (
        <div className = "form-content-right">
            <form className="form" onSubmit={handleSubmitIn}>
                <h1>Sign In</h1>
                <div className="form-inputs">
                    <label htmlFor='username' className="form-label">
                        Username
                    </label>
                    <input 
                    id='username'
                        type="text" 
                        name="username" 
                        className="form-input"
                        value = {values.username}
                        onChange = {handleChange}
                        placeholder='Choose Username' />
                </div>
                {errors.username && <p>{errors.username}</p>}
                
                <div className="form-inputs">
                    <label htmlFor='password' className="form-label">
                        Password
                    </label>
                    <input 
                    id='password'
                        type="password" 
                        name="password" 
                        className="form-input"
                        value = {values.password}
                        onChange = {handleChange}
                        placeholder='Enter Password' />
                </div>
                {errors.password && <p>{errors.password}</p>}
                
                <button className="form-input-btn" type='submit'>Sign In</button>
                
            </form>
        </div>
    )
}

export default Signup