import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import BGSignUp from '../img/Saly-16.png';

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword: ''
    });

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmpasswordError, setConfirmPasswordError] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        let trimmedVal = value.trim();

        switch (name) {
            case 'name':
                checkName(trimmedVal);
                break;
            case 'email':
                checkEmail(trimmedVal);
                break;
            case 'phone':
                checkPhone(trimmedVal);
                break;
            case 'password':
               checkPassword(trimmedVal);
                break; 
            case 'confirmpassword':
                checkConfirmPassword(formData.password, trimmedVal);
                break;
            default:
                break;
        }
        setFormData({...formData, [name]:trimmedVal });
    };

    const formSubmit = (e) => {
        e.preventDefault();

        const name = checkName(formData.name);
        const email = checkEmail(formData.email);
        const phone = checkPhone(formData.phone);
        const pass = checkPassword(formData.password);
        const checkpass = checkConfirmPassword(formData.password, formData.confirmpassword);

        console.log(formData);

        if (name && email && phone && pass && checkpass){
            Swal.fire({
                title: 'Registration Success!',
                text: 'Confirmation has been sent to your email.',
                icon: 'success',
            }).then(() => {
                navigate('/sign-in');
            })
        }
    }

    const checkName = (name) => {
        if (name === '' || name.length < 2){
            setNameError('Name is required');
            return false;
        }
        if (!name.match(/^[a-zA-z .]*$/)) {
            setNameError('Invalid name format');
            return false;
        }
        setNameError('');
        return true;
    }

    const checkEmail = (email) => {
        if (email === '') {
            setEmailError('Email address is required');
            return false;
        }
        if (!email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z])+\.([A-Za-z]{2,4})$/)) {
            setEmailError('Invalid email address format');
            return false;
        } 
        setEmailError('');
        return true;
    }

    const checkPhone = (phone) => {
        if (phone === ''){
            setPhoneError('Phone number is required');
            return false;
        }
        if (!phone.match(/^(09)[0-9]\d{8}$/)) {
            setPhoneError('Invalid phone number format');
            return false;
        }
        setPhoneError('');
        return true;
    }

    const checkPassword = (password) => {
        if(password === ""){
            setPasswordError('Password is required');
            return false;
        } 
        if(password.length < 8){
            setPasswordError('Must be 8 characters in length');
            return false;
        } 
        if(!password.match(/[A-Z]/)){
            setPasswordError('Must have uppercase');
            return false;
        }        
        if(!password.match(/[0-9]/)){
            setPasswordError('Must contain numbers');
            return false;
        }             
        if(!password.match(/[!@#$%&*_?]/)){
            setPasswordError('Must have special characters');
            return false;
        }
        setPasswordError('');
        return true;
    }

    const checkConfirmPassword = (password, confirmpassword) => {
        if (confirmpassword === '') {
            setConfirmPasswordError('Confirm password is required');
            return false;
        }
        if (password === ''){
            setConfirmPasswordError('Set password first');
            return false;
        }
        if (confirmpassword !== password) {
            setConfirmPasswordError('Password does not match');
            return false;
        }
        setConfirmPasswordError('');
        return true;
    }

    return ( 
        <div className='h-screen w-full bg-gradient-to-br from-white to-[#5F2EC7] relative'>
            <img src={BGSignUp} className='absolute bottom-0 left-20 w-1/2'/>
            <div className='container mx-auto h-full flex items-center justify-end px-20 max-sm:p-3 max-lg:justify-center'>
                <form className='bg-white rounded-2xl p-10 shadow-lg max-w-sm w-96 z-10' onSubmit={formSubmit}>
                    <h3 className='font-semibold text-3xl text-center font-sans'>Sign up</h3>

                    <div className={`relative mt-5 mb-8 ${nameError ? 'error' : '' }`}>
                        <input 
                            type="text" 
                            name='name'
                            className={`input border block rounded-xl mb-1 px-4 h-12 w-full focus:outline-none
                            ${nameError ? 'border-red-500' : ''}`}
                            id='name'
                            placeholder=''
                            value={formData.name}
                            onInput={handleChange}
                        />
                        <label 
                            htmlFor="name" 
                            className='label absolute top-3 left-2.5 px-1.5 text-gray-400 ease duration-200 bg-white'>Name
                        </label>
                        <i 
                            className={`absolute top-4 right-3.5 invisible fas 
                            ${nameError ? 'fa-circle-exclamation text-red-500' : 'fa-circle-check text-green-600'}`}
                            style={{visibility: nameError ? 'visible' : 'invisible'}}
                        >
                        </i>
                        <small className='absolute text-red-500'>{nameError}</small>
                    </div>
                    <div className={`relative mt-5 mb-8 ${emailError ? 'error' : '' }`}>
                        <input 
                            type="text" 
                            name='email'
                            className={`input border block rounded-xl mb-1 px-4 h-12 w-full focus:outline-none
                            ${emailError ? 'border-red-500' : ''}`}
                            id='email'
                            placeholder=''
                            value={formData.email}
                            onInput={handleChange}
                        />
                        <label 
                            htmlFor="email" 
                            className='label absolute top-3 left-2.5 px-1.5 text-gray-400 ease duration-200 bg-white'>Email address
                        </label>
                        <i 
                            className={`absolute top-4 right-3.5 invisible fas 
                            ${emailError ? 'fa-circle-exclamation text-red-500' : 'fa-circle-check text-green-600'}`}
                            style={{visibility: emailError ? 'visible' : 'invisible'}}
                        >
                        </i>
                        <small className='absolute text-red-500'>{emailError}</small>
                    </div>
                    <div className={`relative mt-5 mb-8 ${phoneError ? 'error' : '' }`}>
                        <input 
                            type="text" 
                            name='phone'
                            className={`input border block rounded-xl mb-1 px-4 h-12 w-full focus:outline-none
                            ${phoneError ? 'border-red-500' : ''}`}
                            id='phone'
                            placeholder=''
                            value={formData.phone}
                            onInput={handleChange}
                        />
                        <label 
                            htmlFor="phone" 
                            className='label absolute top-3 left-2.5 px-1.5 text-gray-400 ease duration-200 bg-white'>Phone number
                        </label>
                        <i 
                            className={`absolute top-4 right-3.5 invisible fas 
                            ${phoneError ? 'fa-circle-exclamation text-red-500' : 'fa-circle-check text-green-600'}`}
                            style={{visibility: phoneError ? 'visible' : 'invisible'}}
                        >
                        </i>
                        <small className='absolute text-red-500'>{phoneError}</small>
                    </div>
                    
                    <div className={`relative mt-5 mb-8 ${passwordError ? 'error' : '' }`}>
                        <input 
                            type="password" 
                            name='password'
                            className={`input border block rounded-xl mb-1 px-4 h-12 w-full focus:outline-none
                            ${passwordError ? 'border-red-500' : ''}`}
                            id='password'
                            placeholder=''
                            value={formData.password}
                            onInput={handleChange}
                        />
                        <label 
                            htmlFor="password" 
                            className='label absolute top-3 left-2.5 px-1.5 text-gray-400 ease duration-200 bg-white'>Password
                        </label>
                        <i 
                            className={`absolute top-4 right-3.5 invisible fas 
                            ${passwordError ? 'fa-circle-exclamation text-red-500' : 'fa-circle-check text-green-600'}`}
                            style={{visibility: passwordError ? 'visible' : 'invisible'}}
                        >
                        </i>
                        <small className='absolute text-red-500'>{passwordError}</small>
                    </div>
                    <div className={`relative mt-5 mb-8 ${confirmpasswordError ? 'error' : '' }`}>
                        <input 
                            type="password" 
                            name='confirmpassword'
                            className={`input border block rounded-xl mb-1 px-4 h-12 w-full focus:outline-none
                            ${confirmpasswordError ? 'border-red-500' : ''}`}
                            id='confirm_password'
                            placeholder=''
                            value={formData.confirmpassword}
                            onInput={handleChange}
                        />
                        <label 
                            htmlFor="confirm_password" 
                            className='label absolute top-3 left-2.5 px-1.5 text-gray-400 ease duration-200 bg-white'>Confirm password
                        </label>
                        <i 
                            className={`absolute top-4 right-3.5 invisible fas 
                            ${confirmpasswordError ? 'fa-circle-exclamation text-red-500' : 'fa-circle-check text-green-600'}`}
                            style={{visibility: confirmpasswordError ? 'visible' : 'invisible'}}
                        >      
                        </i>
                        <small className='absolute text-red-500'>{confirmpasswordError}</small>
                    </div>
                    <button className='w-full bg-[#8059D2] text-white rounded-xl my-8 h-12 font-medium hover:bg-[#7c53d3]'>
                        Sign up
                    </button>
                    <p className='text-center mb-4'>Don't have an account?<Link to={'/sign-in'} className='ml-2 text-blue-600'>Sign in here</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Signup;