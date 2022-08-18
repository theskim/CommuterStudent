import SocialMediaButton from "./SocialMediaButton";
import { InstagramLogo, DiscordLogo, CommuterBanner } from "../../../assets";
import './Home.css';

const Home = () => {
    return (
		<div className="home-banner">
			<div className="home-banner__img">
				<img src={CommuterBanner} alt="" />
			</div>
			<div className="home-banner__content">
				<div className="home-banner__content__title">
					<h1>Commuter Project Directorship</h1>
				</div>
				<div className="home-banner__content__icons">
					<SocialMediaButton source={DiscordLogo} link="https://discord.gg/yph2EjkbhW"/>
					<SocialMediaButton source={InstagramLogo} link="https://www.instagram.com/skule.commuters/"/>
				</div>
			</div>
		</div>
    );
  }
  
export default Home;