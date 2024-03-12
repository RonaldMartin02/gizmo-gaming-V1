import { useQuery } from '@apollo/client';
import Post from '../components/Post';
import { Link } from 'react-router-dom';
import { GET_ALL_BUILDS } from '../utils/queries.js';

export default function Landing() {
    const { loading, data } = useQuery(GET_ALL_BUILDS, {
        fetchPolicy: "no-cache"
    }
    );
    const posts = data?.builds || [];
    // console.log(posts);
    posts.reverse();


    if (loading) {
        return <div>Loading...</div>;
    }
    if (posts.length === 0) {
        return (<>
            <h1>No posts yet</h1>
            <div>
                <Link to="/build/create">Create a new post</Link>
            </div>
        </>
        );
    }
    return (
        //future development 
        <div className='post'>
            {posts.map((post, index) => (

                <Post title={post.title} game={post.game} description={post.body} _id={post._id} key={index} />
            ))}
        </div>
    );
}
