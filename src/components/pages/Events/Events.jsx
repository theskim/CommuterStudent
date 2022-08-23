import Dropdown from '../../Dropdown/Dropdown';
import Dropdowns from '../../Dropdown/Dropdowns';
import Footer from '../../Footer/Footer';
import './Events.css';

const Events = () => {
    return (
      <div className="custom-background">
        <div className="events">
          <h1>Events</h1>
          <Dropdowns>
            <Dropdown 
              title="Commuter Buddy Social – Fall Edition" 
              content={[<>Coming Soon!</>]} 
              />
            <Dropdown 
              title="Commuter Buddy Social – Winter Edition" 
              content={[<>Coming Soon!</>]} 
              />
            <Dropdown 
              title="Commuter Exam Strategy Session" 
              content={[<>Coming Soon!</>]} 
              />
          </Dropdowns >
          
        </div>
        <Footer/>
      </div>
    );
  }
  
export default Events;