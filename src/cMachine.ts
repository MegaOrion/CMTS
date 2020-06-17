import {Cacao} from './cacao';
import {Water} from './water';
import {Coffee} from './coffee';
import {Milk} from './milk';
import {Sugar} from './sugar';

class CMachine {
    cacao: Cacao;
    coffee: Coffee;
    sugar: Sugar;
    water: Water;
    milk: Milk;
    constructor(name: string) {
        this.cacao = new Cacao;
        this.water = new Water();
        this.coffee = new Coffee();
        this.milk = new Milk();
        this.sugar = new Sugar();
    }

    addCacao(quant: number) {
        this.cacao.countCacao += quant;
        console.log(4);        
    }
    addWater(quant: number) {
        this.water.countWater += quant;
        console.log(2);
    }
    addCoffee(quant: number) {
        this.coffee.countCoffee += quant;
        console.log(1);
    }
    addMilk(quant: number) {
        this.milk.countMilk += quant;
        console.log(3);
    }
    addSugar(quant: number) {
        this.sugar.countSugar += quant;
        console.log(5);
    }

    createOrder(num: number): string {        
        if (num === 1) {
            if (this.coffee.countCoffee >= 30 && this.water.countWater >= 100) {
                this.coffee.countCoffee -= 30; 
                this.water.countWater -= 100
                return 'Заберите стаканчик с Nescafe';                            
            } else {
                if (this.coffee.countCoffee < 30) {
                    return 'Not enough coffee'                   
                } else if (this.water.countWater < 100) {
                    return 'Not enough water'
                }                
            }
        } else if (num === 2) {
            if (this.cacao.countCacao >= 20 && this.water.countWater >= 100 && this.sugar.countSugar >= 10) {
                this.cacao.countCacao -= 20;
                this.water.countWater -= 100;
                this.sugar.countSugar -= 10;
                return 'Заберите стаканчик с Chocolate';                
            } else {
                if (this.cacao.countCacao < 20) {
                    return 'Not enough cacao'                    
                } else if (this.water.countWater < 100) {
                    return 'Not enough water'
                } else if (this.sugar.countSugar < 10) {
                    return 'Not enough sugar'
                }                
            }
        } else if (num === 3) {
            if (this.cacao.countCacao >= 30 && this.water.countWater >= 100 
                && this.sugar.countSugar >= 10 && this.milk.countMilk >= 20) {
                this.cacao.countCacao -= 30;
                this.water.countWater -= 100;
                this.sugar.countSugar -= 10;
                this.milk.countMilk -= 20;
                return 'Заберите стаканчик с Milk chocolate';                
            } else {
                if (this.cacao.countCacao < 30) {
                    return 'Not enough cacao'            
                } else if (this.water.countWater < 100) {
                    return 'Not enough water'
                } else if (this.sugar.countSugar < 10) {
                    return 'Not enough sugar'
                } else if (this.milk.countMilk < 20) {
                    return 'Not enough sugar'
                }  
            }
        } else if (num === 4) {
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
                if (this.coffee.countCoffee < 30) {
                    return 'Not enough coffee'                  
                } else if (this.water.countWater < 100) {
                    return 'Not enough water'
                } else if (this.cacao.countCacao < 20) {
                    return 'Not enough cacao'
                } else if (this.sugar.countSugar < 10) {
                    return 'Not enough sugar'
                } else if (this.milk.countMilk < 20) {
                    return 'Not enough milk'
                }
            }
        }
    }
}

export default CMachine;