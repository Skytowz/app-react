import React from "react";
import Compteur from "./Compteur";

export class Compteurs extends React.Component{

    render(){
        return(
            <div>
                <p>Compteurs</p>
                <Compteur numero={1}/>
                <Compteur numero={2}/>
            </div>
        )
    }
}

export default Compteurs;
