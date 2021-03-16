import React from 'react';

export class PrintButton extends React.Component {
    render() {
        return <a href="#" className="btn btn-primary" onClick={this.printInfo}>Print</a>
    }

    printInfo() {
        window.print();
    }
}