//JS Files
import 'jquery'
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Invoice } from './components/invoice.jsx'

//CSS Files
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

//Assets Files
import './assets/images/metaware_logo.png';


ReactDOM.render(<Invoice />,
    document.getElementById('app'));
