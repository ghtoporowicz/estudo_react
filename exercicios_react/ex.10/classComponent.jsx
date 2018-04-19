import React, {Component} from 'react'

export default class ClassComponent extends Component{
    constructor(props){
        //Necessario em construtor
        super(props)
        this.state = {value: props.initialValue}
    }

    sum(delta){
        //Não alterar o dado, sempre evoluir
        this.setState({value: this.state.value + delta})
    }
    
    render(){     
        //A variavel que vc passa pra um componente do react são apenas leitura.. todas as variaveis dentro do props
        // são apenas pra leitura
        //this.props.value++
        return(
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>Dec</button>
                <button onClick={() => this.sum(1)}>Inc</button>
            </div>
        )
    }
}