import './Tips.css';
import Dropdown from '../../Dropdown/Dropdown';


const tips = [
  'If you use GO train to commute, don’t forget to set a default trip.',
  'If you are commuting from Queen’s park, try to walk through Medical Science Building which will save you a solid 2-3 minutes each time',
  'If you have any other suggestions, please let us know!'
]

const Tips = () => {
    return (
      <div className="custom-background">
        <div className="tips">

          <h1>Commuter Tips</h1>

          <Dropdown title="Tips" content={tips} />
          
        </div>
      </div>
    );
  }
  
export default Tips;