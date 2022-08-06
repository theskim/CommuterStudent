import './Card.css';


function Card(props) {
    return (
        <div className="card">
            <div className="card--header">
                <h3 className="card--header--title">{props.title}</h3>
            </div>
            <p className="card--content">{props.content}</p>
        </div>
    )
}




export default Card;