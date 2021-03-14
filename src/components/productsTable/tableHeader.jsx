import React from 'react';

export class TableHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="row header">
                    <div className="col-xs-1">&nbsp;</div>
                    <div className="col-xs-5">Description</div>
                    <div className="col-xs-2">Quantity</div>
                    <div className="col-xs-2">Cost {this.props.currencySymbol}</div>
                    <div className="col-xs-2 text-right">Total</div>
                </div>
    }
}