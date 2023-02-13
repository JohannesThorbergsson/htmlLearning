const student1 = {name: "Johannes", id: 1}
const student2 = {name: "Helen", id: 2}

let studentArray = [student1, student2]

function findAndUpdateName(id, newName) {
    for(let i=0; i< studentArray.length; i++){
        if(studentArray[i].id === id) {
            studentArray[i] = {name: newName, id: id}
        }
    }
    return studentArray
}
function addNewIfFound(id, newName) {
    for(let i=0; i< studentArray.length; i++){
        if(studentArray[i].id === id) {
            studentArray.push({name: newName, id: id+1})
        }
    }
    return studentArray
}

console.log(studentArray)
console.log(findAndUpdateName(2, "Ana"))
console.log(addNewIfFound(1, "Lena"))
console.log(student1)
console.log(student2)