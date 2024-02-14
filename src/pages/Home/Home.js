import { useEffect, useState } from "react";
import PageTemplate from "../../components/PagesModels/Template";
import Search from "../../components/Search";
import Pokemon from "../../components/pokemon/Pokemon";
import "../../sass/home.scss"
import { getPokemonByName, getPokemons } from "../../service/api";
const Home = () => {
  const [pokemons,setPokemons] = useState([]);
  useEffect(() =>{
    getPokemons({limit : 10,offset : 0}).then(res =>{
      if(res.status == 200){ 
        let pokemons = [];
        res.data.results.map((item,i,_) =>{
           getPokemonByName({name : item.name}).then(resPoke =>{
            if(resPoke.status == 200){ 
              pokemons.push(resPoke.data);
              setPokemons(pokemons);
            }else{
              console.log("echec");
            }
          })
        })
      }
    }) 
  },[])
  return (
    <>
      <PageTemplate topBar={<HomeTopBar />}>
        <div className="home-content">
          <Search/>
          <div className="pokemon-container">
          {pokemons.map((item,i,_) => (
            <Pokemon key={i} pokemon={item}/>
          ))}
          </div>
        </div>
      </PageTemplate>
    </>
  );
};
const HomeTopBar = () => {
  return (
    <>
      <p className="app-title">POKEDOX</p>
      <div className="logo">
        <img src="/assets/images/ball.png" alt="pokeball"/>
      </div>
    </>
  );
};
export default Home;
