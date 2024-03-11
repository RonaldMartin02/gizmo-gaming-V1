import {useQuery} from '@apollo/client';
import Post from '../components/Post';

import { Link, useLocation } from 'react-router-dom';

import { QUERY_BUILDS } from '../utils/queries';

export default function Landing() {
const {loading, data} = useQuery(QUERY_BUILDS);
const posts = data?.posts || [];
    // const posts = [
    //     {
    //         title: 'My First Build',
    //         game: 'League of Legends',
    //         description: 'This is my first build. I hope you like it!'
    //     },
    //     {
    //         title: 'My Second Build',
    //         game: 'Minecraft',
    //         description: 'This is my second build. I hope you like it!'
    //     },
    //     {
    //         title: 'My Third Build',
    //         game: 'Fortnite',
    //         description: 'This is my third build. I hope you like it!'
    //     },
    //     {
    //         title: 'My Fourth Build',
    //         game: 'Call of Duty',
    //         description: 'This is my fourth build. I hope you like it!'
    //     },
    // ];
    return (
        <div>
            <h1>Landing</h1>
            <div className='single-project'>
                {posts.map((post, index) => (
                    <Post title={post.title} game={post.game} description={post.description} key={index} />
                ))}
            </div>
            {/* <Link to="/">Go to Home</Link> */}
        </div>
    );
}