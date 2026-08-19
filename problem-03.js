"use strict";
const formatUserProfile = (user) => {
    let { name, age, city } = user;
    return `${name} is ${age} years old and lives in ${city}.`;
};
let Rhime = formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka"
});
console.log(Rhime);
