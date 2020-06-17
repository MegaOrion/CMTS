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

var Packard = new _cMachine__WEBPACK_IMPORTED_MODULE_0__["default"]('Packard');
var addResource = document.querySelector('.buttons_add');
var createOrd = document.querySelector('.buttons_create');
var output = document.getElementById('output');
addResource.addEventListener('click', function (event) {
    var target = event.target;
    if (target === addResource.children[0]) {
        Packard.addCoffee(100);
    }
    else if (target === addResource.children[1]) {
        Packard.addWater(100);
    }
    else if (target === addResource.children[2]) {
        Packard.addMilk(100);
    }
    else if (target === addResource.children[3]) {
        Packard.addCacao(100);
    }
    else if (target === addResource.children[4]) {
        Packard.addSugar(100);
    }
});
createOrd.addEventListener('click', function (event) {
    var target = event.target;
    var order;
    if (target === createOrd.children[0]) {
        order = Packard.createOrder(1);
    }
    else if (target === createOrd.children[1]) {
        order = Packard.createOrder(2);
    }
    else if (target === createOrd.children[2]) {
        order = Packard.createOrder(3);
    }
    else if (target == createOrd.children[3]) {
        order = Packard.createOrder(4);
    }
    output.innerHTML = order;
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cacao__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _coffee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _milk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _sugar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);





var CMachine = /** @class */ (function () {
    function CMachine(name) {
        this.cacao = new _cacao__WEBPACK_IMPORTED_MODULE_0__["Cacao"];
        this.water = new _water__WEBPACK_IMPORTED_MODULE_1__["Water"]();
        this.coffee = new _coffee__WEBPACK_IMPORTED_MODULE_2__["Coffee"]();
        this.milk = new _milk__WEBPACK_IMPORTED_MODULE_3__["Milk"]();
        this.sugar = new _sugar__WEBPACK_IMPORTED_MODULE_4__["Sugar"]();
    }
    CMachine.prototype.addCacao = function (quant) {
        this.cacao.countCacao += quant;
        console.log(4);
    };
    CMachine.prototype.addWater = function (quant) {
        this.water.countWater += quant;
        console.log(2);
    };
    CMachine.prototype.addCoffee = function (quant) {
        this.coffee.countCoffee += quant;
        console.log(1);
    };
    CMachine.prototype.addMilk = function (quant) {
        this.milk.countMilk += quant;
        console.log(3);
    };
    CMachine.prototype.addSugar = function (quant) {
        this.sugar.countSugar += quant;
        console.log(5);
    };
    CMachine.prototype.createOrder = function (num) {
        if (num === 1) {
            if (this.coffee.countCoffee >= 30 && this.water.countWater >= 100) {
                this.coffee.countCoffee -= 30;
                this.water.countWater -= 100;
                return 'Заберите стаканчик с Nescafe';
            }
            else {
                if (this.coffee.countCoffee < 30) {
                    return 'Not enough coffee';
                }
                else if (this.water.countWater < 100) {
                    return 'Not enough water';
                }
            }
        }
        else if (num === 2) {
            if (this.cacao.countCacao >= 20 && this.water.countWater >= 100 && this.sugar.countSugar >= 10) {
                this.cacao.countCacao -= 20;
                this.water.countWater -= 100;
                this.sugar.countSugar -= 10;
                return 'Заберите стаканчик с Chocolate';
            }
            else {
                if (this.cacao.countCacao < 20) {
                    return 'Not enough cacao';
                }
                else if (this.water.countWater < 100) {
                    return 'Not enough water';
                }
                else if (this.sugar.countSugar < 10) {
                    return 'Not enough sugar';
                }
            }
        }
        else if (num === 3) {
            if (this.cacao.countCacao >= 30 && this.water.countWater >= 100
                && this.sugar.countSugar >= 10 && this.milk.countMilk >= 20) {
                this.cacao.countCacao -= 30;
                this.water.countWater -= 100;
                this.sugar.countSugar -= 10;
                this.milk.countMilk -= 20;
                return 'Заберите стаканчик с Milk chocolate';
            }
            else {
                if (this.cacao.countCacao < 30) {
                    return 'Not enough cacao';
                }
                else if (this.water.countWater < 100) {
                    return 'Not enough water';
                }
                else if (this.sugar.countSugar < 10) {
                    return 'Not enough sugar';
                }
                else if (this.milk.countMilk < 20) {
                    return 'Not enough sugar';
                }
            }
        }
        else if (num === 4) {
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
                if (this.coffee.countCoffee < 30) {
                    return 'Not enough coffee';
                }
                else if (this.water.countWater < 100) {
                    return 'Not enough water';
                }
                else if (this.cacao.countCacao < 20) {
                    return 'Not enough cacao';
                }
                else if (this.sugar.countSugar < 10) {
                    return 'Not enough sugar';
                }
                else if (this.milk.countMilk < 20) {
                    return 'Not enough milk';
                }
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