import React from 'react';
import {DEFAULT_LOGO} from '../../constants/defaultLogo'
import { LocalStorage } from '../../services/localStorage';

export class Logo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logoRemoved: false,
            logo: LocalStorage.getLogo() ?? DEFAULT_LOGO
        }
        this.fileInput = React.createRef();
        
    }
    
    render() {
        let logo, buttons;
        if(!this.state.logoRemoved) {
            logo = <img id="company_logo" src={this.state.logo} alt="your image" width="300" />
        }
        if(!this.props.printMode) {
            buttons = <div className="noPrint">
                            <a onClick={() => this.editLogo()}>Edit Logo</a>
                            <a onClick={() => this.toggleLogo()} id="remove_logo">{this.state.logoRemoved ? 'Show' : 'Hide'} logo</a>
                        </div>
        }
        return <div className="col-xs-6 logo-container">
                    <input type="file" id="imgInp" ref={this.fileInput} onChange={(e) => this.readUrl(e.target)}/>
                    {logo}
                    <div>
                        {buttons}
                    </div>
                </div>;
    }

    editLogo() {
        this.fileInput.current.click();
    }
    toggleLogo() {
        this.setState({
            logoRemoved: !this.state.logoRemoved
        })
        LocalStorage.clearLogo();
    }
    readUrl(input) {
        if (input.files && input.files.length) {
            var reader = new FileReader();
            reader.onload = (e) => {
              this.setState({
                  logo: e.target.result
              })
              LocalStorage.setLogo(e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
  }