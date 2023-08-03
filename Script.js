let arr=[34,6563,32,56,34,23];
// let arr = [
//     {
//         name: "nom",
//         age: 11
//     },
//     {
//         name: "fxc",
//         age: 33
//     },{
//         name: "fdc",
//         age: 88
//     }

// ]

let admission = {
    course : "btech",
    fee : "9999",
}

let student = {
    names : "ritesh",
    
    address : {
        prm : "kdgkskdg",
        sec : "elmvvme"
    }
}
// console.log(student.address.prm)
// console.log(admission.course,student.names,student.address.prm="vfbfgdg")
// console.log(student.address.prm)

student.__proto__=admission;
console.log(student.fee);
 