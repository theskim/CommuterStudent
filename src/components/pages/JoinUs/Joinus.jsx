import Footer from "../../Footer/Footer";
import Background from "../../Background/Background";
import "./Joinus.css";

const JoinUs = () => {
    return (
      <Background>
        <div className="join-us">
            <div className="section-title">
                  <h1>Membership Form</h1>
            </div>

            <div className="formEmbed">
                <div className="formContainer">
                  <iframe title="member" src="https://docs.google.com/forms/d/e/1FAIpQLSdRJYQjh4D_NohNCoTX7emkSbLzkBCnO6Kjkrs0o3Eu9wrBAw/viewform?embedded=true" width="100%" height="650" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>

            
            <div className="section-title">
                  <h1>Commuter Buddy Program Signup</h1>
                  <p><strong>Don't hesitate! Sign up now!</strong> Sign ups close <strong>September 30th</strong> (subject to change)</p>
            </div>

            <div className="formEmbed">
                <div className="formContainer">
                  <iframe title="buddy" src="https://docs.google.com/forms/d/e/1FAIpQLSdM6RW_y5PbuC5D5Vm5eg8fyALP8aV27x-nVyU_wVvAyhjL6w/viewform?embedded=true" width="100%" height="650" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
        </div>
        <Footer/>
      </Background>
    );
  }
  
export default JoinUs;