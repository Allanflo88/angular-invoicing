import React from 'react';

export class Tax extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tax: this.props.tax
        }
    }
    render() {
        return <div>
                    <div className="col-xs-10 text-right">Tax(%): 
                        <input 
                            value={this.state.tax} 
                            onChange={(e) => this.handleChange(e)} 
                            style={{width: "43px"}}/>
                    </div>
                    <div className="col-xs-2 text-right">
                        {`${this.props.currencySymbol} ${this.calculateTax()}`}
                    </div>
                </div>
    }

    handleChange(event) {
        this.setState({
            tax: event.target.value ?? 0
        });
    }

    calculateTax() {
        return ((parseFloat(this.state.tax) * this.props.subTotal) / 100).toFixed(2);
    }
}