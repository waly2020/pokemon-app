import { Link } from "react-router-dom";
import "../../sass/components/pokemonItem.scss";
import Container from "../Container";

import { forwardRef } from "react";
const Pokemon = forwardRef(({pokemon},ref) => {
  return (
    <Link to={`/details/${pokemon.name}`} ref={ref} className="pokemon"> 
        <div className={`pokemon-background ${pokemon.types[0].type.name}`}>
          <img src="/assets/images/shadow-ball.png" />
        </div>
        <div className="pokemon-name">
          <p>{pokemon.name}</p>
        </div>
        <div className="pokemon-type">
          {pokemon.types.map((item,i,_) => (
            <>
              <p>{item.type.name}</p>
            </>
          ))}
        </div>
        <div className="pokemon-image">
          <img src={pokemon.sprites.other.dream_world.front_default}/>
        </div>
    </Link>
  );
}); 

export default Pokemon;
