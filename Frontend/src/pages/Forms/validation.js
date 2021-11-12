export default function validateInfo(values) {
    let errors ={}

    if(!values.username.trim()){
        errors.username = "Username Required"
    }

    if(!values.email){
        errors.email = "Email Required"
    }else if(!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i.test(values.email)){
        errors.email = "Email Address is invalid"
    }

    if(!values.password){
        errors.password = "Password is Required"
    }else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)){
        errors.password = "Password should be More Strong"
    }

    if(!values.password2){
        errors.password2 = "Password is required"
    }else if(values.password !== values.password2){
        errors.password2 = "Passwords does not match"
    }
    return errors;
}