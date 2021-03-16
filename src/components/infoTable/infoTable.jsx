import React from 'react';
import { CurrencySelect } from './currencySelect.jsx'
import { CustomerTable } from './customerTable.jsx'

export class InfoTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ...this.props.invoice,
            currencySymbol: this.props.currencySymbol
        };
        this.selectCurrent = this.selectCurrent.bind(this);
        this.updateCustomerInfo = this.updateCustomerInfo.bind(this);
        this.updateCompanyInfo = this.updateCompanyInfo.bind(this);
    }
    render() {
        return <div className="row infos">
                    <div className="col-xs-6">
                        <CustomerTable 
                            customerInfo={this.state.customer_info}
                            customerInfoCallback={this.updateCustomerInfo}></CustomerTable>
                        <CurrencySelect
                            printMode={this.props.printMode} 
                            currencySymbol={this.state.currencySymbol}
                            currencySelectCallback={this.selectCurrent}>
                        </CurrencySelect>
                    </div>
                    <div className="col-xs-6 right">
                        <CustomerTable 
                            customerInfo={this.state.company_info}
                            customerInfoCallback={this.updateCompanyInfo}></CustomerTable>
                    </div>
                </div>
    }

    updateCustomerInfo(info) {
        const updatedState = {
            ...this.state,
            customer_info: info
        }
        this.setState(updatedState);
        this.props.infoTableCallback(updatedState);
    }

    updateCompanyInfo(info) {
        const updatedState = {
            ...this.state,
            company_info: info
        }
        this.setState(updatedState);
        this.props.infoTableCallback(updatedState);
    }

    selectCurrent(currency){
        this.props.currencyCallback(currency);
    }
}