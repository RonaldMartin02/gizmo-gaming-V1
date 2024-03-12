import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { EDIT_BUILD } from '../utils/mutations';
import { GET_BUILD } from '../utils/queries';
import { useParams } from 'react-router-dom';
import Auth from '../utils/auth';
export default function Createbuild() {
    const { buildId } = useParams();
    const { loading, data } = useQuery(GET_BUILD, {
        variables: { buildId: buildId },
    });
    // console.log(data);
    const [postText, setPostText] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [postGame, setGame] = useState('');

    
    // const [buildGenre, setGenre] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [editBuild, { error }] = useMutation(EDIT_BUILD,
        {
            refetchQueries:
                [
                    GET_BUILD,
                    'getBuild'
                ]
        });
    // const build = data?.build || {};
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(postTitle, postText, postGame, Auth.getProfile().data.username);
        try {
            const { data } = await editBuild({
                variables: {
                    title: postTitle,
                    body: postText,
                    game: postGame,
                    username: Auth.getProfile().data.username,
                    id: buildId
                },
            });
            console.log(data);

            setPostText('');
            window.location.href = "/"


        } catch (err) {
            console.error(err);
        }
    }

    // const handleEdit = async (event) => {
    //     event.preventDefault();
    //     setPostText(build.body);
    //     setPostTitle(build.title);
    //     setGame(build.game);

    // }

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
    // handleEdit();
    return (
        <div>
            <h1>Share your Build!</h1>

            {Auth.loggedIn() ? (
                <form className='Submit_form'
                    onSubmit={handleFormSubmit}
                    >
                    <input
                        placeholder={data?.build.title}
                        value={postTitle}
                        className='Submit_form_title'
                        onChange={handleChange}
                        name='postTitle' />

                    <select
                        name='game'
                        id='game'
                        className='Submit_form_game'
                        onChange={handleChange} >
                        <option value="" >Select a game</option>
                        <option value='World of Warcraft'>World of Warcraft</option>
                        <option value='League of Legends'>League of Legends</option>
                        <option value='Halo'>Halo</option>
                        <option value='Overwatch'>Overwatch</option>
                    </select>

                    <textarea
                        id="postText"
                        className='Submit_form_text'
                        name="postText"
                        placeholder="Here is a new build..."
                        value={postText}
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
