import React from 'react'
import './App.css'
import Header from './components/Header'
import Cartao from './components/Cartao'
import Formulario from './components/Formulario'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      nome: "",
      numero: 0,
      data: 0,
      cvc: 0,
      foco: '',
      isDisable: true,
      cartaoRegistrado: [],
    }

    this.handler = this.handler.bind(this)
    this.handlerFoco = this.handlerFoco.bind(this)
  }

  //usando arrow não precisa fazer o bind
  validationForms = () => {
    const { cvc, data, numero, nome } = this.state
    const validationCVC = cvc.length === 3;
    const validationData = data.length === 4;
    const validationNumero = typeof numero !== 'number' && numero.length === 16;
    const regexNome = /^[a-zA-ZáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛãõÃÕçÇ\s]+$/;
    const validationNome = regexNome.test(nome);


    this.setState({
      isDisable: !(validationCVC && validationData && validationNumero && validationNome)
    });

  }

  handler({ target }) {
    const { value, name } = target
    this.setState({
      [name]: value
    }, this.validationForms  //calback criada para resolver problema de assicronissidade, como a funcao ja é uma calback, basta apenas referenciala no lugar do segundo paramentro (que seria uma calback)
    )
  };

  handlerFoco({ target }) {
    const { name } = target
    this.setState({
      foco: name
    })
  };

  handlerSubmit = (event) => {
    event.preventDefault()
    const { nome, numero, data, cvc } = this.state;
    const newCard = { nome, numero, data, cvc };

    this.setState(({ cartaoRegistrado: estadoAntigo }) => ({
      cartaoRegistrado: [...estadoAntigo, newCard]
    }))
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Cartao foco={this.state.foco} nome={this.state.nome} numero={this.state.numero} data={this.state.data} cvc={this.state.cvc} />
        <Formulario handlerSubmit={this.handlerSubmit} handler={this.handler} statesComponent={this.state.nome} handlerFoco={this.handlerFoco} isDisable={this.state.isDisable} cartaoRegristrado={this.state.cartaoRegistrado} />
      </div>
    )
  }
}
export default App
