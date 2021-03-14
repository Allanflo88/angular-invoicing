import React from 'react';

export class GrandTotal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div>
                    <div className="col-xs-10 text-right">Grand Total:</div>
                    <div className="col-xs-2 text-right">
                        {`${this.props.currencySymbol} ${this.calculateGrandTotal()}`}
                    </div>
                </div>
    }

    calculateGrandTotal() {
        const total = this.props.tax + this.props.subTotal;
        this.props.$scope.$emit('saveInvoice');
        return total.toFixed(2);
    }
}