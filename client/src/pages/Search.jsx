import { useQuery } from '@apollo/client';
import Post from '../components/Post';
import { Link, useLocation } from 'react-router-dom';
import { GET_ALL_BUILDS } from '../utils/queries.js';

export default function Search() {
    const location = useLocation();
    const lastSegment = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    const search = lastSegment.replaceAll("%20", " ");
    const { loading, data } = useQuery(GET_ALL_BUILDS, {
        fetchPolicy: "no-cache"
    });

    const posts = data?.builds || [];
    posts.reverse();

    const handleSearch = () => {
        const filteredPosts = posts.filter((post) =>
            post.game.toLowerCase().includes(search.toLowerCase())); 
            if (filteredPosts.length === 0) {
                alert('No results found.');
                window.location.href = "/";
            }
        return filteredPosts;
    };

    if (loading) {
        return <div className='loadingIcon'>Loading...</div>;
    }

    const filteredPosts = handleSearch();

    return (
        
            <div className='posts'>
                {filteredPosts.map((post, index) => (
                    <Post _id={post._id} title={post.title} game={post.game} description={post.body} key={index} />
                ))}
            </div>
    );
}
