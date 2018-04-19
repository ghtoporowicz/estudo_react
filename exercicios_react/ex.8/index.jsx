import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Toporowicz'>
        <Member name='Gustavo '/>
        <Member name='Aline '/>
    </Family>    
, document.getElementById('app'))

