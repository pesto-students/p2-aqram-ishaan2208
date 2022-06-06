class Person {
    constructor(name) {
        this.name = name 
    }
}

class Teacher extends Person {
    constructor(name,subject) {
        super(name);
        this.subject = subject
    }
    teach () {
       return this.name + " is now teaching " + this.subject
    }
}



let myteacher = new Teacher("Ishaan","science")


console.log(myteacher.teach())