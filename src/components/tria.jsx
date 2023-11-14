const [error, setError] = useState({
    nameError: '',
    emailError: '',
    phoneError: '',
    passwordError: '',
    confirmpasswordError: ''
});

const checkName = (name) => {
    if (name === ''){
        setError({...error, nameError: 'Name is required'});
        return false;
    }
    if (!name.match(/^[a-zA-z .]*$/)) {
        setError({...error, nameError: 'Invalid name format'});
        return false;
    }
    setError({...error, nameError: ''});
    return true;
}

const checkEmail = (email) => {
    if (email === '') {
        setError({...error, emailError: 'Email address is required'});
        return false;
    }
    if (!email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z])+\.([A-Za-z]{2,4})$/)) {
        setError({...error, emailError: 'Invalid email address format'});
        return false;
    } 
    setError({...error, emailError: ''});
    return true;
}

const checkPhone = (phone) => {
    if (phone === ''){
        setError({...error, phoneError: 'Phone number is required'});
        return false;
    }
    if (!phone.match(/^(09)[0-9]\d{8}$/)) {
        setError({...error, phoneError: 'Invalid phone number format'});
        return false;
    }
    setError({...error, phoneError: ''});
    return true;
}

const checkPassword = (password) => {
    if(password === ""){
        setError({...error, passwordError: 'Password is required'});
        return false;
    } 
    if(password.length < 8){
        setError({...error, passwordError: 'Must be 8 characters in length'});
        return false;
    } 
    if(!password.match(/[A-Z]/)){
        setError({...error, passwordError: 'Must have uppercase'});
        return false;
    }        
    if(!password.match(/[0-9]/)){
        setError({...error, passwordError: 'Must contain numbers'});
        return false;
    }             
    if(!password.match(/[!@#$%&*_?]/)){
        setError({...error, passwordError: 'Must have special characters'});
        return false;
    }
    setError({...error, passwordError: ''});
    return true;
}

const checkConfirmPassword = (password, confirmpassword) => {
    if (confirmpassword === '') {
        setError({...error, confirmpasswordError: 'Confirm password is required'});
        return false;
    }
    if (password === '' || confirmpassword.length < 8){
        setError({...error, confirmpasswordError: 'Set password first'});
        return false;
    }
    if (confirmpassword !== password) {
        setError({...error, confirmpasswordError: 'Password does not match'});
        return false;
    }
    setError({...error, confirmpasswordError: ''});
    return true;
}