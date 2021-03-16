import React from 'react';
import { LocalStorage } from '../../services/localStorage';

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
            LocalStorage.clear();
            this.props.resetCallback();
        }
    }
}