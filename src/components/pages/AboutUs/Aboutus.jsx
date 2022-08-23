import './Aboutus.css';
import Member from './Member';
import Card from '../../Card/Card.jsx';
import Cards from '../../Card/Cards.jsx';
import { Aayan, Baneen, Celin, Hassan, Kaitlyn, Karnbir, Leah, Lily, Mohammed, Rafiq, Sean, Siddhartha } from '../../../assets';
import Footer from '../../Footer/Footer';

const AboutUs = () => {
    return (
      <div className="custom-background">
        <div className="about-us">
          <div className="section-title">
            <h1>About Us</h1>
          </div>
            <Cards>
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
            </Cards>
          
          <div className="section-title">
            <h1>Meet Our Team</h1>
          </div>
          <div className="about-us__team">
            <Member 
              name="Karnbir Saini" 
              discipline="ECE 2T4+2" 
              role="Director" 
              pronouns="He/Him"
              image={Karnbir}
              funfact={<>The +2 next to my discipline means I split both my first and second years in half! 
              I enjoy the extra sleep...</>}
              linkedin="https://www.linkedin.com/in/karnbir-saini/"
              instagram="https://www.instagram.com/s.s_karn/"
            />
            <Member 
              name="Sean Kim" 
              discipline="ECE 2T5" 
              role="Webmaster" 
              pronouns="He/Him"
              image={Sean}
              funfact={<>Mint Chocolate is great.</>}
              linkedin="https://www.linkedin.com/in/skim1601/"
              instagram="https://www.instagram.com/skim1601/"
              github="https://github.com/skim1601"
            />
            <Member 
              name="Ayaan Pathan" 
              discipline="T1 2T6" 
              role="Webmaster" 
              pronouns="He/Him"
              image={Aayan}
              funfact={<>I suck at basketball</>}
              linkedin="https://www.linkedin.com/in/ayaan-pathan-b2360720a/"
              github="https://github.com/N00dleMaster"
            />
            <Member 
              name="Celin Begeshev" 
              discipline="Mech 2T5" 
              role="Membership Director" 
              pronouns="She/They"
              image={Celin}
              funfact={<>I'm double jointed in my arms</>}
              instagram="https://www.instagram.com/celi_bean/"
            />
            <Member 
              name="Baneen Kazmi" 
              discipline="CIV 2T5" 
              role="Membership Director" 
              pronouns="She/Her"
              image={Baneen}
              funfact={<>I love chandeliers!! and I’ll MAKE you love them too</>}
              instagram="https://www.instagram.com/cinnabaneen/"
            />
            <Member 
              name="Mohammed Qureshi" 
              discipline="Mech 2T5" 
              role="Membership Director" 
              pronouns="He/Him"
              image={Mohammed}
              funfact={<>I got a mark of 99% in my grade 12 Calculus class</>}
              instagram="https://www.instagram.com/mohammed.416_/"
            />
            <Member 
              name="Rafiq Omair" 
              discipline="Mech 2T5" 
              role="Skule Relations Director" 
              pronouns="He/Him"
              image={Rafiq}
              funfact={<>I have been brought on as a guest speaker on multiple football & basketball radio shows. </>}
              linkedin="https://www.linkedin.com/in/rafiqomair"
              instagram="https://www.instagram.com/rafiqomair/"
            />
            <Member 
              name="Lily Kim" 
              discipline="ECE 2T5" 
              role="Marketing Director" 
              pronouns="She/Her"
              image={Lily}
              funfact={<>I have a fraternal twin sister!</>}
              instagram="https://www.instagram.com/jin_bbang319/"
            />
            <Member 
              name="Siddhartha Challa" 
              discipline="Mech 2T4" 
              role="Events and Logistics Director" 
              pronouns="He/Him"
              image={Siddhartha}
              funfact={<>I once performed a recorder duet cover of Fireflies 
              with my friend while another friend was default dancing and the 
              video is on the internet somewhere </>}
              instagram="https://www.instagram.com/sidrc.3/"
            />
            <Member 
              name="Hassan Tahir" 
              discipline="EngSci 2T6" 
              role="Frosh Representative" 
              pronouns="He/Him"
              image={Hassan}
              funfact={<>I love big cities! There's something special about the skyscrapers, 
              colorful lights, public transport vehicles, and lots of people everywhere that I adore =)</>}
              youtube="https://youtube.com/channel/UCvtF9zLfEIj8WK6c59Sn3nQ"
            />
            <Member 
              name="Leah Ben-Tzur" 
              discipline="EngSci 2T6" 
              role="Frosh Representative" 
              pronouns="She/Her"
              image={Leah}
              funfact={<>My favourite Canadian aircraft is the McDonnell Douglas CF-188.</>}
              instagram="https://www.instagram.com/leah.bentzur/"
            />
            <Member 
              name="Kaitlyn Wong" 
              discipline="Mech 2T6" 
              role="Frosh Representative" 
              pronouns="She/Her"
              image={Kaitlyn}
              funfact={<>My official average on solving a 3x3 Rubik's Cube is 9.59 seconds :D</>}
              instagram="https://www.instagram.com/kaitlyn.w___/"
            />
          </div>

        </div>
        <Footer/>
      </div>
    );
  }
  
export default AboutUs;