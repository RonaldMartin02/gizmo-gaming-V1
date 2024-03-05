import Post from '../components/Post';
import { Link, useLocation } from 'react-router-dom';

export default function Build() {
    const currentPage = useLocation().pathname;
    const posts = [
        {
            title: 'Post 1',
            description: 'This is the first project',
        },
        {
            title: 'Project 2',
            description: 'This is the second project',
        },
        {
            title: 'Project 3',
            description: 'This is the third project',
        }
    ];
return (
    <div>
    <h1>Portfolio</h1>
    <div className='single-project'>
        {posts.map((post, index) => (
            <Post title={post.title} game={post.game} description={post.description} key={index} />
            ))}   
    </div>
        {/* <Link to="/">Go to Home</Link> */}
            </div>
);
}