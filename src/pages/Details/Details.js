import { useEffect, useRef, useState } from "react";
import PageTemplate from "../../components/PagesModels/Template";
import "../../sass/details.scss";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Onglets from "../../components/Onglets";
import About from "../../components/details/About";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../../service/api";

const Details = () => {
  const headerRef = useRef();
  const { pokemon } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() =>{
    getPokemonByName({ name: pokemon }).then((res) => {
      if (res.status == 200) {
        setPokemonData(res.data);
      }
    });
  },[])
  return (
    <>
      <PageTemplate
      classContent="detail-page-content"
        className={pokemonData?.types[0].type.name ?? "normal"}
        style={{ minHeight: "100vh"}}
        topBar={<TopBar />}
      >
        <div className="details">
          <header ref={headerRef}>
            <div className="pokemon-header-details">
              <div className="row">
                <h1>{pokemonData?.name ?? ""}</h1>
                <h3 className="number">#{pokemonData?.order}</h3>
              </div>
              <div className="row">
                <div className="pokemon-type">
                  {pokemonData?.types.map((type, i, _) => {
                    return <p>{type.type.name}</p>;
                  })}
                </div>
                <p className="seed"></p>
              </div>
            </div>
            <div className="pokemon-image-detail">
              <img
                src={pokemonData?.sprites.other.dream_world.front_default ?? ""}
              />
            </div>
          </header>
          <div className="details-container">
            <Onglets
              onglets={[
                { title: "About", content: <About pokemon={pokemonData}/> },
                { title: "Moves", content: <h1>Moves</h1> },
                { title: "Evolution", content: <h1>Evolution</h1> },
                { title: "Main state", content: <h1>Main state</h1> },
              ]}
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
