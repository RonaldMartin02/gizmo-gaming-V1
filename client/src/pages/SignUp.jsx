import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ 
    username: '',
    email: '',
    password: ''
   })

  const [addUser, { error, data }] = useMutation(ADD_USER)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState({ ...formState, [name]: value })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    console.log("-------------------")
    console.log(event)
    try {
      const { data } = await addUser({ variables: { ...formState } })
      console.log(data.ADD_USER)
      Auth.login(data.addUser.token)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className="signup">
      <div className="signup_card">
        <h4 className="signup_card_header">Sign Up</h4>
        <div className="signup_card_body">
          {data ? (
              console.log(4),
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input
                className="signup_formInput"
                placeholder="Your username"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="signup_formInput"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="signup_formInput"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="signup_btn"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
            </form>
          )}

          {error && (
            console.log("uh oh, bro..."),
            <div className="signup_errorMsg">
              {error.message}
            </div>
          )}
        </div>
      </div>
      <Link to='/login'>Already have an account? Login here.</Link>
    </div>
  );
};

export default Signup;