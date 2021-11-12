export default function validateInfo(values) {
    let errors ={}

    if(!values.username.trim()){
        errors.username = "Username Required"
    }

    if(!values.password){
        errors.password = "Password is Required"
    }else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)){
        errors.password = "Password should be More Strong"
    }
    return errors;
}