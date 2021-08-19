
import React from "react"

class Time extends React.Component{
    constructor(props){
        super(props)
        this.launchClock()
        this.state ={currentTime:(new Date()).toLocaleString()}
    }

    launchClock(){
        setInterval(() => {
            this.setState({
                currentTime:(new Date()).toLocaleString()
            })
            
        }, 1000);
    }
    render(){

        return(
        <div>
           Date={this.state.currentTime}
        </div>)

    
    }
}


export default Time