import React from 'react';

export class InvoiceNumber extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            invoiceNumber: this.props.invoiceNumber
        }
        this.input = React.createRef();
    }

    render() {
        return <div className="invoice-number-container">
                    <label htmlFor="invoice-number">
                        Invoice #
                    </label>
                    <input 
                        type="text"
                        id="invoice-number"
                        name="invoice-number"
                        ref={this.input}
                        value={this.state.invoiceNumber}
                        onChange={(e) => this.handleChange(e)}/>
                </div>
    }

    componentDidMount() {
        this.input.current.focus();
    }

    handleChange(event){
        this.setState({
            invoiceNumber: event.target.value
        });
        this.props.$scope.$emit('updateInvoiceNumber', event.target.value);
    }
}