import './Dropdown.css';
import { Caret } from '../../assets';
import { useState } from 'react';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrop = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="dropdown">
            <div className="dropdown__header" onClick={toggleDrop}>
                <span className={`dropdown__header__caret ${(isOpen ? "open" : "")}`}>
                    <img src={Caret} alt="" />
                </span>
                <div className="dropdown__header__title">
                    <h3>
                        { props.image === undefined ? <></> : <img src={props.image} height="20px" style={{marginRight:"1vw"}} alt="Loading.."/>}
                        {props.title}
                    </h3>
                </div>
            </div>
            <div className={`dropdown__content ${(isOpen ? "open-ul" : "closed-ul")}`}>
                <ul>
                    {props.content.map((item) => {
                        return <li className="dropdown__content__item">{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )

}

export default Dropdown;