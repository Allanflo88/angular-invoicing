import React from 'react';

export class PrintButton extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return this.props.printMode ? 
                <a href="#" className="btn btn-primary" onClick={this.printInfo}>Print</a> : 
                null;
    }

    printInfo() {
        window.print();
    }
}