import React from 'react';

export class SubTotal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div>
                    <div className="col-xs-10 text-right">Sub Total</div>
                    <div className="col-xs-2 text-right">{`${this.props.currencySymbol} ${this.invoiceSubTotal()}`}</div>
                </div>
    }

    invoiceSubTotal() {
        return this.props.items.reduce((acc, current) => {
            return acc + (current.qty * current.cost);
        }, 0);
    }
}