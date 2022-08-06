import './Cards.css';


// The Card element is for the individual cards, while Cards serves as a wrapper and dynamic resizer for the individual Cards.
function Cards(props) {
    return (
        <div className="cards">
            {props.children}
        </div>
    )
}

export default Cards;