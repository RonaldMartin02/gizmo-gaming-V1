import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', email);
    try {
      const { data } = await loginUser({
        variables: { email, password },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className='login'>
      <div className='login_card'>
        <h4 className='login_card_header'>Login</h4>
        <div className='login_card_body'>
          <form onSubmit={handleSubmit}>
            <input
              className='login_formInput'
              placeholder='Your email'
              name='email'
              type='email'
              value={email}
              onChange={handleEmailChange}
            />
            <input
              className='login_formInput'
              placeholder='******'
              name='password'
              type='password'
              value={password}
              onChange={handlePasswordChange}
            />
            <button className='login_btn' style={{ cursor: 'pointer' }} type='submit'>
              Submit
            </button>
          </form>
          {error && (
            <div className='login_errorMsg'>
              {error.message}
            </div>
          )}
        </div>
      </div>
      <Link to='/signup'>Create a new account.</Link> 
    </div>
  );
};

export default LogIn;