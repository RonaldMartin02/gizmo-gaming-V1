export default function Comment(props) {
    return (
        <div>
            <h3>{props.commentUser}</h3>
            <p>{props.commentBody}</p>
        </div>
    )
}

