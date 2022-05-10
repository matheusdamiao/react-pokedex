import React from 'react'

const PokemonCard = ({name, id, image, ability, type, weight, height}) => {

    const Card = {
        backgroundColor: 'lightgrey',
        padding: '50px 50px',
        boxSizing: 'border-box',
        margin: '10px',
        width: '300px',
        borderRadius: '25px 25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }
      
      
      const imgStyle = {
        width: '150px',
        display: 'block',
        margin: '0 auto'
      
      }
      
      const pstyle = {
        lineHeight: '5px',
        textAlign: 'center',
        fontWeight: '600'
      }



  return (
    <div style={Card}>
      
      <img src={image} style={imgStyle} alt={`There's no image available`} />
      <div> 
        <h1 style={{textAlign: 'center'}}> {name}</h1>
        <p style={{textAlign: 'center', fontWeight: 'lighter'}}> ID: {id}</p> 
        <p style={pstyle}> Type: {type} </p> 
        <p style={pstyle}> Ability: {ability} </p>
        <p style={pstyle}> Weight: {weight} hg</p>
        <p style={pstyle}> Height: {height} dm</p>
        
      </div>
    </div>
  )
}

export default PokemonCard
