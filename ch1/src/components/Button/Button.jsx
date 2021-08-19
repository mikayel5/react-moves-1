
import React from "react"
import ButtonComponent from "./ButtonComponent"
import Counter from "./Counter"


class Button extends React.Component{
    constructor(props){
        super(props)
        this.state={count:5}
        this.handleClick = this.handleClick.bind(this)

    }

     handleClick (event){
        this.setState({count:++this.state.count})
    }

     
    render(){
        return(
        <div>
           <ButtonComponent 
           handler={this.handleClick}
           />   
        <Counter value={this.state.count}/>

        </div>
        )

    
    }
}


export default Button