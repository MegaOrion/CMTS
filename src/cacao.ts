export class Cacao {
    constructor(public count: number = 300) {}
    get countCacao() {
        return this.count;
    }
    set countCacao(quant) {
        this.count = quant;
    }
}