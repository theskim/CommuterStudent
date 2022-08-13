import Dropdown from '../../Dropdown/Dropdown';
import './Events.css';

const Events = () => {
    return (
      <div className="custom-background">
        <div className="events">
          <h2>Events</h2>
          <div className="events__content">
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
          </div>
        </div>
      </div>
    );
  }
  
export default Events;