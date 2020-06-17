export class Coffee {
    constructor(public count: number = 300) {}
    get countCoffee() {
        return this.count;
    }
    set countCoffee(quant) {
        this.count = quant;
    }
}