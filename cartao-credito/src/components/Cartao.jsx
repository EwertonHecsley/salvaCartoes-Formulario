import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


class Cartao extends React.Component {
    render() {
        const { nome, numero, data, cvc, foco } = this.props
        return (
            <div>
                <div id="PaymentForm">
                    <Cards
                        cvc={cvc}
                        expiry={data}
                        focused={foco}
                        name={nome}
                        number={numero}
                    />
                </div>
            </div>

        )
    }
}

export default Cartao