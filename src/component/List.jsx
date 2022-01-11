import React from "react";

export class List extends React.Component{


    render(){
        return(
            <>
                {this.props.items.map(this.props.children)} 
            </>
        )
    }
}

export default List;
