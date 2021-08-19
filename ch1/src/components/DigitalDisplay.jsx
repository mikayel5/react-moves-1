

// const DigitalDisplay =function(props){
//     return <div>{props.time}</div>
// }
const DigitalDisplay = function(props) {
    const locale = zzz => (new Date(zzz)).toLocaleString('US')
    const locale2 = zzz => (new Date(zzz)).toLocaleString('ar-EG')

    return( 
        <div>
            <div>{locale(props.time)}</div>
             <div>{locale2(props.time)}</div>
        </div>
   
    )
   }

export default DigitalDisplay