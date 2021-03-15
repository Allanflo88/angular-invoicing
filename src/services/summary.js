export class SummaryService {

    static calculateGrandTotal(invoice) {
        const total = parseFloat(this.calculateTax(invoice)) + parseFloat(this.invoiceSubTotal(invoice));
        return total.toFixed(2);
    }
    static invoiceSubTotal(invoice) {
        if(!invoice.items.length) return 0;
        return invoice.items.reduce((acc, current) => {
            return acc + (current.qty * current.cost);
        }, 0).toFixed(2);
    }
    static calculateTax(invoice) {
        const subTotal = this.invoiceSubTotal(invoice);
        const tax = parseFloat(invoice.tax);
        return tax > 0 ? ((tax * subTotal) / 100).toFixed(2) : 0;
    }
}