import { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import BGSignIn from '../img/Saly-10.png';

function Signin() {

    const [emailphone, setEmailPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showpass, setShowPass] = useState(false);

    const [emailphoneError, setEmailPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const emailPhoneInput = (e) => {
        const value = e.target.value;
        setEmailPhone(value);
        checkEmailPhone(value);
    }

    const passwordInput = (e) => {
        const value = e.target.value;
        setPassword(value);
        checkpassword(value);
    }

    const passToggle = () => {
        setShowPass(!showpass);
    }

    const formSubmit = (e) => {
        e.preventDefault();

        const em = checkEmailPhone(emailphone);
        const pss = checkpassword(password);

        if (em && pss){
            navigate('/messaging');
        }
    }

    const checkEmailPhone = (value) => {
        if (value === ''){
            setEmailPhoneError('Enter a valid email or phone number');
            return false;
        } 

        if (value.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z])+\.([A-Za-z]{2,4})$/) || value.match(/^(09)[0-9]\d{8}$/)){
            setEmailPhoneError('');
            return true;
        }

        setEmailPhoneError('Invalid email or phone');
        return false;
    }

    const checkpassword = (value) => {
       
        if (value === '' || value.length < 8){
            setPasswordError('Your password must contain 8 characters above');
            return false;
        } 
        
        setPasswordError('');
        return true;
    }

    return ( 
        <div className='h-screen w-full bg-gradient-to-br from-white to-[#5F2EC7] relative'>
            <img src={BGSignIn} className='absolute bottom-0 left-20 w-1/2'/>
            <div className='container mx-auto h-full flex items-center justify-end px-20 max-sm:p-3 max-lg:justify-center'>
                <form className='bg-white rounded-2xl p-10 shadow-lg max-w-sm w-96 z-10' onSubmit={formSubmit}>
                    <h3 className='font-semibold text-3xl text-center font-sans'>Sign in</h3>

                    <div className={`relative mt-5 mb-8 ${emailphoneError ? 'error' : '' }`}>
                        <input 
                            type="text" 
                            className={`input border block rounded-xl mb-1 px-4 h-12 w-full focus:outline-none 
                            ${emailphoneError ? 'border-red-500' : '' }`}
                            id='emailphone'
                            placeholder=''
                            value={emailphone}
                            onChange={emailPhoneInput}
                        />
                        <label 
                            htmlFor="emailphone" 
                            className='label absolute top-3 left-2.5 px-1.5 text-gray-400 ease duration-200 bg-white'>Email or phone number
                        </label>
                        <small className='absolute text-red-500'>{emailphoneError}</small>
                    </div>
                    
                    <div className={`relative mt-5 mb-8 ${passwordError ? 'error' : '' }`}>
                        <input 
                            type={`${showpass ? 'text' : 'password'}`}
                            className={`input border block rounded-xl mb-1 px-4 h-12 w-full focus:outline-none
                            ${passwordError ? 'border-red-500 ' : '' }`}
                            id='password'
                            placeholder=''
                            value={password}
                            onChange={passwordInput}
                        />
                        <label 
                            htmlFor="password" 
                            className='label absolute top-3 left-2.5 px-1.5 text-gray-400 ease duration-200 bg-white'>Password
                        </label>
                        <i className={`absolute text-lg top-3.5 right-4 text-gray-700 ${password ? 'visible' : 'invisible'}`} onClick={passToggle}>
                            <ion-icon name={`${showpass ? 'eye-outline' : 'eye-off-outline'}`}></ion-icon>
                        </i>
                        <small className='absolute text-red-500'>{passwordError}</small>
                    </div>
                    <button className='w-full bg-[#8059D2] text-white rounded-xl my-8 h-12 font-medium hover:bg-[#7c53d3]'>
                        Sign in
                    </button>
                    <p className='text-center mb-4'>Don't have an account?<Link to={'/sign-up'} className='ml-2 text-blue-600'>Sign up here</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Signin;