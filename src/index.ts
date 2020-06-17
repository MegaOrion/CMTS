import CMachine from './cMachine';
import {Cacao} from './cacao';
import {Water} from './water';
import {Coffee} from './coffee';
import {Milk} from './milk';
import {Sugar} from './sugar';

const cacao: Cacao = new Cacao(), 
    coffee: Coffee = new Coffee(), 
    sugar: Sugar = new Sugar(), 
    water: Water = new Water(), 
    milk: Milk = new Milk();

const Packard: CMachine = new CMachine('Packard', cacao, coffee, sugar, water, milk);
const addResource: HTMLDivElement = document.querySelector('.buttons_add');
const createOrd: HTMLDivElement = document.querySelector('.buttons_create');
const output: any = document.getElementById('output');

enum Order {
    'Nescafe' = 1,
    'Chocolate' = 2,
    'Milk chocolate' = 3,
    '3 in 1' = 4
}

addResource.addEventListener('click', (event) => {
    switch (event.target) {
        case addResource.children[0]: Packard.addResource(100, Packard.coffee); break
        case addResource.children[1]: Packard.addResource(100, Packard.water); break
        case addResource.children[2]: Packard.addResource(100, Packard.milk); break
        case addResource.children[3]: Packard.addResource(100, Packard.cacao); break
        case addResource.children[4]: Packard.addResource(100, Packard.sugar); break
    }
});

createOrd.addEventListener('click', (event) => {
    switch (event.target) {
        case createOrd.children[0]: output.innerHTML = Packard.createOrder(Order.Nescafe); break
        case createOrd.children[1]: output.innerHTML = Packard.createOrder(Order.Chocolate); break
        case createOrd.children[2]: output.innerHTML = Packard.createOrder(Order["Milk chocolate"]); break
        case createOrd.children[3]: output.innerHTML = Packard.createOrder(Order["3 in 1"]); break
    }
});