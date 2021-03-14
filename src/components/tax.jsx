import React from 'react';

export class Tax extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tax: this.props.tax ?? 0
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
        const tax = event.target.value ?? 0
        this.setState({
            tax: tax
        });
        this.props.$scope.$emit('updateTax', {tax: tax});
    }

    calculateTax() {
        const tax = parseFloat(this.state.tax);
        return tax > 0 ? ((tax * this.props.subTotal) / 100).toFixed(2) : 0;
    }
}