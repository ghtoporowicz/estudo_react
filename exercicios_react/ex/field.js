import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {

    //Componentes controlados: são controlado pelo javascript, dependendo dele para serem att
    //Componentes não controlados: são componentes sem controle que são atualizados no html

    render(){
        return(
            <div>
                <label>{this.props.value}</label><br/> 
                <input onChange={this.props.changeValue} value={this.props.value} />   
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeValue}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)