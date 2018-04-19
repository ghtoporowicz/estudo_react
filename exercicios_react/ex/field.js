import React, {Component} from 'react'

class Field extends Component {
    constructor(props){
        super(props)
        this.state = {value: props.initialValue}
        //Independente de quem chame essa função, mostra que o this representa a função field
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    //Componentes controlados: são controlado pelo javascript, dependendo dele para serem att
    //Componentes não controlados: são componentes sem controle que são atualizados no html

    render(){
        return(
            <div>
                <label>{this.state.value}</label><br/> 
                <input onChange={this.handleChange} value={this.state.value} />   
            </div>
        )
    }
}

export default Field