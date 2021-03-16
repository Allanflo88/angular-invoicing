import React from 'react';
import { GrandTotal } from './summary/grandTotal.jsx';
import { SubTotal } from './summary/subTotal.jsx';
import { Tax } from './summary/tax.jsx';
import { AddItemTableRow } from './addItemTableRow.jsx';
import { TableHeader } from './tableHeader.jsx';
import { TableRow } from './tableRow.jsx';
import { SummaryService } from '../../services/summary';

export class ProductsTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            invoice: this.props.invoice,
            grandTotal: SummaryService.calculateGrandTotal(this.props.invoice),
            subTotal: SummaryService.invoiceSubTotal(this.props.invoice)
        }
        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.calcTax = this.calcTax.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    render() {
        const items = this.props.invoice.items.map((item) => {
            return <div className="row invoice-item" key={item.id}>
                        <TableRow
                            item={item}
                            removeItemCallback={this.removeItem}
                            updateItemCallback={this.updateItem}
                            currencySymbol={this.props.currencySymbol}
                            printMode={this.props.printMode}></TableRow>
                    </div>
        });
        return <div className="items-table">
                    <TableHeader currencySymbol={this.props.currencySymbol}></TableHeader>
                    {items}
                    <div className="row invoice-item">
                        <AddItemTableRow printMode={this.props.printMode} addItemCallback={this.addItem}></AddItemTableRow>
                    </div>
                    <div className="row">
                        <SubTotal 
                            currencySymbol={this.props.currencySymbol} 
                            value={this.state.subTotal}></SubTotal>
                    </div>
                    <div className="row">
                        <Tax
                            currencySymbol={this.props.currencySymbol} 
                            invoice={this.state.invoice}
                            taxCallback={this.calcTax}></Tax>
                    </div>
                    <div className="row">
                        <GrandTotal
                            currencySymbol={this.props.currencySymbol} 
                            value={this.state.grandTotal}></GrandTotal>
                    </div>
                </div>
    }

    removeItem(id) {
        let invoice = this.state.invoice;
        const indexOfitem = invoice.items.findIndex(function(item){
            return item.id === id;
        });
        invoice.items.splice(indexOfitem, 1);
        this.setState({
            invoice: invoice,
            grandTotal: SummaryService.calculateGrandTotal(invoice),
            subTotal: SummaryService.invoiceSubTotal(invoice)
        });
        this.saveInvoice(invoice);
    }

    updateItem(updatedItem) {
        let invoice = this.state.invoice;

        invoice.items = invoice.items.map(function(item){
            return item.id === updatedItem.id ? updatedItem : item;
        });
        this.setState({
            invoice: invoice,
            grandTotal: SummaryService.calculateGrandTotal(invoice),
            subTotal: SummaryService.invoiceSubTotal(invoice)
        });
        this.saveInvoice(invoice);
    }

    addItem() {
        let invoice = this.state.invoice;
        invoice.items.push({ id: invoice.items.length + 1, qty: 0, description: '', cost: 0 })
        this.setState({
            invoice: invoice
        });
        this.saveInvoice(invoice);
    }
    
    calcTax(tax) {
        let invoice = this.state.invoice;
        invoice.tax = tax;
        this.setState({
            invoice: invoice,
            grandTotal: SummaryService.calculateGrandTotal(invoice),
        });
        this.saveInvoice(invoice);
    }
    saveInvoice(invoice) {
        this.props.productsTableCallback(invoice);
    }

}