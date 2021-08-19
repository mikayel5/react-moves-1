
const ButtonComponent = function(props) {
    return( 
        <div>
             <button 
             onClick={props.handler}
            >
                ADDD
            </button>
            <div>
            </div>
        </div>
   
    )
   }

export default ButtonComponent
