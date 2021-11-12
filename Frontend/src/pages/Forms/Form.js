import React,{useState} from 'react'
import { useHistory } from 'react-router'
import Signup from './Signup'
import './Form.css'
import FormSuccess from './FormSuccess'
import Witch from '../../assests/img-2.svg'



const Form = () =>{

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
      setIsSubmitted(true);
    }
    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/`; 
        history.push(path);
    }

    return (
        <div> 
            <div className='form-container'>
        <span className='close-btn' onClick={routeChange}>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={Witch} alt='witch' />
        </div>

        {!isSubmitted  ? 
            <Signup submitForm={submitForm}/>
            : <FormSuccess/> 
        }

      </div>
        </div>
    )
}

export default Form
