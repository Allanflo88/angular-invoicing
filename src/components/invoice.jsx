import React from 'react';
import { DEFAULT_CURRENCY } from '../constants/availableCurrencies.js';
import { DEFAULT_INVOICE } from '../constants/defaultInvoice.js';
import { LocalStorage } from '../services/localStorage.js';
import { InvoiceNumber } from './branding/invoiceNumber.jsx';
import { Logo } from './branding/logo.jsx';
import { PrintButton } from './buttons/printButton.jsx';
import { ResetButton } from './buttons/resetButton.jsx';
import { InfoTable } from './infoTable/infoTable.jsx';
import { ProductsTable } from './productsTable/productsTable.jsx';

export class Invoice extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            printMode: false,
            logoRemoved: false,
            invoice: LocalStorage.getInvoice() ?? DEFAULT_INVOICE,
            currencySymbol: DEFAULT_CURRENCY
        }
        this.updateInvoiceNumber = this.updateInvoiceNumber.bind(this);
        this.updateInvoiceInfo = this.updateInvoiceInfo.bind(this);
        this.updateCurrencySymbol = this.updateCurrencySymbol.bind(this);
    }

    componentDidUpdate(){
        LocalStorage.setInvoice(this.state.invoice);
    }

    render() {
        return <div>
                    <div className="container" width="800px" id="invoice" >
                        <div className="row">
                            <div className="col-xs-12 heading">
                                INVOICE
                            </div>
                        </div>
                        <div className="row branding">
                            <div className="col-xs-6">
                                <InvoiceNumber 
                                    invoiceNumber={this.state.invoice.invoice_number}
                                    invoiceNumberCallback={this.updateInvoiceNumber}></InvoiceNumber>
                            </div>
                            <Logo printMode={this.state.printMode}></Logo>
                        </div>
                        <InfoTable
                            invoice={this.state.invoice} 
                            printMode={this.state.printMode} 
                            currencySymbol={this.state.currencySymbol}
                            infoTableCallback={this.updateInvoiceInfo}
                            currencyCallback={this.updateCurrencySymbol}></InfoTable>
                        <ProductsTable
                            invoice={this.state.invoice} 
                            printMode={this.state.printMode} 
                            currency-symbol={this.state.currencySymbol}
                            productsTableCallback={this.updateInvoiceInfo}></ProductsTable>
                        <div className="row noPrint actions">
                            {
                                this.state.printMode ? 
                                <PrintButton></PrintButton> : null
                            }
                            <ResetButton></ResetButton>
                            <a 
                                href="#" 
                                className="btn btn-primary"
                                onClick={() => this.togglePrintMode()}>
                                    Turn {this.state.printMode ? 'Off' : 'On'} Print Mode
                            </a>
                        </div>
                    </div>
                    <footer-component printMode={this.state.printMode}></footer-component>
                </div>
    }

    togglePrintMode() {
        this.setState({
            ...this.state,
            printMode: !this.state.printMode
        });
    }

    updateInvoiceNumber(invoiceNumber) {
        let invoice = this.state.invoice;
        invoice.invoice_number = invoiceNumber;
        this.setState({
            ...this.state,
            invoice: invoice
        });
    }

    updateInvoiceInfo(invoice){
        this.setState({
            ...this.state,
            invoice: invoice
        })
    }

    updateCurrencySymbol(currencySymbol) {
        this.setState({
            ...this.state,
            currencySymbol: currencySymbol
        })
    }
}