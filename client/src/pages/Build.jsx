// import Post from '../components/Post';
import { Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Comment from '../components/Comment';

import { QUERY_BUILD } from '../utils/queries';

// 
export default function Build() {
    const posts = [
        {
            title: 'Post 1',
            description: 'This is the first project',
            Comments: [
                {
                    commentUser: 'User',
                    commentBody: 'This is the first comment',
                }]
        },
        {
            title: 'Project 2',
            description: 'This is the second project',
            Comments: [
                {
                    commentUser: 'User',
                    commentBody: 'This is the first comment',
                }]
        },
        {
            title: 'Project 3',
            description: 'This is the third project',
            Comments: [
                {
                    commentUser: 'User',
                    commentBody: 'This is the first comment',
                }]
        }
    ];
    return (
        <div>
            <h1>Build Post</h1>
            <div className='single-project'>
                {posts.map((post, index) => (
                    <div key={index}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <Comment commentUer
                            ={post.Comments[0].commentUser
                            } commentBody={post.Comments[0].commentBody}
                        />
                    </div>
                ))}
            </div>
            {/* <Link to="/">Go to Home</Link> */}
        </div>
    );
}




// const Build = () => {
//   const { buildId } = useParams();

//   const { loading, data } = useQuery(QUERY_BUILD, {
//     variables: { buildId: buildId },
//   });

//   const build = data?.build || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h3>{build.postUser} commented on {build.postDate}</h3>
//       <p>{build.postBody}</p>
//       <Comments comments={build.postComments} />
//     </div>
//   );
// }

// export default Build;