import React,{useState} from 'react'
import { useHistory } from 'react-router'
import Signup from './Signup'
import Signin from './Signin'
import './Form.css'
import FormSuccess from './FormSuccess'
import Witch from '../../assests/img-2.svg'


const Form = () =>{

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmittedIn,setIsSubmittedIn] = useState(false);
    const [isSignup,setIsSignup] = useState(true);

    function submitForm() {
      setIsSubmitted(true);
    }
    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/`; 
        history.push(path);
    }

    function checkRegistered(){
        setIsSignup(false);
    }
    return (
        <div> 
            <div className='form-container'>
        <span className='close-btn' onClick={routeChange}>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={Witch} alt='witch' />
        </div>
        {isSubmitted ? 
             <FormSuccess/>
        : isSignup ? 
            <Signup submitForm={submitForm} checkRegistered = {checkRegistered}/>
            : isSubmittedIn ? <FormSuccess/> :
            <Signin submitForm={submitForm}/>
        }
      </div>
        </div>
    )
}

export default Form
