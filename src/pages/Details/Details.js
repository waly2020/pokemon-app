import { useRef } from "react";
import PageTemplate from "../../components/PagesModels/Template";
import "../../sass/details.scss";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Onglets from "../../components/Onglets";
import About from "../../components/details/About";

const Details = () => {
  const headerRef = useRef();
  // const headerWidth = headerRef.current.offsetWidth;
  return (
    <>
      <PageTemplate
        style={{ backgroundColor: "green", minHeight: "100vh" }}
        topBar={<TopBar />}
      >
        <div className="details">
          <header ref={headerRef}>
            <div className="pokemon-header-details">
              <div className="row">
                <h1>Pokemon</h1>
                <h3 className="number">#249</h3>
              </div>
              <div className="row">
                <div className="pokemon-type">
                  <p>Terre</p>
                  <p>Foudre</p>
                </div>
                <p className="seed">Seed Pokemon</p>
              </div>
            </div>
            <div className="pokemon-image-detail">
              <img src="/assets/images/11.png" />
            </div>
          </header>
          <div className="details-container">
            <Onglets
              onglets={
                [
                    { title: "About", content: <About/> },
                    { title: "Moves", content: <h1>Moves</h1> },
                    { title: "Evolution", content: <h1>Evolution</h1> },
                    { title: "Main state", content: <h1>Main state</h1> }
                    ]
                }
            />
          </div>
        </div>
      </PageTemplate>
    </>
  );
};
const TopBar = () => {
  return (
    <div className="details-top-bar">
      <button>
        <IoIosArrowBack />
      </button>
      <button>
        <FaRegHeart />
      </button>
    </div>
  );
};
export default Details;
