
interface GeneralPatient{
    name:string;
    age:number;
    type:"gerneral"
}

interface EmergencyPatient{
    name:string;
    age:number;
    type:"emergency";
     emergencyLevel: number;
}

const getPatientStatus=(patient:GeneralPatient |EmergencyPatient):string=>{

    if(patient.type==="gerneral"){
        return "Gerneral"
    }
    else if(patient.type==="emergency"){
        if(patient.emergencyLevel===1){
            return "Critical"
        }else if(patient.emergencyLevel===2){
            return " Serious"
        }else if(patient.emergencyLevel===3){
            return " Moderate"
        }
    }

}


const piatin=getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 });
console.log(piatin)