import React from 'react';

export class AddItemTableRow extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const addItemElement = <div className="col-xs-12 add-item-container">
                                    <a className="btn btn-primary" onClick={() => this.addItem()} >[+]</a>
                                </div>
        return this.props.printMode ? null : addItemElement;
    }

    addItem() {
        this.props.$scope.$emit('addItem');
    }
}