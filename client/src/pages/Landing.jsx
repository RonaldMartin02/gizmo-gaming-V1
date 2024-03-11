import { useQuery } from '@apollo/client';
import Post from '../components/Post';

import { GET_ALL_BUILDS } from '../utils/queries.js';
export default function Landing() {
    const { loading, data } = useQuery(GET_ALL_BUILDS);
    const posts = data?.builds;
    console.log(posts);
return (
        <div>
            <div className='single-project'>

                {posts.map((post, index) => (
                    <Post title={post.title} game={post.game} description={post.body} key={index} />
                ))}
            </div>
        </div>
    );
}
