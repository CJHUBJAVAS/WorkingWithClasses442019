class Employee {                      // creating a class, every class will inherit Object
    constructor(firstName, lastName, age) {     //  when i say newEmployee i'm executing this method
        this._firstName = firstName;            //      "
        this._lastName = lastName;              //      "
        this._age = age;                        //     "
    }                                           //     "
    set firstName(newFirstName) {
        this._firstName = newFirstName;
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(newLastName) {
        this._lastNae = newLastName;
    }
    set age(newAge) {
        if (!isNaN(newAge)) {
            this._age = newAge;
        }
        else {
            this._age = 30;
        }
    } 
        get age(){
            return this._age;
        }
    }
var employee1 = new Employee('Brandon', 'Smith', 47);    // key word NEW will tell JS to execute this method
var employee2 = {     // last week created an object this way, very slow
    firstName: 'Laura',
    lastName: 'Long'
}
function Log(a) {
    console.log(a);
}
employee1.firstName = 'Brent';
employee1.age = 'Forty-Seven';

console.log(employee1);
console.log(employee2);

console.log(employee1.toString());      // did not define toString earlier but can call that method 
//can do this by inheritance
console.log(employee1 instanceof Object);  // results in TRUE
console.log(Log instanceof Object);        //Log is a function and also an object
