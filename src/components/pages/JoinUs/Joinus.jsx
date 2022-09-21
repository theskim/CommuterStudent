import Footer from "../../Footer/Footer";
import Background from "../../Background/Background";
import "./Joinus.css";

const JoinUs = () => {
    return (
      <Background>
        <div className="join-us">
            <div className="section-title">
                  <h1>Membership From</h1>
            </div>

            <div className="formEmbed">
              <iframe title="formEmbed" src="https://docs.google.com/forms/d/e/1FAIpQLSdRJYQjh4D_NohNCoTX7emkSbLzkBCnO6Kjkrs0o3Eu9wrBAw/viewform?embedded=true" width="100%" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            
            
            <div className="section-title">
                  <h1>Commuter Buddy Program Signup</h1>
                  <p><strong>Don't hesitate! Sign up now!</strong> Sign ups close <strong>September 30th</strong> (subject to change)</p>
            </div>

            <div className="formEmbed">
              <iframe title="formEmbed" src="https://docs.google.com/forms/d/e/1FAIpQLSdRJYQjh4D_NohNCoTX7emkSbLzkBCnO6Kjkrs0o3Eu9wrBAw/viewform?embedded=true" width="100%" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
        <Footer/>
      </Background>
    );
  }
  
export default JoinUs;