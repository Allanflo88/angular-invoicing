import {react2angular} from 'react2angular';
import {Logo} from '../src/components/logo.jsx';
import {Footer} from '../src/components/footer.jsx';
import {InfoTable} from '../src/components/infoTable/infoTable.jsx';
import {ProductsTable} from '../src/components/productsTable/productsTable.jsx';
import {PrintButton} from '../src/components/buttons/printButton.jsx';
import {ResetButton} from '../src/components/buttons/resetButton.jsx';

import angular from 'angular';

angular.module('invoicing', [])

// The default logo for the invoice
.constant('DEFAULT_LOGO', 'images/metaware_logo.png')

// The invoice displayed when the user first uses the app
.constant('DEFAULT_INVOICE', {
  tax: 13.00,
  invoice_number: 10,
  customer_info: {
    name: 'Mr. John Doe',
    web_link: 'John Doe Designs Inc.',
    address1: '1 Infinite Loop',
    address2: 'Cupertino, California, US',
    postal: '90210'
  },
  company_info: {
    name: 'Metaware Labs',
    web_link: 'www.metawarelabs.com',
    address1: '123 Yonge Street',
    address2: 'Toronto, ON, Canada',
    postal: 'M5S 1B6'
  },
  items:[
    { id: 1, qty: 10, description: 'Gadget', cost: 9.95 }
  ]
})

// Service for accessing local storage
.service('LocalStorage', [function() {

  var Service = {};

  // Returns true if there is a logo stored
  var hasLogo = function() {
    return !!localStorage['logo'];
  };

  // Returns a stored logo (false if none is stored)
  Service.getLogo = function() {
    if (hasLogo()) {
      return localStorage['logo'];
    } else {
      return false;
    }
  };

  Service.setLogo = function(logo) {
    localStorage['logo'] = logo;
  };

  // Checks to see if an invoice is stored
  var hasInvoice = function() {
    return !(localStorage['invoice'] == '' || localStorage['invoice'] == null);
  };

  // Returns a stored invoice (false if none is stored)
  Service.getInvoice = function() {
    if (hasInvoice()) {
      return JSON.parse(localStorage['invoice']);
    } else {
      return false;
    }
  };

  Service.setInvoice = function(invoice) {
    localStorage['invoice'] = JSON.stringify(invoice);
  };

  // Clears a stored logo
  Service.clearLogo = function() {
    localStorage['logo'] = '';
  };

  // Clears a stored invoice
  Service.clearinvoice = function() {
    localStorage['invoice'] = '';
  };

  // Clears all local storage
  Service.clear = function() {
    localStorage['invoice'] = '';
    Service.clearLogo();
  };

  return Service;

}])

// Main application controller
.controller('InvoiceCtrl', ['$scope', '$http','$timeout', 'DEFAULT_INVOICE', 'DEFAULT_LOGO', 'LocalStorage',
  function($scope, $http,$timeout, DEFAULT_INVOICE, DEFAULT_LOGO, LocalStorage) {

  // Set defaults
  $scope.currencySymbol = '$';
  $scope.logoRemoved = false;
  $scope.printMode   = false;

  (function init() {
    // Attempt to load invoice from local storage
    !function() {
      var invoice = LocalStorage.getInvoice();
      $scope.invoice = invoice ? invoice : DEFAULT_INVOICE;
    }();

  })()

  // Clears the local storage
  $scope.clearLocalStorage = function() {
    var confirmClear = confirm('Are you sure you would like to clear the invoice?');
    if(confirmClear) {
      LocalStorage.clear();
      setInvoice(DEFAULT_INVOICE);
    }
  };

  // Sets the current invoice to the given one
  var setInvoice = function(invoice) {
    $scope.invoice = invoice;
    saveInvoice();
  };

  // Saves the invoice in local storage
  var saveInvoice = function() {
    LocalStorage.setInvoice($scope.invoice);
  };

  // Runs on document.ready
  angular.element(document).ready(function () {
    // Set focus
    document.getElementById('invoice-number').focus();
    $scope.$on('setDefault', function(){
      $timeout(function(){
        setInvoice(DEFAULT_INVOICE);
      });
    });
    $scope.$on('saveInvoice', function(event,data) {
      $timeout(function(){
        setInvoice(data);
      });
    });
    $scope.$on('updateCurrency', function(event,data) {
      $timeout(function() {
        $scope.currencySymbol = data;
      });
    });
  });

}])

.component('logoComponent',  react2angular(Logo, ['printMode'], ['DEFAULT_LOGO','LocalStorage']))
.component('footerComponent',  react2angular(Footer, ['printMode'], []))
.component('printbuttonComponent',  react2angular(PrintButton, ['printMode'], []))
.component('resetbuttonComponent',  react2angular(ResetButton, [], ['$scope','LocalStorage']))
.component('productstableComponent',  react2angular(ProductsTable, ['invoice', 'printMode', 'currencySymbol'], ['$scope']))
.component('infotableComponent',  react2angular(InfoTable, ['printMode', 'currencySymbol', 'invoice'], ['$scope']));