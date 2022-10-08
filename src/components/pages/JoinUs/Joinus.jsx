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
        </div>
        <Footer/>
      </Background>
    );
  }
  
export default JoinUs;