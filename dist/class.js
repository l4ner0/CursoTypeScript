"use strict";
// Class
class Person {
    constructor() {
        this.zone = 'Caribean';
        this.city = 'Santo Domingo';
        this.country = 'R.D';
    }
    greet() {
        console.log("Hello!");
    }
}
class Employee extends Person {
    // Atributos
    /* private id: number = 0;
    private name: string = '';
    private dept: string = ''; */
    // Métodos
    constructor(id, name, dept) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        /* this.id = id;
        this.name = name;
        this.dept = dept; */
        this.showInfo();
    }
    showInfo() {
        console.log(`${this.name} - ${this.zone} - ${this.city}`);
    }
}
const emp = new Employee(1, 'Diego', 'Sales');
