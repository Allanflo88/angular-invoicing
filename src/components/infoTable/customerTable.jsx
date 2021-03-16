import React from 'react';

export class CustomerTable extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.customerInfo
    }

    render() {
        return <div>
                    <div className="input-container">
                        <input 
                            type="text"
                            name="name" 
                            value={this.state.name}
                            onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="input-container">
                        <input 
                            type="text" 
                            name="web_link"
                            value={this.state.web_link}
                            onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="input-container">
                        <input 
                            type="text" 
                            name="address1"
                            value={this.state.address1}
                            onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="input-container">
                        <input 
                            type="text"
                            name="address2"
                            value={this.state.address2}
                            onChange={(e) => this.handleChange(e)}/>
                    </div>
                    <div className="input-container">
                        <input 
                            type="text" 
                            value={this.state.postal}
                            onChange={(e) => this.handleChange(e)}/>
                    </div>
                </div>
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const updateState = {
            ...this.state,
            [name]: target.value
        }
        this.setState(updateState);
        this.props.customerInfoCallback(updateState);
    }
}