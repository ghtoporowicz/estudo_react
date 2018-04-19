import React from 'react'

export default props => (
    <div>   
        {/*react.cloneElement suporta apenas um elemento filho  se colocar 
           mais de um ele da pau*/}
        {React.cloneElement(props.children, {...props})}
    </div>    
)