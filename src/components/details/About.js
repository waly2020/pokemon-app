import "../../sass/components/detailAbout.scss"
import { IoResizeSharp } from "react-icons/io5";
import { GiWeightScale, GiPowerLightning} from "react-icons/gi";
import Container from "../Container";

const About = () => {
  return (
    <>
      <div className="about-container">
      <div className="container-icon-details">
        <Container className="icon-details">
          <div className="icon-icon-detail purple"><IoResizeSharp/></div>
          <p className="relative title-icon-detail purple">Size</p>
          <p className="value-icon-detail relative">0.70 cm</p>
        </Container>
        <Container className="icon-details">
          <div className="icon-icon-detail red"><GiWeightScale/></div>
          <p className="relative title-icon-detail red">Weight</p>
          <p className="value-icon-detail relative">6.9 kg</p>
        </Container>
        <Container className="icon-details">
          <div className="icon-icon-detail orange"><GiPowerLightning/></div>
          <p className="relative title-icon-detail orange">Ability</p>
          <p className="value-icon-detail relative">overcome</p>
        </Container>
      </div>
      <Container>
      <p>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant remplacer le faux-texte dès qu'il est prêt ou que la
        mise en page est achevée. Généralement, on utilise un texte en faux
        latin, le Lorem ipsum ou Lipsum.
      </p>
      </Container>
      </div>
    </>
  );
};

export default About;