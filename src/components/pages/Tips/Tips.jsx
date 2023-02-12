import './Tips.css';
import Dropdown from '../../Dropdown/Dropdown';
import Dropdowns from '../../Dropdown/Dropdowns';
import Footer from '../../Footer/Footer';
import Background from '../../Background/Background';

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



const clubInfo = {
  "University of Toronto Aerospace Team": {
    "tips": [
      "Meeting Frequency: Variable; Around 2-3 times a week on average.",
      "Meeting Length: 3 hours",
      "Meeting Methods: Hybrid",
      "Time commitment: Around 5 hours per week."
    ]
  },
  "University of Toronto Concrete Canoe Team": {
    "tips": [
      "Meeting Frequency: Weekly for subteams and monthly for the whole team.",
      "Meeting Length: 30 minutes to 1 hour.",
      "Meeting Methods: Hybrid",
      "Time commitment: 1-2 hours per week."
    ]
  },
  "Skule Archives": {
    "tips": [
      "Meeting Frequency: 1-2 times every 2 weeks.",
      "Meeting Length: 1 hour",
      "Meeting Methods: Hybrid",
      "Time commitment: 2 hours a week, maximum"
    ]
  },
  "Robotics for Space Exploration": {
    "tips": [
      "Meeting Frequency: (1-2)/week, a 4hr session on saturday and shorter meetings mid-week as needed.",
      "Meeting Length: 4 hours",
      "Meeting Methods: Some subteams can be hybrid, some must be in person in Myhal.",
      "Time commitment: 6 hours a week."
    ]
  },
  "Canadian Association of Food Engineers": {
    "tips": [
      "Meeting Frequency: Biweekly",
      "Meeting Length: 1 hour",
      "Meeting Methods: Online",
      "Time commitment: 3 hours"
    ]
  },
  "Spark Design Club": {
    "tips": [
      "Meeting Frequency: Once a week for general members, twice a week for exec members.",
      "Meeting Length: 1 hour.",
      "Meeting Methods: Our fall and winter semesters will be in person because club members are provided with hands-on mechatronics build sessions. if a club member has a special exception that prevents them from joining the fall/winter meetings in person, we will implement a hybrid meeting format.",
      "Time commitment: 2-3h for general members (1h meetings, 1-2h research). 3-4h for exec members (2h meetings, 1-2h research)",
    ]
  },
  "Skule™ Choir": {
    "tips": [
      "Meeting Frequency: Once a week",
      "Meeting Length: 2 hours",
      "Meeting Methods: Hybrid",
      "Time commitment: 2 hours a week."
    ]
  },
}



const keys = Object.keys(tips);
const clubKeys = Object.keys(clubInfo);

const Tips = () => {
    return (
      <Background>
        <div className="tips">

          <h1>Commuter Tips</h1><br/>

          <Dropdowns>
            {keys.map((key) => {
              return <Dropdown title={key} content={tips[key].tips} image={tips[key].image}/>
            })}
          </Dropdowns>
          <h3 style={{textAlign: 'center', margin: '10vh 0'}}>
            Some tips are sourced from the 2T5 Frosh Handbook. <br/> 
            If you have any other suggestions, please let us know!
          </h3>


          {/* this next bit is commuter info */}
          <hr/>
          <h1>Commuter Info: Joining a club!</h1>
          <h2>What's it like to join a club?</h2>
          <p>We've gathered information from various clubs, so you can get a sense of what it's like to be part of a club whilst having to commmute.</p>
          <Dropdowns>
            {clubKeys.map((club) => {
              return <Dropdown title={club} content={clubInfo[club].tips}/>
            })}
          </Dropdowns>

        </div>
        <Footer/>
      </Background>
    );
  }
  
export default Tips;