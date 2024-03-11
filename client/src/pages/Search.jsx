import Post from '../components/Post';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';
import { GET_ALL_BUILDS } from '../utils/queries.js';
export default function Search() {

    const { loading, data } = useQuery(GET_ALL_BUILDS,{
        fetchPolicy: "no-cache"
      });
      
      const posts = data?.builds || [];
      
      console.log(posts);

return (
    <div>
    <div className='single-project'>
        {posts.map((post, index) => (
            <Post title={post.title} game={post.game} description={post.description} key={index} />
            ))}   
    </div>
            </div>
);
}