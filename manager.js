const classes = require("./Employee.js")
class Manager extends classes.Employee {
    constructor(name, title, salary, boss, employees){
        super(name, title, salary, boss)
        this.employees = [employees]
    }

    bonus(multiplier){
        let total = 0;
        this.employees.forEach((element) =>{
            total += element.salary
        })
        return total * multiplier
    }
}

let hobbes = new classes.Employee('Hobbes', 'founder', 1000000, null);
let calvin = new classes.Employee('Calvin', 'director', 130000, 'Hobbes')
let lily = new classes.Employee('Lily', 'Ta', 90000, 'Susie')
let clifford = new classes.Employee('Clifford', 'Ta', 90000, 'Susie')
let susie = new Manager('Susie', 'TaManager', 100000, 'Calvin', [lily, clifford])

console.log(hobbes.bonus(0.05)); // 50000
console.log(calvin.bonus(0.05)); // 6500
console.log(susie.bonus(0.05)); // 14000
console.log(lily.bonus(0.05)); // 4500
console.log(clifford.bonus(0.05))