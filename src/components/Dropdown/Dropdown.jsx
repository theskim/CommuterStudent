import './Dropdown.css';
import { Caret } from '../../assets';

const Dropdown = (props) => {

    return (
        <div className="dropdown">
            <div className="dropdown__header">
                <span className="dropdown__header__caret">
                    <img src={Caret} alt="" />
                </span>
                <div className="dropdown__header__title"><h3>{props.title}</h3></div>
            </div>
            <ul className="dropdown__content">
                {props.content.map((item) => {
                    return <li className="dropdown__content__item">{item}</li>
                })}
            </ul>
        </div>
    )

}

export default Dropdown;