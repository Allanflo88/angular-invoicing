import React from 'react';
import { AVAILABLE_CURRENCIES } from '../constants/availableCurrencies.js'

export class CurrencySelect extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currencySymbol: this.props.currencySymbol ?? AVAILABLE_CURRENCIES[AVAILABLE_CURRENCIES - 1].symbol
        }
    }

    render() {
        const options = AVAILABLE_CURRENCIES.map(function(currency){
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