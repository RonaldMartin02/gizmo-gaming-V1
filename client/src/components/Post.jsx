import {Link} from 'react-router-dom';
export default function Post(props) {

    return (
        <div className="card" key={props._id}>
             <Link to={`/build/${props._id}`}>
            <div className="card_body">
                <h2 className="card_title">{props.title}</h2>
                <h4 className="card_game">{props.game}</h4>
                <p className="card_description">{props.description}</p>
            </div>
             </Link>
        </div>
    );
}