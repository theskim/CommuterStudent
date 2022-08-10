import './Tips.css';
import Dropdown from '../../Dropdown/Dropdown';


const tips = {
    "Go train tips": [
        "If you use GO train to commute, don’t forget to set a default trip.",
        "Go trains are cool",
        "Something else"
    ],
    "Misc Tips": [
        "If you are commuting from Queen’s park, try to walk through Medical Science Building which will save you a solid 2-3 minutes each time",
        "If you have any other suggestions, please let us know!"
    ]
}

const keys = Object.keys(tips);

const Tips = () => {
    return (
      <div className="custom-background">
        <div className="tips">

          <h1>Commuter Tips</h1>
		  <div className="tips__content">
			{keys.map((key) => {
				return <Dropdown title={key} content={tips[key]} />
				})}
		</div>

          
        </div>
      </div>
    );
  }
  
export default Tips;