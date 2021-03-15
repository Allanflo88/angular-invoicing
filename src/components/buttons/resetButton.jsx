import React from 'react';

export class ResetButton extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <a href="#" className="btn btn-primary" onClick={() => this.clearLocalStorage()}>Reset</a>
    }

    clearLocalStorage() {
        const confirmClear = confirm('Are you sure you would like to clear the invoice?');
        if(confirmClear) {
            this.props.LocalStorage.clear();
            this.props.$scope.$emit('setDefault');
        }
    }
}