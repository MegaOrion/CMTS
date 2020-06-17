export class Water {
    constructor(public count: number = 3000) {}
    get countWater() {
        return this.count;
    }
    set countWater(quant) {
        this.count = quant;
    }
}