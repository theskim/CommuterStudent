import './Card.css';


// The Card element is for the individual cards, while Cards serves as a wrapper and dynamic resizer for the individual Cards.
function Card(props) {
    return (
        <div className="card">
            <div className="card__header">
                <h3 className="card__header__title">{props.title}</h3>
            </div>
            <p className="card__content">{props.content}</p>
        </div>
    )
}




export default Card;