import React from "react";
import data from '../data/data.json';
import PokeList from './PokeList';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Mi lista de pokemon</h1>
                <PokeList poke={data}/>
            </div>
        );
    }
}
export default App;
