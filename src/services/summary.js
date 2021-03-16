export class SummaryService {

    static calculateGrandTotal(invoice) {
        const tax = parseFloat(this.calculateTax(invoice));
        const subTotal = parseFloat(this.invoiceSubTotal(invoice));
        if(isNaN(tax) || isNaN(subTotal)){
            return 0;
        }
        const total = tax + subTotal;
        return total.toFixed(2);
    }
    static invoiceSubTotal(invoice) {
        if(!invoice.items.length) return 0;
        return invoice.items.reduce((acc, current) => {
            return acc + parseFloat(this.calculateItemTotal(current));
        }, 0).toFixed(2);
    }
    static calculateTax(invoice) {
        const subTotal = this.invoiceSubTotal(invoice);
        const tax = parseFloat(invoice.tax);
        if(isNaN(tax)){
            return 0;
        }
        return tax > 0 ? ((tax * subTotal) / 100).toFixed(2) : 0;
    }
    static calculateItemTotal(item) {
        const qty = parseFloat(item.qty);
        if(isNaN(qty)){
            return "0.00";
        }
        const total = (this.calculateItemValue(item) * qty);
        return total.toFixed(2);
    }

    static calculateItemValue(item){
        const discount = parseFloat(item.discount);
        const cost = parseFloat(item.cost);
        if(isNaN(cost)){
            return 0;
        }
        if(isNaN(discount)) {
            return cost;
        }
        return (cost - ((discount * cost )/ 100));
    }
}