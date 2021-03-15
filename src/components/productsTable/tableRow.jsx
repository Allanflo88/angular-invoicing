import React from 'react';

export class TableRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.item;
    }
    render() {
        const removeItemButton =  <a onClick={() => this.removeItem()} 
                                    className="btn btn-danger">[X]</a>

        return <div>
                    <div className="col-xs-1 remove-item-container">
                        {this.props.printMode ? null : removeItemButton}
                    </div>
                    <div className="col-xs-5 input-container">
                        <input 
                            value={this.state.description} 
                            placeholder="Description" 
                            name="description"
                            onChange={(e) => this.handleChange(e)}  />
                    </div>
                    <div className="col-xs-2 input-container">
                        <input 
                            value={this.state.qty}
                            size="4" 
                            placeholder="Quantity" 
                            name="qty"
                            onChange={(e) => this.handleChange(e)} 
                            required/>
                    </div>
                    <div className="col-xs-2 input-container">
                        <input 
                            value={this.state.cost}
                            size="6" 
                            placeholder="Cost"
                            name="cost"
                            onChange={(e) => this.handleChange(e)} 
                            required/>
                    </div>
                    <div className="col-xs-2 text-right input-container">
                        { `${this.props.currencySymbol} ${this.calcTotal()}`}
                    </div>
                </div>
    }
    removeItem() {
        this.props.removeItemCallback(this.state.id);
    }
    handleChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
        this.props.updateItemCallback({
            ...this.state,
            [name]: target.value
        });
    }
    calcTotal() {
        const total = this.state.cost * this.state.qty
        return total.toFixed(2);
    }
}