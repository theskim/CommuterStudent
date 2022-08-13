import SocialMediaButton from "./SocialMediaButton";
import { InstagramLogo, DiscordLogo } from "../../../assets";
import './Home.css';

const Home = () => {
    return (
      <div className="custom-background">
        <div className="home">
          <h1>Skule™ Commuter Student Project Directorship</h1>
          <div className="home__buttons">
            <SocialMediaButton source={DiscordLogo} link="https://discord.gg/yph2EjkbhW"/>
            <SocialMediaButton source={InstagramLogo} link="https://www.instagram.com/skule.commuters/"/>
          </div>
        </div>
      </div>
    );
  }
  
export default Home;