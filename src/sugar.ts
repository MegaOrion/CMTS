export class Sugar {
    constructor(public count: number = 300) {}
    get countSugar() {
        return this.count;
    }
    set countSugar(quant) {
        this.count = quant;
    }
}