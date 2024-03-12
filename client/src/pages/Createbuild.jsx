import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_BUILD } from '../utils/mutations';
import { GET_ALL_BUILDS } from '../utils/queries';

import Auth from '../utils/auth';

export default function Createbuild() {
    const [postText, setPostText] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [postGame, setGame] = useState('');
    // const [buildGenre, setGenre] = useState('');
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
        console.log(postTitle, postText, postGame, Auth.getProfile().data.username);
        try {
            const { data } = await addBuild({
                variables: {
                    title: postTitle,
                    body: postText,
                    game: postGame,
                    // genre: genre,
                    username: Auth.getProfile().data.username,
                },
            });
            console.log(data);

            setPostText('');
            window.location.href = "/"


        } catch (err) {
            console.error(err);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'postTitle') {
            setPostTitle(value);
        } else if (name === 'postText' && value.length <= 280) {
            setPostText(value);
            setCharacterCount(value.length);
        } else if (name === 'game') {
            setGame(value);
        }
        // else if (name === 'genre') {
        //     setGenre(value);
        // }
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
                        <option value="" selected="selected" disabled>Select a game</option >
                        <option value='World of Warcraft'>World of Warcraft</option>
                        <option value='League of Legends'>League of Legends</option>
                        <option value='Halo'>Halo</option>
                        <option value='Overwatch'>Overwatch</option>
                    </select>

                    {/* <select
                            name='genre'
                            id='genre'
                            className='Submit_form_genre'
                            onChange={handleChange} >
                            <option value="" disabled hidden>Select a genre</option>
                            <option value='RPG'>RPG</option>
                            <option value='MOBA'>MOBA</option>
                            <option value='FPS'>FPS</option>
                            <option value='RTS'>RTS</option>
                        </select> */}

                    <textarea
                        id="postText"
                        className='Submit_form_text'
                        name="postText"
                        placeholder="Here is a new build..."
                        rows="4"
                        onChange={handleChange}
                        required />
                    <div className='Submit_form_info'>
                        <p
                            className={`Submit_form_info_char-count ${characterCount === 280 || error ? 'text-danger' : ''}`}
                        >
                            Character Count: {characterCount}/280
                            {error && <span className='Submit_form_info_text-error'>Something went wrong...</span>}
                        </p>
                    </div>
                    <button className='Submit_form_btn' type='submit' >Add Build</button>
                </form>
            ) : (
                <p>
                    You need to be logged in to share your build. Please{' '}
                    <Link to='/login'>Login</Link> or <Link to='/signup'>Sign-up</Link>.
                </p>
            )}
        </div>
    );
}
