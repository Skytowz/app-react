import React from "react";

import './Exemple1.css'

const nom="Hottin"

export class Exemple1 extends React.Component{

    state={
        prenom:"Lucas",
        age:20
    }

    editText = (event) => {
        const prenom = event.target.value   ;
        this.setState({prenom:prenom})
    }

    render(){
        return(
            <div className="jaune">
                <h2>Ceci est mon component exemple 1</h2>
                <p> Bonjour Monsieur {nom} {this.state.prenom}</p>
                <p> et j'ai {this.state.age} ans</p>
                <div>
                    <input type="text" onChange={(event) => this.editText(event)}/>
                </div>
            </div>
        )
    }
}

export default Exemple1;