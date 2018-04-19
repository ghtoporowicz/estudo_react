import React from 'react'

// "()" = expressão -- diferente de "{}" que é o corpo de uma função
// Arrow Function " => " substitui os padrões comuns de funções, seu return já está incluso na expressão    
export default props => (
    <h1>{props.value}</h1>
)

