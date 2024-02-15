import "../../sass/components/detailAbout.scss"
import { IoResizeSharp } from "react-icons/io5";
import { GiWeightScale, GiPowerLightning} from "react-icons/gi";
import Container from "../Container";

const About = ({pokemon}) => {
  return (
    <>
      <div className="about-container">
      <Container className="title-sec-about">
        <h2>About</h2>
      </Container>
      <div className="container-icon-details">
        <Container className="icon-details">
          {/* <div className="icon-icon-detail purple"><IoResizeSharp/></div> */}
          <p className="relative title-icon-detail purple">Size</p>
          <p className="value-icon-detail relative">{pokemon?.height} cm</p>
        </Container>
        <Container className="icon-details">
          {/* <div className="icon-icon-detail red"><GiWeightScale/></div> */}
          <p className="relative title-icon-detail red">Weight</p>
          <p className="value-icon-detail relative">{pokemon?.weight} kg</p>
        </Container>
        <Container className="icon-details">
          {/* <div className="icon-icon-detail orange"><GiPowerLightning/></div> */}
          <p className="relative title-icon-detail orange">Ability</p>
          <p className="value-icon-detail relative">{pokemon?.abilities.map((abilitie,i,_) => {
            if(!abilitie?.is_hidden){
              return <span key={i}>{abilitie.ability.name}</span>
            }
          })}</p>
        </Container>
      </div>
      <Container className="title-sec-about">
        <h2>Stats</h2>
      </Container>
      <div className="container-stats">
        {pokemon?.stats.map((stat,i,_) =>{
          return <Container className="stats">
            <p className="stat-title">{stat.stat.name}</p>
            <p className="stat-value">{stat.base_stat}</p>
          </Container>
        })}
      </div>
      </div>
    </>
  );
};

export default About;
