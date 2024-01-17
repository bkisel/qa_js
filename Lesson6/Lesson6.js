//1) 3 ojects {}
//1
let person2 = {
    surname: "Koval" 
};
let person1 = {
    name: "Taras",
    age: 31,
    profession: "Pilot",
    __proto__:person2 //3)
};
//2
let adress = {
    country: "Ukraine",
    city: "lviv",
    street: "Svobody",
    building: "32B"
};
//3
let hobby = {
    sport: "Volleyball",

};

greeting = function() {
    console.log("Hello, my name is " +person1.name+ " and my surname is " +person2.surname+ ". I am from " +adress.country+ ". And my hobby is playing " +hobby.sport)
}
greeting();


//2) 3 objects ()
function Person (name, surname, age, profession){
    this.name = name
    this.surname = surname
    this.age = age
    this.profession = profession
};
let boy = new Person("Bohdan", "Vorman", 35, "Developer");
//2
function Adress (country,city,street,building){
    this.country = country
    this.city = city
    this.street = street
    this.building = building
};
let location = new Adress ("Ukraine", "Kyiv", "Shevchenka", 12);
//3
function Hobby (sport) {
    this.sport = sport

};
let holidays = new Hobby ("Football");

greeting2 = function() {
    console.log("Hello, my name is " +boy.name+ " and my surname is " +boy.surname+ ". I am from " +location.country+ ". And my hobby is playing " +holidays.sport)
}
greeting2();


//4-5
let person3 = {
    name: "Vika",
    age: 34,
    profession: "QA"
};

let engineer = Object.create(person3);
engineer.profession = "Engineer";
engineer.specialization = "Software Development";

let QA_engineer = Object.create(engineer);
QA_engineer.specialization = "Quality Assurance";

console.log("Person Details:", person3);
console.log("Engineer Details:", engineer);
console.log("QA Engineer Details:", QA_engineer);
