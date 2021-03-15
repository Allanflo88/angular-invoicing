import React from 'react';
import { SummaryService } from '../../../services/summary';

export class Tax extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tax: this.props.invoice.tax ?? 0
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
                        {`${this.props.currencySymbol} ${SummaryService.calculateTax(this.props.invoice)}`}
                    </div>
                </div>
    }

    handleChange(event) {
        const tax = event.target.value ?? 0
        this.setState({
            tax: tax
        });
        this.props.taxCallback(tax);
    }
}