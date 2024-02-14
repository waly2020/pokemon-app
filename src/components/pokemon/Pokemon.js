import { Link } from "react-router-dom";
import "../../sass/components/pokemonItem.scss";
import Container from "../Container";
const Pokemon = ({pokemon}) => {
  return (
    <Link to="/details" className="pokemon">
      {/* <div className="pokemon"> */}
        <div className={`pokemon-background ${pokemon.types[0].type.name}`}>
          <img src="/assets/images/shadow-ball.png" />
        </div>
        <div className="pokemon-name">
          <p>{pokemon.name}</p>
        </div>
        <div className="pokemon-type">
          {/* <p>{pokemon.order}</p>
          <p>Foudre</p> */}
          {pokemon.types.map((item,i,_) => (
            <>
              <p>{item.type.name}</p>
            </>
          ))}
        </div>
        <div className="pokemon-image">
          <img src={pokemon.sprites.other.dream_world.front_default}/>
        </div>
      {/* </div> */}
    </Link>
  );
};

export default Pokemon;
