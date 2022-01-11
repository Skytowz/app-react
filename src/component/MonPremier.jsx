import React from "react";

export class MonPremier extends React.Component{

    state = {
        bonjour : false
    }

    bonjour = () => {
        this.setState({bonjour:!this.state.bonjour});
    }

    render(){
        return(
            <div>
                <p>Ceci est mon premier composant</p>
                <button onClick={(event) => this.bonjour(event)}>inutile</button>
                {this.state.bonjour && <p>Bonjour</p>}
            </div>
        )
    }
}

export default MonPremier;
