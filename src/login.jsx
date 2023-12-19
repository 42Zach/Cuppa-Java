import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import OtherNavbar from './otherNavbar.jsx'
import './login.css'
import Person from './person.svg'
import Lock from './lock.svg'
import axios from 'axios'
import Validation from './loginvalidation.js'


function Login() {
    return (
        <>
          <OtherNavbar />
          <div className='LoginBG'></div>
          <LoginPage />
      </>
    )
}

function LoginPage() {
  return (
    <div className ='LoginPage1'>
    <div className="LoginPage2">
      <h1>Login</h1>
      <LoginForm />
      <div className='SignupFromLogin'>
        Don't have an account?&#160;
        <Link to='/signup'> Sign up!</Link>
      </div>
    </div>
    </div>
  )
}

function LoginForm() {
  const [values, setValues] = useState({
    username: '',
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
    if(errors.username === '' && errors.password === '') {
      axios.post('http://localhost:3000/login', values)
      .then(res => {
        if(res.data === "Success") {
          navigate('/');
        } else {
          alert('No record existed');
        }
      })
      .catch(err => console.log(err));
    }
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className='LoginUsername'>
        <label htmlFor="username">Username</label><br />
        <div className="UsernameCred">
          <img src={Person} alt='' className='Person' />
          <input type="text" id='username' name='username' onChange={handleInput} placeholder='Enter your username' />
          {errors.username && <span className='textDanger'>{errors.username}</span>}
        </div>
      </div>
      <div className='LoginPassword'>
        <label htmlFor="password">Password</label><br />
        <div className="PasswordCred">
          <img src={Lock} alt='' className='Lock' />
          <input type="password" id='password' name='password' onChange={handleInput} placeholder='Enter your password' />
          {errors.password && <span className='textDanger'>{errors.password}</span>}
        </div>
      </div>
      <div className="LoginSubmit">
        <input type='submit' value='Login' />
      </div>
    </form>
  )
}















export default Login;
export {
  LoginForm
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