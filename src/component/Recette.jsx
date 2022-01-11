import React, { Fragment } from "react";
import List from "./List";

export class Recette extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : this.props.name,
            ingredients : this.props.ingredients,
            etapes : this.props.etapes,
        }
    }

    render(){
        return(
            <Fragment>
                <h2>{this.state.name}</h2>
                <List items={this.state.ingredients}>
                    {(item,index) => (<p key={index}> {"-"} {item}</p>)}
                </List>
                <List items={this.state.etapes}>
                    {(item,index) => (<p key={index}>Etape {index+1}: {item}</p>)}
                </List>
            </Fragment>
        )
    }
}

export default Recette;
