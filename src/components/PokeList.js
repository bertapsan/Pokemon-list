import React from 'react';
import Pokemon from './Pokemon';

const PokeList =(props)=>{
const item = props.poke.map((itemPokemon)=>{
    return (
        <li key={itemPokemon.id} >
            <Pokemon itemPokemonProp={itemPokemon}/>
        </li>
    )});
return ( 
    <ul className="list">{item}</ul>
)
};
export default PokeList;



