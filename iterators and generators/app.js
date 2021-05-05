/*
  Dictionary by pre-ES6 function and iterator
*/

function DictByIterator() {
  this.items = new Map();
}

DictByIterator.prototype[Symbol.iterator] = function () {
  /*
    // We can use Map's `values()` method and simply return `this.items.entries()`.
    return this.items.entries()
    // But let's write the logic manually.
  */
  let currentIndex = 0;
  let limit = this.items.size;
  return {
    next: () => {
      if (currentIndex < limit) {
        return {
          value: Array.from(this.items)[currentIndex++],
          done: false
        };
      }
      return {
        done: true
      }
    }
  }
}

DictByIterator.prototype.add = function (key, val) {
  this.items.set(key, val);
};

DictByIterator.prototype.remove = (key) => {
  this.items.delete(key)
}

const myDictByFunction = new DictByIterator();

function addItemToMyDictByIterator() {
  const {key, value} = generateKeyValuePair();
  myDictByFunction.add(key, value);
}

function printItemsOfMyDictByIterator() {
  console.log('Dictionary items (with iterator)');
  for (let dictItem of myDictByFunction) {
    console.log(`${dictItem[0]}: ${dictItem[1]}`);
  }
}






/*
  Dictionary by pre-ES6 function and generator
*/
function DictByGenerator() {
  this.items = new Map();
}

DictByGenerator.prototype.add = function(key, val) {
  this.items.set(key, val);
}

DictByGenerator.prototype[Symbol.iterator] = function* () {
  let currentIndex = 0;
  let limit = this.items.size;
  while (currentIndex < limit) {
    yield Array.from(this.items)[currentIndex++]
  }
}

const myDictByGenerator = new DictByGenerator();

function addItemToMyDictByGenerator() {
  const {key, value} = generateKeyValuePair();
  myDictByGenerator.add(key, value);
}

function printItemsOfMyDictByGenerator() {
  console.log('Dictionary items (with generator)');
  for (let dictItem of myDictByGenerator) {
    console.log(`${dictItem[0]}: ${dictItem[1]}`);
  }
}



/*
  Dictionary by ES6 class
*/
class DictByClass {
  constructor() {
    this.items = new Map();
  }

  [Symbol.iterator]() {
    // Easy way
    // return this.items.entries();

    // Manual way
    let currentIndex = 0;
    let limit = this.items.size;
    return {
      next: () => {
        if (currentIndex < limit) {
          return {
            value: Array.from(this.items)[currentIndex++],
            done: false
          }
        } else {
          return {
            done: true
          }
        }
      }
    }
  }

  add(key, value) {
    this.items.set(key, value);
  }
}

const myDictByClass = new DictByClass();

function addItemToMyDictByClass() {
  const {key, value} = generateKeyValuePair();
  myDictByClass.add(key, value);
}

function printItemsOfMyDictByClass() {
  console.log('Dictionary items (with ES6 `class` and iterator)');
  for (let dictItem of myDictByClass) {
    console.log(`${dictItem[0]}: ${dictItem[1]}`);
  }
}



/*
  Utils
 */
function generateKeyValuePair() {
  const key = Date.now().toString(36)
  const value = (Math.random() * 100).toFixed();
  return {key, value}
}
