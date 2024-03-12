import { useState } from 'react';
import { useQuery } from '@apollo/client';
import Post from '../components/Post';
import { Link } from 'react-router-dom';
import { GET_ALL_BUILDS } from '../utils/queries.js';

export default function Search() {
    const { loading, data } = useQuery(GET_ALL_BUILDS, {
        fetchPolicy: "no-cache"
    });
    const [searchTerm, setSearchTerm] = useState('');
    const posts = data?.builds || [];

    const handleSearch = () => {
        // Perform the search action here
        // For example, filter posts based on the search term
        const filteredPosts = posts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.game.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return filteredPosts;
    };

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
            <div className='search-bar'>
                <input
                    type="text"
                    placeholder="Search by title, game, post user or description"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className='single-project'>
                {filteredPosts.map((post, index) => (
                    <Post title={post.title} game={post.game} description={post.body} key={index} />
                ))}
            </div>
        </div>
    );
}
