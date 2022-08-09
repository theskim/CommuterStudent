import './Dropdown.css';

const Dropdown = (props) => {

    return (
        <div className="dropdown">
            <button className="dropdown__header">{props.title}</button>
            <div className="dropdown__content">
                {props.content.map((item) => {
                    return <div className="dropdown__content__item">{item}</div>
                })}
            </div>
        </div>
    )

}

export default Dropdown;