// Class

class Person {
    public zone: string = 'Caribean';
    protected city: string = 'Santo Domingo';
    private country: string = 'R.D';    

    constructor() {}

    greet():void {
        console.log("Hello!");
    }
}

class Employee extends Person {
    // Atributos
    /* private id: number = 0;
    private name: string = '';
    private dept: string = ''; */

    // Métodos
    constructor(private readonly id: number, private name: string, private dept: string) {
        super();
        /* this.id = id;
        this.name = name;
        this.dept = dept; */
        this.showInfo();
    }

    showInfo(): void {
        console.log(`${this.name} - ${this.zone} - ${this.city}`);
    }
}

const emp = new Employee(1, 'Diego', 'Sales');