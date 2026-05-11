
/* 
A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/

let grade:number = 65


if (grade >= 90) {
    console.log('Aprobado con: A')
} else if (grade >= 80) {
    console.log('Aprobado con: B')
} else if (grade >= 70) {
    console.log('Aprobado con: C')
} else if (grade >= 60) {
    console.log('Aprobado con: D')
} else {
    console.log('Reprobado con: F')
}