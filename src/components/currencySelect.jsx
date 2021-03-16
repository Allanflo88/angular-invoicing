import React from 'react';
import { AvailableCurrencies } from '../constants/availableCurrencies.js'

export class CurrencySelect extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currencySymbol: this.props.currencySymbol ?? AvailableCurrencies[AvailableCurrencies - 1].symbol
        }
    }

    render() {
        const options = AvailableCurrencies.map(function(currency){
            return <option key={currency.symbol} value={currency.symbol}>{currency.name}</option>
        });
        return !this.props.printMode ? <div className="input-container">
                                            <select 
                                                value={this.state.currencySymbol} 
                                                onChange={(e) => this.handleChange(e)}>
                                                {options}
                                            </select>
                                        </div> : null;
    }

    handleChange(event) {
        this.setState({
            currencySymbol: event.target.value
        });
        this.props.currencySelectCallback(event.target.value);
    }
}