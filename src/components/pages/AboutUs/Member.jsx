const Member = (props) => {
    return (
        <div className="member-box">
            <img src={props.image} alt="Loading.."/>
            <h3>{props.name}</h3>
            <h5>{props.discipline}</h5>
            <p>{props.role}</p>
        </div>
    );
}

export default Member