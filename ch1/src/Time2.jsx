
import React from "react"
import AnalogDisplay from "./components/AnalogDisplay"
import DigitalDisplay from "./components/DigitalDisplay"



class Time2 extends React.Component{
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
        console.log('Rendering...')
        return(
        <div>
          <AnalogDisplay time={this.state.currentTime}/>
          <DigitalDisplay time={this.state.currentTime}/>
        </div>)

    
    }
}


export default Time2