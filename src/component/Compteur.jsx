import React from "react";

export class Compteur extends React.Component{

    state = {
        number:0
    }

    increase = () => {
        this.setState({number:this.state.number+1})
    }
    decrease = () => {
        this.setState({number:this.state.number-1})
    }

    render(){
        return(
            <div>
                <p>Compteur {this.props.numero}</p>
                <p>{this.state.number}</p>
                <button onClick={() => this.increase()}>Increase</button>
                <button onClick={() => this.decrease()}>Decrease</button>
            </div>
        )
    }
}

export default Compteur;
