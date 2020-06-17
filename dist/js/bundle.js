/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _cacao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _coffee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _milk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _sugar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






var cacao = new _cacao__WEBPACK_IMPORTED_MODULE_1__["Cacao"](), coffee = new _coffee__WEBPACK_IMPORTED_MODULE_3__["Coffee"](), sugar = new _sugar__WEBPACK_IMPORTED_MODULE_5__["Sugar"](), water = new _water__WEBPACK_IMPORTED_MODULE_2__["Water"](), milk = new _milk__WEBPACK_IMPORTED_MODULE_4__["Milk"]();
var Packard = new _cMachine__WEBPACK_IMPORTED_MODULE_0__["default"]('Packard', cacao, coffee, sugar, water, milk);
var addResource = document.querySelector('.buttons_add');
var createOrd = document.querySelector('.buttons_create');
var output = document.getElementById('output');
var Order;
(function (Order) {
    Order[Order["Nescafe"] = 1] = "Nescafe";
    Order[Order["Chocolate"] = 2] = "Chocolate";
    Order[Order["Milk chocolate"] = 3] = "Milk chocolate";
    Order[Order["3 in 1"] = 4] = "3 in 1";
})(Order || (Order = {}));
addResource.addEventListener('click', function (event) {
    switch (event.target) {
        case addResource.children[0]: Packard.addResource(100, Packard.coffee);
        case addResource.children[1]: Packard.addResource(100, Packard.water);
        case addResource.children[2]: Packard.addResource(100, Packard.milk);
        case addResource.children[3]: Packard.addResource(100, Packard.cacao);
        case addResource.children[4]: Packard.addResource(100, Packard.sugar);
    }
});
createOrd.addEventListener('click', function (event) {
    switch (event.target) {
        case createOrd.children[0]: output.innerHTML = Packard.createOrder(Order.Nescafe);
        case createOrd.children[1]: output.innerHTML = Packard.createOrder(Order.Chocolate);
        case createOrd.children[2]: output.innerHTML = Packard.createOrder(Order["Milk chocolate"]);
        case createOrd.children[3]: output.innerHTML = Packard.createOrder(Order["3 in 1"]);
    }
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CMachine = /** @class */ (function () {
    function CMachine(name, cacao, coffee, sugar, water, milk) {
        this.cacao = cacao;
        this.water = water;
        this.coffee = coffee;
        this.milk = milk;
        this.sugar = sugar;
    }
    CMachine.prototype.addResource = function (quant, resource) {
        switch (resource) {
            case this.coffee: this.coffee.countCoffee += quant;
            case this.cacao: this.cacao.countCacao += quant;
            case this.water: this.water.countWater += quant;
            case this.milk: this.milk.countMilk += quant;
            case this.sugar: this.sugar.countSugar += quant;
        }
    };
    CMachine.prototype.isResource = function (water, coffee, cacao, sugar, milk) {
        var notRes = [];
        this.water.countWater < water && notRes.push('Water');
        this.coffee.countCoffee < coffee && notRes.push('Coffee');
        this.water.countSugar < sugar && notRes.push('Sugar');
        this.water.countMilk < milk && notRes.push('Milk');
        this.water.countCacao < cacao && notRes.push('Cacao');
        return "Not enough: " + notRes.join(', ');
    };
    CMachine.prototype.createOrder = function (numOfOrd) {
        switch (numOfOrd) {
            case 1:
                if (this.coffee.countCoffee >= 30 && this.water.countWater >= 100) {
                    this.coffee.countCoffee -= 30;
                    this.water.countWater -= 100;
                    return 'Заберите стаканчик с Nescafe';
                }
                else {
                    return this.isResource(100, 30);
                }
                ;
            case 2:
                if (this.cacao.countCacao >= 20 && this.water.countWater >= 100 && this.sugar.countSugar >= 10) {
                    this.cacao.countCacao -= 20;
                    this.water.countWater -= 100;
                    this.sugar.countSugar -= 10;
                    return 'Заберите стаканчик с Chocolate';
                }
                else {
                    return this.isResource(100, 0, 20, 10);
                }
            case 3:
                if (this.cacao.countCacao >= 30 && this.water.countWater >= 100
                    && this.sugar.countSugar >= 10 && this.milk.countMilk >= 20) {
                    this.cacao.countCacao -= 30;
                    this.water.countWater -= 100;
                    this.sugar.countSugar -= 10;
                    this.milk.countMilk -= 20;
                    return 'Заберите стаканчик с Milk chocolate';
                }
                else {
                    return this.isResource(100, 0, 20, 10, 20);
                }
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
                }
                else {
                    return this.isResource(100, 30, 20, 10, 20);
                }
        }
    };
    return CMachine;
}());
/* harmony default export */ __webpack_exports__["default"] = (CMachine);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cacao", function() { return Cacao; });
var Cacao = /** @class */ (function () {
    function Cacao(count) {
        if (count === void 0) { count = 300; }
        this.count = count;
    }
    Object.defineProperty(Cacao.prototype, "countCacao", {
        get: function () {
            return this.count;
        },
        set: function (quant) {
            this.count = quant;
        },
        enumerable: false,
        configurable: true
    });
    return Cacao;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Water", function() { return Water; });
var Water = /** @class */ (function () {
    function Water(count) {
        if (count === void 0) { count = 3000; }
        this.count = count;
    }
    Object.defineProperty(Water.prototype, "countWater", {
        get: function () {
            return this.count;
        },
        set: function (quant) {
            this.count = quant;
        },
        enumerable: false,
        configurable: true
    });
    return Water;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coffee", function() { return Coffee; });
var Coffee = /** @class */ (function () {
    function Coffee(count) {
        if (count === void 0) { count = 300; }
        this.count = count;
    }
    Object.defineProperty(Coffee.prototype, "countCoffee", {
        get: function () {
            return this.count;
        },
        set: function (quant) {
            this.count = quant;
        },
        enumerable: false,
        configurable: true
    });
    return Coffee;
}());



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Milk", function() { return Milk; });
var Milk = /** @class */ (function () {
    function Milk(count) {
        if (count === void 0) { count = 300; }
        this.count = count;
    }
    Object.defineProperty(Milk.prototype, "countMilk", {
        get: function () {
            return this.count;
        },
        set: function (quant) {
            this.count = quant;
        },
        enumerable: false,
        configurable: true
    });
    return Milk;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sugar", function() { return Sugar; });
var Sugar = /** @class */ (function () {
    function Sugar(count) {
        if (count === void 0) { count = 300; }
        this.count = count;
    }
    Object.defineProperty(Sugar.prototype, "countSugar", {
        get: function () {
            return this.count;
        },
        set: function (quant) {
            this.count = quant;
        },
        enumerable: false,
        configurable: true
    });
    return Sugar;
}());



/***/ })
/******/ ]);