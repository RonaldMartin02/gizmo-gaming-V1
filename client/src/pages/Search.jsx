import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Post from '../components/Post';
import { Link, useLocation } from 'react-router-dom';
import { GET_ALL_BUILDS } from '../utils/queries.js';

export default function Search() {
    const location = useLocation();
    const lastSegment = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    const { loading, data } = useQuery(GET_ALL_BUILDS, {
        fetchPolicy: "no-cache"
    });

    const [searchTerm, setSearchTerm] = useState(lastSegment);
    const posts = data?.builds || [];

    const handleSearch = () => {
        const filteredPosts = posts.filter((post) =>
            post.game.toLowerCase().includes(searchTerm.toLowerCase()));

        return filteredPosts;
    };

    useEffect(() => {
        setSearchTerm(lastSegment);
    }, [lastSegment]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (posts.length === 0) {
        return (
            <>
                <h1>No posts yet</h1>
                <div>
                    <Link to="/build/create">Create a new post</Link>
                </div>
            </>
        );
    }

    const filteredPosts = handleSearch();

    return (
        <div>
            {/* <div className='search-bar'>
                <input
                    type="text"
                    placeholder="Search by game..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div> */}
            <div className='single-project'>
                {filteredPosts.map((post, index) => (
                    <Post _id= {post._id} title={post.title} game={post.game} description={post.body} key={index} />
                ))}
            </div>
        </div>
    );
}
