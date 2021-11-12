import React from 'react'
import useForm from './useForm'
import validate from './validation'
import './Form.css'
import {Link} from 'react-router-dom'

const Signup = () => {

    const {handleChange,values,handleSubmit,errors} = useForm(validate)

    return (
        <div className = "form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Sign up For Our Service</h1>
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
                    <label htmlFor='email' className="form-label">
                        Email
                    </label>
                    <input 
                    id='email'
                        type="email" 
                        name="email" 
                        className="form-input"
                        value = {values.email}
                        onChange = {handleChange}
                        placeholder='Enter Email' />
                </div>
                {errors.email && <p>{errors.email}</p>}
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
                <div className="form-inputs">
                    <label htmlFor='password2' className="form-label">
                       Confirm Password
                    </label>
                    <input 
                    id='password2'
                        type="password" 
                        name="password2" 
                        className="form-input"
                        value = {values.password2}
                        onChange = {handleChange}
                        placeholder='Enter Password' />
                </div>
                {errors.password2 && <p>{errors.password2}</p>}
                <button className="form-input-btn" type='submit'>Sign Up</button>
                <span className='form-input-login'>Already have an Account? Login <Link to='/signin'>here </Link> </span>
            </form>
        </div>
    )
}

export default Signup