import './Aboutus.css';
import Member from './Member';
import Card from '../../Card/Card.jsx';
import { CommuterLogo } from '../../../assets';

const AboutUs = () => {
    return (
      <div className="custom-background">
        <div className="about-us">
          <div className="about-us__header">
            <Card 
              title="Our Mission" 
              content="Commuting comes with its unique set of challenges, 
                      whether it be navigating through bus routes, spending hours in commute, 
                      or having more difficulty forming social circles. Our goal is to unite commuters around the campus and provide them 
                      with the necessary resources and aid needed to overcome these obstacles."
            />
            <Card 
              title="What We Do" 
              content="We have created initiatives, such as the Commuter Buddy Program; 
                      a tool to help commuters who take similar routes form small groups, easing the journey. 
                      Additionally, we have monthly events. To learn more, check out the Events page."
            />
            <h3>Meet Our Team</h3>
          </div>

          <div className="about-us__team">
            <Member name="Karnibir Saini" discipline="ECE 2T4+2" role="Director" image={CommuterLogo}/>
            <Member name="Sean Kim" discipline="ECE 2T5" role="Webmaster" image={CommuterLogo}/>
            <Member name="Sean Kim" discipline="ECE 2T5" role="Webmaster" image={CommuterLogo}/>
            <Member name="Sean Kim" discipline="ECE 2T5" role="Webmaster" image={CommuterLogo}/>
            <Member name="Sean Kim" discipline="ECE 2T5" role="Webmaster" image={CommuterLogo}/>
            <Member name="Sean Kim" discipline="ECE 2T5" role="Webmaster" image={CommuterLogo}/>
            <Member name="Sean Kim" discipline="ECE 2T5" role="Webmaster" image={CommuterLogo}/>
            <Member name="Sean Kim" discipline="ECE 2T5" role="Webmaster" image={CommuterLogo}/>
          </div>
        </div>
      </div>
    );
  }
  
export default AboutUs;