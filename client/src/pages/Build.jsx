// import Post from '../components/Post';
// import { Link, useLocation } from 'react-router-dom';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Comment from '../components/Comment';

import { GET_BUILD } from '../utils/queries';

// 
export default function Build() {

    const { buildId } = useParams();
    console.log(buildId);
    const { loading, data } = useQuery(GET_BUILD, {
        variables: { buildId: buildId },
    });
    console.log(data);
    const build = data?.build || {};
    console.log(build);
    if (loading) {
        return <div>Loading...</div>;
    }
    const renderButtons = () => {
        if (build.username === Auth.getProfile().data.username) {
            return (
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            );
        }
    
    }
    return (
        <div>
            
            <h1>{build.title}</h1><span>{build.username}</span>
            <p>{build.body}</p>
        </div>
    );
}