// Prototypical inheritance
function Class1() {
	this.val = null;

	this.printVal = function() {
		console.log(this.constructor.name, ' -> ', this.val); // prints `name of class -> value of val"
	};
	return this;
}

function Class2() {
	Class1.call(this);
	this.setVal = function(val) {
		this.val = val;
	};
	return this;
}
Class2.prototype = Object.create(Class1.prototype);
Class2.prototype.constructor = Class2;  // restore Class2 constructor, as it is overriden and now is Class1's constructor (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)

// Another useful info can be found here (https://stackoverflow.com/questions/16063394/prototypical-inheritance-writing-up?answertab=votes#tab-top), in "Inheritance" section of accepted answer

let obj1 = {val: 'obj1 val'};
obj1.__proto__ = new Class1();
obj1.printVal(); // outputs "class1 -> obj1 val"

let obj2 = {};
obj2.__proto__ = new Class2();
obj2.setVal('obj2 val');
obj2.printVal();  // outputs "class2 -> obj2 val"
