class CMachine {
    cacao: any;
    coffee: any;
    sugar: any;
    water: any;
    milk: any;
    constructor(name: string, cacao: object, coffee: object, sugar: object, water: object, milk: object) {
        this.cacao = cacao;
        this.water = water;
        this.coffee = coffee;
        this.milk = milk;
        this.sugar = sugar;
    }

    addResource(quant: number, resource: object) {
        switch (resource) {
            case this.coffee: this.coffee.countCoffee += quant; break
            case this.cacao: this.cacao.countCacao += quant; break
            case this.water: this.water.countWater += quant; break
            case this.milk: this.milk.countMilk += quant; break
            case this.sugar: this.sugar.countSugar += quant; break
        }
    }

    isResource(water: number, coffee?: number, cacao?: number, sugar?: number, milk?: number) {
        const notRes: string[] = [];
        this.water.countWater < water && notRes.push('Water');
        this.coffee.countCoffee < coffee && notRes.push('Coffee');
        this.water.countSugar < sugar && notRes.push('Sugar');
        this.water.countMilk < milk && notRes.push('Milk');
        this.water.countCacao < cacao && notRes.push('Cacao');
        return `Not enough: ${notRes.join(', ')}`;
    }

    createOrder(numOfOrd: number) {   
        switch (numOfOrd) {
            case 1:
                if (this.coffee.countCoffee >= 30 && this.water.countWater >= 100) {
                    this.coffee.countCoffee -= 30; 
                    this.water.countWater -= 100;
                    return 'Заберите стаканчик с Nescafe';
                } else {                    
                    return this.isResource(100, 30);
                };
            break
            case 2:
                if (this.cacao.countCacao >= 20 && this.water.countWater >= 100 && this.sugar.countSugar >= 10) {
                    this.cacao.countCacao -= 20;
                    this.water.countWater -= 100;
                    this.sugar.countSugar -= 10;
                    return 'Заберите стаканчик с Chocolate';                
                } else {
                    return this.isResource(100, 0, 20, 10);
                };
            break
            case 3:
                if (this.cacao.countCacao >= 30 && this.water.countWater >= 100 
                    && this.sugar.countSugar >= 10 && this.milk.countMilk >= 20) {
                    this.cacao.countCacao -= 30;
                    this.water.countWater -= 100;
                    this.sugar.countSugar -= 10;
                    this.milk.countMilk -= 20;
                    return 'Заберите стаканчик с Milk chocolate';                
                } else {
                    return this.isResource(100, 0, 20, 10, 20);
                };
            break
            case 4:
                if (this.coffee.countCoffee >= 30 && this.water.countWater >= 100 
                    && this.cacao.countCacao >= 20 && this.sugar.countSugar >= 10 
                    && this.milk.countMilk >= 20) {
                    this.coffee.countCoffee -= 30;
                    this.water.countWater -= 100;
                    this.cacao.countCacao -= 20;
                    this.sugar.countSugar -= 10;
                    this.milk.countMilk -= 20;
                    return 'Заберите стаканчик с 3 in 1';            
                } else {
                    return this.isResource(100, 30, 20, 10, 20);
                };
            break
        }
    }
}

export default CMachine;