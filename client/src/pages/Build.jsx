// import Post from '../components/Post';
// import { Link, useLocation } from 'react-router-dom';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import Comment from '../components/Comment';

import { GET_BUILD } from '../utils/queries';
import { REMOVE_BUILD } from '../utils/mutations';

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
    const [removeBuild, { error }] = useMutation(REMOVE_BUILD,
        {
            refetchQueries:
                [
                    GET_BUILD,
                    'getBuild'
                ]
        });

        const handleDelete = async (event) => {
            // event.preventDefault();
            console.log('delete');
            try {
                const { data } = await removeBuild({
                    variables: {
                        buildId: buildId
                    },
                });
                console.log(data);
                window.location.href = "/"
            } catch (err) {
                console.error(err);
            }
        }
    if (loading) {
        return <div>Loading...</div>;
    }

    const renderButtons = () => {
        if (build.username === Auth.getProfile().data.username) {
            console.log('This is your post');
            return (
                <div>
                    <button onClick={()=>{window.location.href=`./Edit/${buildId}`}}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            );
        }
    
    }
    return (
        <div>
            <h1>{build.title}</h1>
            <p>{build.game}</p>
            <p>{build.username}</p>
            <p>{build.body}</p>
            {renderButtons()}
        </div>
    );
}