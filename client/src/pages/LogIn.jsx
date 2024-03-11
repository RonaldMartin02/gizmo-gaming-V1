import { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../utils/mutations'

import Auth from '../utils/auth';

const LogIn = () => {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState({ ...formState, [name]: value })
  }

  const [login, { error, data }] = useMutation(LOGIN_USER)

  const [formError, setFormError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await login({ variables: { ...formState } })
      Auth.login(data.login.token)
    } catch (e) {
      console.error(e)
      setFormError(true)
    }
  }

  useEffect(() => {
    setFormError(false)
  }, [formState]);

  return (
    <>
    {Auth.loggedIn() ? <Navigate to='/app/Landing' /> :
    <div className='login'>
      <div className='login_card'>
        <h4 className='login_card_header'>Login</h4>
        <div className='login_card_body'>
          <form onSubmit={handleSubmit}>
            <input
              className='login_card_formInput'
              placeholder='Your email'
              name='email'
              type='email'
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className='login_card_formInput'
              placeholder='******'
              name='password'
              type='password'
              value={formState.password}
              onChange={handleChange}
            />
            <button className='login_btn' style={{ cursor: 'pointer' }} type='submit'>
              Submit
            </button>
          </form>
          {error && (
            <div className='login_errorMsg'>
              {error.name}
            </div>
          )}
        </div>
      </div>
      <Link to='/signup'>Create a new account.</Link> 
    </div>
    }
    </>
    
  );
};

export default LogIn;