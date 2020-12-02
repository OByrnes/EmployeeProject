class Employee {
    constructor (name, title, salary, boss){
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = boss;
    }
    bonus(multiplier){
       let bonus = (this.salary) * multiplier
       return bonus
    }
}



exports.Employee = Employee