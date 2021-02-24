import React from 'react';

const Pokemon =(props)=>{
    const itemTypes = props.itemPokemonProp.types.map((types,index)=>{return(
        <li className="types__item" key={index}>
        {types}
        </li>
)});

return(
    <article className="card">
        <div><img src={props.itemPokemonProp.url}/></div>
        <div className="name">{props.itemPokemonProp.name}</div>
        <ul className="types">{itemTypes}</ul>
    </article>
)
}



export default Pokemon;