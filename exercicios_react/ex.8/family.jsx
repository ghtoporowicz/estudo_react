import React from 'react'
import {childrenWithProps} from '../utils/reactUtils'

export default props => (
    <div>   
        {/*react.cloneElement suporta apenas um elemento filho  se colocar 
           mais de um ele da pau*/}
        {childrenWithProps(props.children, props)}
    </div>    
)