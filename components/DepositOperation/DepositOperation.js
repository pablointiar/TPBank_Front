import React, { Component } from 'react';

class DepositOperation extends Component {
    
    constructor(){
        super()
        this.state={
            accountNumber:null,
            amount:0,
            clientName:null
        }
        this.onChangeAccountNumber = this.onChangeAccountNumber.bind(this)
        this.onChangeAmount = this.onChangeAmount.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeAccountNumber(event){
        //Pegado a backend
        this.setState({
            accountNumber:event.target.value,
            clientName:'Juan Carlos Pereyra'
        })
    }

    onChangeAmount(event){
        this.setState({
            amount:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()
        //Llamada a backend
        alert('Deposito realizado con éxito')
    }

    render() {
        return (

            <div className="container container-operation">
                <h1>Depósito</h1>

                <div className="money-transfer-form">
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group form-group-default">
                            <label>Número de cuenta</label>
                            <input required value={this.state.accountNumber} onChange={this.onChangeAccountNumber} type="text" name="account-number" id="account-number" placeholder="000000000000000" className="form-control" />
                            <span className='form-extra-data'>{this.state.clientName} </span>
                        </div>

                        <div className="form-group">
                            <label>Monto a depositar </label>
                            <div className="money-transfer-field">
                                <input min={100} required value={this.state.amount} onChange={this.onChangeAmount} type="number" name="amount" id="amount" className="form-control" placeholder="1,000" />
                                <div className="amount-currency-select">
                                    <i className="fas fa-chevron-down"></i>
                                    <select>
                                        <option>ARS</option>                                        
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Confirmar operación</button>


                    </form>
                </div>

            </div>
        );
    }
}

export default DepositOperation;


