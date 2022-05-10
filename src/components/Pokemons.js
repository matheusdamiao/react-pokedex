

import React from 'react'
import PokemonCard from './PokemonCard'

const Pokemons = ({pokeInput, pokeFiltrado, pokeArray}) => {

    const styleBody = {
        
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '40px'
    }



  return (
      <>
      { pokeInput.length == 0 ?
        <div style={styleBody}>
        {pokeArray.map((poke, index) => (
                     
            < PokemonCard
              name={poke.name}
              id={poke.id}
              index={index}
              image={poke.sprites.other.dream_world.front_default}
              ability={poke.abilities[0].ability.name} 
              type={poke.types[0].type.name}
              weight={poke.weight}
              height={poke.height}
             />
         
        
        ))}
        </div>
       : 
       <div style={styleBody}>
         {pokeFiltrado.map( (pke, index) =>

            < PokemonCard
            name={pke.name}
            id={pke.id}
            key={index}
            image={!pke.sprites.other.dream_world.front_default ? pke.sprites.front_default : pke.sprites.other.dream_world.front_default}
            ability={pke.abilities[0].ability.name} 
            type={pke.types[0].type.name}
            weight={pke.weight}
            height={pke.height}
            />
       )} 
       </div>
        }
     </>
  )
}

export default Pokemons
