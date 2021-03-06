// CODE here for your Lambda Classes
class Person {
    constructor(properties) {
        this.name = properties.name;
        this.age = properties.age;
        this.location = properties.location;
        this.gender = properties.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(properties) {
        super(properties);

        this.specialty = properties.specialty;
        this.favLanguage = properties.favLanguage;
        this.catchPhrase = properties.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(properties) {
        super(properties);

        this.previousBackground = properties.previousBackground;
        this.className = properties.className;
        this.favSubjects = properties.favSubjects;
    }

    listsSubjects() {
        for(let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(properties) {
        super(properties);

        this.gradClassName = properties.gradClassName;
        this.favInstructor = properties.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
})

const marc = new Student({
    name: 'Marc',
    location: 'Chicago',
    age: 32,
    gender: 'Male',
    previousBackground: ['Economics', 'Trading'],
    className: 'FSW 16',
    favSubjects: ['HTML', 'CSS', 'Javascript']
})

const sam = new ProjectManager({
    name: 'Sam',
    location: 'Los Angeles',
    age: 27,
    gender: 'Female',
    specialty: 'redux',
    favLanguage: 'Python',
    catchPhrase: 'Programming is fun!',
    gradClassName: 'CS13',
    favInstructor: 'Josh'
})

// ==================== testing (Instructor class)
console.log(fred);
fred.speak();
fred.demo("math");
fred.grade(marc, "history");

// ==================== testing (Student class)
console.log(marc);
marc.speak();
marc.listsSubjects();
marc.PRAssignment("web development");
marc.sprintChallenge("javascript");

// ==================== testing (ProjectManager class)
console.log(sam);
sam.speak();
sam.demo("algebra");
sam.grade(marc, "programming");
sam.standUp("FSW16");
sam.debugsCode(marc, "programming");