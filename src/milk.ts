export class Milk {
    constructor(public count: number = 300) {}
    get countMilk() {
        return this.count;
    }
    set countMilk(quant) {
        this.count = quant;
    }
}