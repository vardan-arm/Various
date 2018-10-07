"use strict";

/*
// Singleton
function SingletonClass() {

    if(typeof SingletonClass.instance === 'object') {
        return SingletonClass.instance;
    }
    this.prop1 = 'value 1';

    SingletonClass.instance = this;
}

var obj1 = new SingletonClass(),
    obj2 = new SingletonClass();

console.log(obj1 === obj2);
*/



// Factory
function CarMaker() {}

CarMaker.prototype.drive = function () {
    console.log('Vroom, I have ' + this.doors + ' doors');
};

// static factory method
CarMaker.factory = function(type) {
    var constr = type,
        newCar;

    // error if the constructor doesn't exist
    if(typeof CarMaker[constr] !== 'function') {
        throw {
            name: 'Error',
            message: constr + ' is not defined'
        }
    }

    // at this point constructor is known to exist
    // let's have it inherit the parent but only once
    if(typeof CarMaker[constr].prototype.drive !== 'function') {
        CarMaker[constr].prototype = new CarMaker();
    }

    // create new instance
    newCar = new CarMaker[constr]();

    return newCar;
};

// define specific car makers
CarMaker.Compact = function() {
    this.doors = 4;
};

CarMaker.Convertible = function() {
    this.doors = 2;
};

CarMaker.SUV = function() {
    this.doors = 5;
};


var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');
corolla.drive();
solstice.drive();
cherokee.drive();