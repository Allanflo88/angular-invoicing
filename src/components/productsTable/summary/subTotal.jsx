import React from 'react';
import {SummaryService} from '../../../services/summary';

export class SubTotal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div>
                    <div className="col-xs-10 text-right">Sub Total</div>
                    <div className="col-xs-2 text-right">{`${this.props.currencySymbol} ${this.props.value}`}</div>
                </div>
    }
}