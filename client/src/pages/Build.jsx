// import Post from '../components/Post';
// import { Link, useLocation } from 'react-router-dom';
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import './scss/Build.scss';

// import Comment from '../components/Comment';

import { GET_BUILD } from '../utils/queries';
import { REMOVE_BUILD } from '../utils/mutations';

// 
export default function Build() {

    const { buildId } = useParams();
    const { loading, data } = useQuery(GET_BUILD, {
        variables: { buildId: buildId },
    });
    const build = data?.build || {};
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
            window.location.href = "/"
        } catch (err) {
            console.error(err);
        }
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    const renderButtons = () => {
        if (!Auth.loggedIn()) {
            console.log('You are not logged in');
            return null;
        }
        else {
            if (build.username === Auth.getProfile().data.username) {
                
                return (
                    <div className='Build_Btns'>
                        <button className='Build_Btns_Edit' onClick={() => { window.location.href = `./Edit/${buildId}` }}>Edit</button>
                        <button className='Build_Btns_Delete' onClick={handleDelete}>Delete</button>
                    </div>
                );
            }
        }

    }
    return (
        <div className='Build'>
            <h1 className='Build_Title'>
                {build.title} 
                <span className='Build_User'>
                    ( {build.username} )
                                    </span>
            </h1>
            <p className='Build_Game'>{build.game}</p>
            <p className='Build_Body'>{build.body}</p>
            {renderButtons()}
        </div>
    );
}