import React from 'react'
import Recette from '../Recette';

import './App.css';

const name = "Recette pate à crèpe"
const ingredients = ["Oeuf","Farine","Lait"];
const etapes = ["Mettre farine dans un saladier","Incorporer les oeufs","Commencer à mélanger","Incorporer le lait petit à petit","Une fois la pate bien lisse, faites revenir la pate à la la poele"]

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Coucou</h1>
                <Recette name={name} ingredients={ingredients} etapes={etapes}></Recette>
            </div>
        );
    };
};

export default App;