import React from 'react';

export class Footer extends React.Component {

    constructor(props) {
        super(props);
        const item = this.props.item;
        this.state = {
            description: item.description,
            qty: item.qty ?? 1,
            cost: item.cost ?? 0
        }
    }
    render() {
        const removeItemButton = <a href ng-hide="printMode" ng-click="removeItem(item)" class="btn btn-danger">[X]</a>
        return <tr>
                    <div class="col-xs-1 remove-item-container">
                        {this.props.printMode ? null : removeItemButton}
                    </div>
                    <div class="col-xs-5 input-container">
                        <input value={this.state.description} placeholder="Description" />
                    </div>
                    <div class="col-xs-2 input-container">
                        <input value={this.state.qty} size="4" ng-required ng-validate="integer" placeholder="Quantity" />
                    </div>
                    <div class="col-xs-2 input-container">
                        <input value={this.state.cost} ng-required ng-validate="number" size="6" placeholder="Cost" />
                    </div>
                    <div class="col-xs-2 text-right input-container">
                        {this.props.currencySymbol + this.state.cost * this.state.qty}
                    </div>
                </tr>
    }
    removeItem(item) {

    }
}