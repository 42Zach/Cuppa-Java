import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import OtherNavbar from './otherNavbar.jsx'
import './signup.css'
import axios from 'axios'
import Validation from './signupvalidation.js'

function Signup() {
    return (
        <>
            <OtherNavbar />
            <div className='LoginBG'></div>
            <SignupPage />
        </>
    )
}

function SignupPage() {
    return (
        <div className ='SignPage1'>
        <div className="SignPage2">
          <h1>Sign Up</h1>
          <SignupForm />
          <div className ='Signor'>or</div>
          <div className="BackToLogin"><Link to='/login' className='BTL'>Back To Login</Link></div>
        </div>
        </div>
    )
}

function SignupForm() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
      })
      const navigate = useNavigate();
      const [errors, setErrors] = useState({})
      const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.username === '' && errors.email === '' && errors.password === '') {
          axios.post('http://localhost:3000/signup', values)
          .then(res => {
            navigate('/login');
          })
          .catch(err => console.log(err));
        }
      }

    return (
        <form action='' onSubmit={handleSubmit}>
            <div className='SignUsername'>
        <label htmlFor="Signusername">Username</label><br />
        <div className="SignUsernameCred">
          <input type="text" id='username' name='username' onChange={handleInput} placeholder='Enter your username' />
          {errors.username && <span className='textDanger'>{errors.username}</span>}
        </div>
      </div>
      <div className='SignEmail'>
        <label htmlFor="Signemail">Email</label><br />
        <div className="SignEmailCred">
          <input type="email" id='email' name='email' onChange={handleInput} placeholder='Enter your email' />
          {errors.email && <span className='textDanger'>{errors.email}</span>}
        </div>
      </div>
      <div className='SignPassword'>
        <label htmlFor="Signpassword">Password</label><br />
        <div className="SignPasswordCred">
          <input type="password" id='password' name='password' onChange={handleInput} placeholder='Enter your password' />
          {errors.password && <span className='textDanger'>{errors.password}</span>}
        </div>
      </div>



      <div className="SignSubmit">
        <input type='submit' value='Sign Up' />
      </div>
        </form>
    )
}

function ConfirmPassword() {
    return (
        <div className='SignPassword'>
        <label htmlFor="Signpassword"> Confirm Password</label><br />
        <div className="SignPasswordCred">
          <input type="password" id='ConfirmPassword' name='password' placeholder='Confirm your password' />
        </div>
        <div className="doPasswordsMatch"></div>
      </div>
    )
}




function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
  }

  export default Signup;