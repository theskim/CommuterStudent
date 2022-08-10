import { LinkedInLogo, InstagramLogo, YoutubeLogo, GithubLogo } from "../../../assets";

const Member = (props) => {
    return (
        <div className="member-box">
            <img className="member-pic" src={props.image} alt="Loading.."/>
            <h3>{props.name}</h3>
            <h5>{props.discipline}</h5>
            <h4>{props.role}</h4>
            <p>Fun Fact: {props.funfact}</p>
            { props.linkedin === undefined
                ? <></>
                : <a href={props.linkedin} class="button"><img className="social-media-logo" src={LinkedInLogo} alt=""/></a>
            }
            { props.instagram === undefined
                ? <></>
                : <a href={props.instagram} class="button"><img className="social-media-logo" src={InstagramLogo} alt=""/></a>
            }
            { props.youtube === undefined
                ? <></>
                : <a href={props.youtube} class="button"><img className="social-media-logo" src={YoutubeLogo} alt=""/></a>
            }
            { props.github === undefined
                ? <></>
                : <a href={props.github} class="button"><img className="social-media-logo" src={GithubLogo} alt=""/></a>
            }
        </div>
    );
}

export default Member