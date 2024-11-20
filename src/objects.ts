class Person {
    firstName: string;
    age: number;
}

const person: Person = {
    firstName:"Tim",
    age: 18,
}

const {firstName,age} = person;
console.log(person);