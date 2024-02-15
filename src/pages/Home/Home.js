import { useEffect, useState } from "react";
import PageTemplate from "../../components/PagesModels/Template";
import Search from "../../components/Search";
import Pokemon from "../../components/pokemon/Pokemon";
import "../../sass/home.scss"
import { getPokemonByName, getPokemons } from "../../service/api";
import {motion} from "framer-motion"
import DynamicPokemon from "../../components/pokemon/Pokemon";

const MainVariant = {
  initial : {opacity : 1},
  animate : {transition: {staggerChildren: .3}}
}
const BoxVariant = {
  initial : {y : 50,opacity : 0},
  animate : {y : 0,opacity : 1}
}

const Home = () => {
  const [pokemons,setPokemons] = useState([]);
  useEffect(() =>{
    getPokemons({limit : 50,offset : 0}).then(res =>{
      if(res.status === 200){ 
        let pokemonsRef = [];
        res.data.results.map((item,i,_) =>{
            getPokemonByName({name : item.name}).then(resPoke =>{
            if(resPoke.status === 200){
              pokemonsRef = [...pokemonsRef,resPoke.data];
              setPokemons(pokemonsRef);
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
          <motion.div variants={MainVariant} initial={"initial"} animate={"animate"} className="pokemon-container">
          {pokemons.map((item,i,_) => (
            <DynamicPokemon transition={{duration : .5,delay : 1}} variants={BoxVariant} key={i} pokemon={item}/>
          ))}
          </motion.div>
        </div>
      </PageTemplate>
    </>
  );
};
const HomeTopBar = () => {
  return (
    <>
      <p className="app-title">POKEDEX</p>
      <div className="logo">
        <img src="/assets/images/ball.png" alt="pokeball"/>
      </div>
    </>
  );
};
export default Home;
