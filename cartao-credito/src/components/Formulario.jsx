import React from "react";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


class Formulario extends React.Component {
    render() {
        const { handlerSubmit, handlerFoco, handler, nome, numero, data, cvc, isDisable, cartaoRegristrado } = this.props
        return (
            <div>
                <div>
                    <form className="form" onSubmit={handlerSubmit}>
                        <label>
                            Digite o nome:
                        </label>
                        <input type="text" name="nome" id="" onChange={handler} onFocus={handlerFoco} value={nome}></input>

                        <label>
                            Digite o número:
                        </label>
                        <input type="number" name="numero" id="" onChange={handler} onFocus={handlerFoco} value={numero}></input>


                        <label>
                            Digite a validade:
                        </label>
                        <input type="number" name="data" id="" onChange={handler} onFocus={handlerFoco} value={data}></input>


                        <label>
                            Digite o CVC:
                        </label>
                        <input type="number" name="cvc" id="" onChange={handler} onFocus={handlerFoco} value={cvc}></input>

                        <button disabled={isDisable}>Cadastrar</button>
                    </form>

                </div>
                <section className="div-cartoes">
                    {
                        cartaoRegristrado.map(({ nome, cvc, data, numero }) => (
                            <div className="div-cartoes">
                                <Cards
                                    cvc={cvc}
                                    expiry={data}
                                    name={nome}
                                    number={numero}
                                />
                            </div>
                        ))
                    }
                </section>
            </div>
        )
    }
}

export default Formulario;