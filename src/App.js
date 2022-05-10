
import { useEffect, useState } from 'react';
import './App.css';
import Pokemons from './components/Pokemons';



function App() {


  // Fetching 20 pokemons or more

  const [pokeArray, setPokeArray] = useState([])
  const [pokeData, setPokeData] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
 

    const fetching = async () =>{
      const apiData = await fetch(pokeData)
      const response = await apiData.json();
      
    
     setPokeData(response.next)

    function catchPokemons(p) {
      p.map( async (poke)=> {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
        const pokeData = await pokemon.json()
        setPokeArray(list => [...list, pokeData])
      })
    }
    catchPokemons(response.results)
    
   }


useEffect( ()=> {
    fetching() 
    
}, [])
  

// search functionality

const [pokeInput, setPokeInput] = useState('')


    const handleInput = (e) => {
    let value = e.target.value
    setPokeInput(value)
    handleBtnSearch()
  }
  
  


  const handleBtnSearch = () =>{
      
    const dataFiltrado = (pk) =>{
      const dadopoke = fullData.filter( (poke) =>{
       if(pk == '') {
         return 
       }
       else if (poke.name.toLowerCase().includes(pk.toLowerCase())){
         return poke
       }
     })
     
     const dados = dadopoke.map( poke=> poke.url)
     
       const allPromises = Promise.all(dados.map(async (url) =>{
       const fet = await fetch(url);
       const resp = await fet.json()
       setPokeFiltrado(list => [...list, resp])
       
      } ))        

    }

    
    dataFiltrado(pokeInput)
    setPokeFiltrado([])   
  }


  const [fullData, setFulldata] = useState([])
  const [pokeFiltrado, setPokeFiltrado] = useState([])

    const selectPokemon = async () =>{
    const fet = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    const resp = await fet.json()
    const data = resp.results
    setFulldata(data)      

    }


  useEffect( ()=>{
    selectPokemon()
  }, [])
 

  const btnStyle = {
    cursor: 'pointer',
     padding: '12px 25px',
      marginLeft: '10px',
       border: 'none',
        backgroundColor: 'lightblue',
         borderRadius: '25px 25px',
         fontWeight: 'bold',
         
  }


  return (
    <>
      <h1 style={{display: 'flex', alignItems: 'center', justifyContent:'center', marginTop: '50px', fontSize: '3.5rem'}}> 
        PokeDex Search 
      </h1>

      <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', marginTop: '20px', padding: '20px 50px'}}> 
        <input style={{padding: '8px 30px', borderRadius: '25px 25px'}} placeholder={'ex. Pikachu'} value={pokeInput} onChange={e => {handleInput(e)}}/>
        <button style={btnStyle} onClick={ () => {handleBtnSearch()}}> Search Pokemon </button>
      </div>
     
      <Pokemons pokeInput={pokeInput} pokeFiltrado={pokeFiltrado} pokeArray={pokeArray}/>

      <button 
      style={{margin: '0 auto', marginTop: '50px', display:'block', padding: '20px 25px', borderRadius: '25px 25px', border: 'none', backgroundColor:'lightblue', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'}}
      onClick={()=> {fetching()}}> Load More </button>

      <p style={{margin: '0 auto', textAlign: 'center', marginTop: '80px', marginBottom: '50px'}}> <code>Developed by Matheus Damião</code> </p> 

    </>
  )
}

export default App;
