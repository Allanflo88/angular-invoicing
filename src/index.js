//JS Files
import 'jquery'
import 'bootstrap';
// import '../js/angular.min.js';
// import '../js/main.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Invoice } from './components/invoice.jsx'

//CSS Files
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

//Assets Files
import '../images/metaware_logo.png';


ReactDOM.render(<Invoice />,
    document.getElementById('app'));
