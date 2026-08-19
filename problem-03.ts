
interface User {
    name:string;
    age:number;
    city:string;
}


const formatUserProfile=(user:User):string=>{
    let {name,age,city}=user;
    return `${name} is ${age} years old and lives in ${city}.`

}


let Rhime=formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka"
});
console.log(Rhime)