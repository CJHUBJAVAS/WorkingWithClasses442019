var Person = require('./Person.js');

class Employee extends Person {
    constructor (firstName, lastName, age, id) {
        super(firstName, lastName, age);
        this._id = id;
    }
}

module.exports = Employee;