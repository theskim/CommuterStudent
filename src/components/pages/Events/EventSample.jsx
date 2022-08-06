const EventSample = (props) => {
    return (
        <>
            <h3>{props.name}</h3>
            <p>{props.children}</p>
        </>
    );
}

export default EventSample