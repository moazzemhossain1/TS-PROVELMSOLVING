

type Roll="admin" | "editor" | "viwer"

const canEdit=(roll:Roll):boolean=>{
    if(roll === "admin" || roll==="editor"){
        return true;
    }
    return false;

}

console.log(canEdit("admin"));
console.log(canEdit("editor"));
console.log(canEdit("viwer"))
