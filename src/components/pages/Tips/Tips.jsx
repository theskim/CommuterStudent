import './Tips.css';
import Dropdown from '../../Dropdown/Dropdown';
import Dropdowns from '../../Dropdown/Dropdowns';
import Footer from '../../Footer/Footer';

const tips = {
    "Go Train Tips": {
        "tips": [
                  "If you are travelling from Oakville, Brampton, or Milton, a GO train may be your best method of commute.",
                  "Get off at Union Station, and take the TTC up to Queen's Park Station.",
                  "Don’t forget to set a default trip. If your PRESTO card has a default trip set for travel between two stations, you only have to tap on it. If you take a trip that begins or ends at a different station, you have to tap on and off.",
                  "If you forget to tap off at the end of your trip, you will be charged the fare to the last stop on the line. You can always appeal a refund by filling out the webform on gotransit.com.",
                  "For the Barrie Line, sometimes it may be better to get off at Downsview park and take TTC vs getting off at Union Station (Especially during exams to Clara Benson Building)."
                ],
        "image": require("../../../assets/images/go-train.png")
    },
    "TTC Tips": {
        "tips": [
                  "If you are travelling from Kipling, Vaughan, or North York, a TTC may be your best method of commute.",
                  "There are four subway stations on or very near the University of Toronto: Queen's Park Station, Museum Station, St. George Station and Spadina Station. Queen's Park is the the closest to the Engineering Buildings.",
                  "If you commuting from Finch Side (Line 1), you can walk to campus from College station (about a 12-minute walk).",
                  "After your initial payment using your PRESTO card you can travel free of cost for the next two hours.",
                  "You can load a Monthly Pass onto your PRESTO Card that will allow you as many TTC rides as your heart desires for $128.15 per month, plus the $5.25 student ID card they make you buy."
                ],
        "image": require("../../../assets/images/ttc.png")
    },
    "Misc Tips": {
        "tips": [
                  "Try to make the most out of your commute. If your commute is longer than 40 minutes, you might want to do some light work or catch up on sleep. Use an agenda and calendar to stay organized and on top of your work.",
                  "Arrive at your destination at least 5 minutes before class starts.",
                  "If you are commuting from Queen’s park, try to walk through Medical Science Building which will save you a solid 2-3 minutes each time.",
                  "If you live close to the UofT Mississauga campus, you can take a shuttle bus between there and St.George. Rides are $7 with a $650 semester pass."
                ],
        "image": require("../../../assets/images/misc.png")
    },
}

const keys = Object.keys(tips);

const Tips = () => {
    return (
      <div className="custom-background">
        <div className="tips">

          <h1>Commuter Tips</h1>

          <Dropdowns>
            {keys.map((key) => {
              return <Dropdown title={key} content={tips[key].tips} image={tips[key].image}/>
            })}
          </Dropdowns>
          <br/>
          <h3 style={{textAlign: 'center'}}>Some tips are sourced from the 2T5 Frosh Handbook.</h3>
          <p style={{textAlign: 'center'}}>If you have any other suggestions, please let us know!</p>
        </div>
        <Footer/>
      </div>
    );
  }
  
export default Tips;