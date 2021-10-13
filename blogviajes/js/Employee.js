export class Employee {
    constructor(id, name, salary, date, rol){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.date = date;
        this.rol = rol;
    };

    render(){
        return `id:${this.id}, name:${this.name}, salary:${this.salary}, date:${this.date}, rol:${this.rol}`;
    };
};