// Prototypical inheritance

/*
  Better approach without reassigning the `prototype` and the constructor of the child
  Some context here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#building_longer_inheritance_chains
  See "You may also see some legacy code using Object.create() to build ..." section.
*/
function Parent(arg) {
  console.log('initializing...', arg);
  this.name = 'parent'
}

Parent.prototype.printName = function () {
  console.log('name is: ', this.name);
}

function Child(args) {
  // In the child function’s constructor, call the parent’s constructor with “Object.call(...)”
  // (pass any required parameter to it), so we will have the logic from parent’s constructor executed here.
  Parent.call(this, args);
  this.name = 'child';
}

Child.prototype.printCustomName = function () {
  console.log('custom in child: ', this.name);
}
Object.setPrototypeOf(Child.prototype, Parent.prototype);

function Child2(args) {
  Child.call(this, args);
  this.name = 'child 2';
}

Object.setPrototypeOf(Child2.prototype, Child.prototype);
Child2.prototype.printCustomName2 = function () {
  console.log('custom in child lvl2: ', this.name);
}
objParent = new Parent('parent argument');
objChild = new Child('1st level child');
objChild2 = new Child2('child lvl2 param');


/*
* Old approach (where the `prototype` and the constructor of the child are overwritten and then restored)
* */
function Class1() {
  this.val = null;
}

Class1.prototype.printVal = function () {
  console.log(this.constructor.name, ' -> ', this.val); // prints `name of class -> value of val"
};

function Class2() {
  Class1.call(this);
  this.setVal = function (val) {
    this.val = val;
  };
}

Class2.prototype = Object.create(Class1.prototype);

// Restore Class2 constructor, as it is overwritten and now is Class1's constructor (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
/* Class2.prototype.constructor = Class2; */
// NOTE: the last line of restoring class2’s constructor introduces a slight problem: its constructor becomes enumerable. To fix that, better to restore the constructor this way:
Object.defineProperty(Class2.prototype, 'constructor', {
  value: Class2,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true
});

Class2.prototype.setVal = function (val) {
  this.val = val;
};

// Another useful info can be found here (https://stackoverflow.com/questions/16063394/prototypical-inheritance-writing-up?answertab=votes#tab-top), in "Inheritance" section of accepted answer

let obj1 = {val: 'obj1 val'};
obj1.__proto__ = new Class1();
obj1.printVal(); // outputs "class1 -> obj1 val"

let obj2 = {};
obj2.__proto__ = new Class2();
obj2.setVal('obj2 val');
obj2.printVal();  // outputs "class2 -> obj2 val"
