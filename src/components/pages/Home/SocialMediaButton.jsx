const SocialMediaButton = (props) => {
    return (
        <a href={props.link}>
            <img src={props.source} alt="Loading.."/>
        </a>
    );
}

export default SocialMediaButton