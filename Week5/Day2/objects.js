// let name = "Mouzin";
// let age = 21;
// let isMarried = false;
// let hobbies = ["Coding", "Reading", "Chess"];

// let name2 = "Irfan";
// let age2 = 17;
// let isMarried2 = false;
// let hobbies2 = ["X", "Y", "Z"];

// let person1 = {
//     name: "Mouzin",
//     age: 21,
//     isMarried: false,
//     hobbies: ["Coding", "Reading", "Chess"],
// }

// let person2 = {
//     name: "Irfan",
//     age: 17,
//     isMarried: false,
//     hobbies: ["X", "Y", "Z"],
// }

let persons = [
    {
        name: "Mouzin",
        age: 21,
        isMarried: false,
        hobbies: ["Coding", "Reading", "Chess"],
    },
    {
        name: "Irfan",
        age: 17,
        isMarried: false,
        hobbies: ["X", "Y", "Z"],
    },
    {
        name: "Sarib",
        age: 21,
        isMarried: false,
        hobbies: ["Coding", "Badminton", "Sleeping"],
    },
    {
        name: "Mehreen",
        age: 21,
        isMarried: false,
        hobbies: ["Coding", "Reading", "Chess"],
    },
    {
        name: "Uzma",
        age: 21,
        isMarried: false,
        hobbies: ["Travelling", "Eating"],
    },
]

// console.log(person1.name);
// console.log(persons[0].name);

// console.log(person2.name);
// console.log(persons[1].name);

persons[0].age = 22;
persons[0].isMarried = true;

persons[0].job = "Software Developer";

console.log(persons[0]);

persons.forEach((person) => {
    console.log(person.name);
})


