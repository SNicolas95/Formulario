import './App.css';
import Imagen from "../src/Imagenes/rick-morty.png"
import { useState } from 'react';
import Characters from './Componentes/Characters';

function App() {

const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const charactersApi = await api.json()
    setCharacters(charactersApi.results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty</h1>
        {characters ? (<Characters characters={characters}/>)
         : (
         <>
         
        <img src={Imagen} className="img-home" alt="Rick & morty"/>
        <button onClick={reqApi} className="btn-search">Buscar personajes </button>
        </>
        )}

      </header>
    </div>
  );
}

export default App;
