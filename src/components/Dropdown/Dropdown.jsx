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
                        { props.image === undefined ? <></> : <img src={props.image} height="20px" style={{marginRight:"min(1.5vw, 1rem)"}} alt=""/>}
                        {props.title}
                    </h3>
                </div>
            </div>
            <div className={`dropdown__content ${(isOpen ? "open-ul" : "closed-ul")}`}>
                <ul>
                    {props.content.map((item) => {
                        // This is a hacky way to bold the first two words of a string (the meeting frequency and meeting length, etc.) for our club info section
                        // TODO: make this less hacky
                        const split = item.split(" ");
                        if(split[0] === "Meeting" || split[0] === "Time") {
                            let bolded = split[0] + " " + split[1];
                            let rest = item.substring(bolded.length);
                            return <li className="dropdown__content__item">
                                <u><b>{bolded}</b></u>{rest}
                            </li>

                        }
                        return <li className="dropdown__content__item">{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )

}

Dropdown.defaultProps = {content: [], title: "sus", image: "sus"};
export default Dropdown;