import './Dropdown.css';

const Dropdown = (props) => {

    return (
        <div className="dropdown">
            <div className="dropdown__header">
                <span className="dropdown__header__caret">
                    <img src="https://img.icons8.com/material/24/000000/down-arrow.png" alt="down arrow" />
                </span>
                <div className="dropdown__header__title"><h3>{props.title}</h3></div>
            </div>
            <div className="dropdown__content">
                {props.content.map((item) => {
                    return <div className="dropdown__content__item">{item}</div>
                })}
            </div>
        </div>
    )

}

export default Dropdown;