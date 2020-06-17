import CMachine from './cMachine';

const Packard: CMachine = new CMachine('Packard');
const addResource: HTMLDivElement = document.querySelector('.buttons_add');
const createOrd: HTMLDivElement = document.querySelector('.buttons_create');
const output: any = document.getElementById('output');

addResource.addEventListener('click', (event) => {
    let target = event.target;
    if (target === addResource.children[0]) {
        Packard.addCoffee(100)
    } else if (target === addResource.children[1]) {
        Packard.addWater(100)
    } else if (target === addResource.children[2]) {
        Packard.addMilk(100)
    } else if (target === addResource.children[3]) {
        Packard.addCacao(100)
    } else if (target === addResource.children[4]) {
        Packard.addSugar(100)
    }
});

createOrd.addEventListener('click', (event) => {
    let target = event.target;
    let order: string;
    if (target === createOrd.children[0]) {
        order = Packard.createOrder(1);
    } else if (target === createOrd.children[1]) {
        order = Packard.createOrder(2)
    } else if (target === createOrd.children[2]) {
        order = Packard.createOrder(3)
    } else if (target == createOrd.children[3]) {
        order = Packard.createOrder(4)
    }
    output.innerHTML = order;
});