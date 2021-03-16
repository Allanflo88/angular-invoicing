export class LocalStorage {
    static hasLogo() {
        return !!localStorage['logo'];
    };

    static getLogo() {
        return this.hasLogo() ? localStorage['logo'] : null;
    }

    static setLogo(logo) {
        localStorage['logo'] = logo;
    }

    static hasInvoice() {
        return !(localStorage['invoice'] == '' || localStorage['invoice'] == null);
    };

    static getInvoice() {
        return this.hasInvoice() ? JSON.parse(localStorage['invoice']) : null;
    };

    static setInvoice(invoice) {
        localStorage['invoice'] = JSON.stringify(invoice);
    };

    static clearLogo() {
        localStorage['logo'] = '';
    };

    static clearInvoice() {
        localStorage['invoice'] = '';
    };

    static clear() {
        localStorage['invoice'] = '';
        Service.clearLogo();
      };
}