import { axiosInstance } from "../axios/axiosConfig"
//https://pokeapi.co/api/v2
export const getPokemons = async ({limit = 10,offset = 0}) =>{
    return axiosInstance.get(`/pokemon?limit=${limit}&offset=${offset}`).then(res => res);
}
export const getPokemonByName = async ({name}) =>{
    return axiosInstance.get(`/pokemon/${name}`).then(res => res);
}