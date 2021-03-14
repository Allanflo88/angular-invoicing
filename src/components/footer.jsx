import React from 'react';

export class Footer extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const footer = <div className="copy noPrint">
                            <a href="https://jasdeep.ca/?utm_source=angular_invoicing">Jasdeep Singh</a> &amp;
                            <a href="https://github.com/manpreetrules">Manpreet Singh</a>
                            Made with
                            <span className="love">&#9829;</span> in Toronto by
                            <a href="https://metawarelabs.com/?utm_source=angular_invoicing">Metaware Labs Inc.</a>
                        </div>
        return this.props.printMode ? null : footer;
    }
}