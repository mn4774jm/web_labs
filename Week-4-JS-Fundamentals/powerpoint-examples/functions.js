//Defining functions

// function isMinnesotaZip(code) {
//
//     if (code >= 55001 && code <= 56763){
//         return true
//     }
//     return false
// }
//
// console.log(isMinnesotaZip(55403))
// console.log(isMinnesotaZip(90210))
// console.log(isMinnesotaZip('55403'))

//GPA example

function validGPA(GPA){
    //more concise way to write true/false return
    return GPA <= 4 && GPA>=0
}

console.log(validGPA(-3))
console.log(validGPA(4.1))
console.log(validGPA(2.7))