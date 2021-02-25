const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school, title) {
        super(name, id, email);
        this.school = school;
        this.title = title;
    }
    getRole() {
        return this.title;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
