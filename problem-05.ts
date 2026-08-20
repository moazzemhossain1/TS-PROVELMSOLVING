

interface Student{
    name:string;
    marks:number[];

}

interface Result{
    name:string;
    avarage:number;
    result:string;
}

const getStudentResult=(student:Student):Result=>{


    let marks:number[]=student.marks;
    // console.log(marks)


    let totle=0;
    
    for(let mark of marks){
        totle=totle+mark;
        // console.log(totle)
    }
    let avarage=totle/marks.length;
    // console.log(avarage)

    // if(avarage<40){
    //     return "Filed"
    //     // console.log("Filed")
    // }
    // else{
    //     return "Passe"
    // //    console.log("Passe")


    let result=avarage>40 ?"pases":"Filed"

    return {
        name:student.name,
        avarage:avarage,
        result:result
    
    }

    



}

const student=getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85]
});
console.log(student)