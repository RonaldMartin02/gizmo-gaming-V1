import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_BUILD } from '../utils/mutations';
import { GET_ALL_BUILDS } from '../utils/queries';

import Auth from '../utils/auth';

export default function Createbuild() {
    const [postText, setPostText] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addBuild, { error }] = useMutation(ADD_BUILD,
        {
            refetchQueries:
                [
                    GET_ALL_BUILDS,
                    'getBuilds'
                ]
        });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addBuild({
                variables: {
                    postText,
                    username: Auth.getProfile().data.username,
                },
            });

            setPostText('');
        } catch (err) {
            console.error(err);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'postTitle') {
            setPostTitle(value);
        } else
            if (name === 'postText' && value.length <= 280) {
                setPostText(value);
                setCharacterCount(value.length);
            }
    }

    return (
        <div>
            <h1>Share your Build!</h1>

            {Auth.loggedIn() ? (
                    <form className='Submit_form'
                        onSubmit={handleFormSubmit}>
                        <input
                            placeholder='Title'
                            value={postTitle}
                            className='Submit_form_title'
                            onChange={handleChange}
                            name='postTitle' />

                        <select
                            name='game'
                            id='game'
                            className='Submit_form_game'
                            onChange={handleChange} >
                            <option value="">Select a game</option>
                            <option value='game1'>World of Warcraft</option>
                            <option value='game2'>League of Legends</option>
                            <option value='game3'>Halo</option>
                            <option value='game4'>Overwatch</option>
                        </select>

                        {/* <select
                            name='genre'
                            id='genre'
                            className='Submit_form_genre'
                            onChange={handleChange} >
                            <option value="" disabled hidden>Select a genre</option>
                            <option value='genre1'>RPG</option>
                            <option value='genre2'>MOBA</option>
                            <option value='genre3'>FPS</option>
                            <option value='genre4'>RTS</option>
                        </select> */}

                        <textarea
                            id="postText"
                            className='Submit_form_text'
                            name="postText"
                            placeholder="Here is a new build..."
                            rows="4"
                            onChange={handleChange}
                            required />
                        <p
                            className={`Submit_form_char-count ${characterCount === 280 || error ? 'text-danger' : ''
                                }`}
                        >
                            Character Count: {characterCount}/280
                            {error && <span className='Submit_form_text-error'>Something went wrong...</span>}
                        </p>
                        <button className='Submit_form_btn' type='submit'>Add Build</button>
                    </form>
            ) : (
                <p>
                    You need to be logged in to share your build. Please{' '}
                    <Link to='/login'>login</Link> or <Link to='/signup'>signup</Link>.
                </p>
            )}
        </div>
    );
}
