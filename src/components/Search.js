import { RiSearchLine } from "react-icons/ri";
import "../sass/components/search.scss"
import { Link } from "react-router-dom";
import { useState } from "react";
import { getPokemonByName } from "../service/api";
const Search = () => {
  const [pokemon,setPokemon] = useState(null);
  const searchText = (text = "") =>{
    if(text.length){
      getPokemonByName({name : text}).then(res =>{
        if(res.status === 200){
          setPokemon(res.data);
        }
      }).catch(err =>{
        setPokemon(null)
      })
    }
  }
  return (
    <>
      <div className="search-container">
        <div className="input-container">
          <input type="search" placeholder="Search your pokemon" onInput={(e) =>{searchText(e.target.value)}}/>
          <button>
            <RiSearchLine />
          </button>
          <Link to={`details/${pokemon ? pokemon?.name : "/"}`} className={`searsh-data ${pokemon ? "" : "none"}`}>
            <div>
              <p className="name">{pokemon?.name}</p>
              <p>#{pokemon?.id}</p>
            </div>
            <div>
              <img src={pokemon?.sprites.other.dream_world.front_default}/>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Search;
