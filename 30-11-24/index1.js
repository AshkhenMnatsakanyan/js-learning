// // Problem 1: Student Grades
// // Description:
// // You are provided with an array of students, where each student is represented as an object. Each object contains the student’s name and their score. Your task is to determine the grade status of each student using a for loop and a switch statement.
// // The grade categories are as follows:
// // i >= 90 → “Excellent”
// // i >= 75 → “Good”
// // i >= 50 → “Pass”
// // default → “Fail”
// // Data example


////if else case
// // const students = [
// //     { name: "Anna", grade: 85 },
// //     { name: "Mariam", grade: 92 },
// //     { name: "Olivia", grade: 76 },
// //     { name: "Emma", grade: 59 },
// //   ];

// // for (let i = 0; i < students.length; i++) {
// //     let student = students[i];
// //     if (student.grade >= 90) {
// //         console.log(`${student.name}-Excellent`);
// //     } 
// //     else if (student.grade >= 75) {
// //         console.log(`${student.name}-Good`);
// //     }
// //     else if (student.grade >= 50) {
// //         console.log(`${student.name}-Pass`);
// //     } 
// //     else {
// //         console.log(`${student.name}-Fail`);
// //     }   
// // }


// const students = [
//     { name: "Anna", grade: 85 },
//     { name: "Mariam", grade: 92 },
//     { name: "Olivia", grade: 76 },
//     { name: "Emma", grade: 59 },
// ];

// for (let i = 0; i < students.length; i++) {
//     let student = students[i];
    
//     switch (true) {
//         case student.grade >= 90:
//             console.log(`${student.name}-Excellent`);
//             break;
//         case student.grade >= 75:
//             console.log(`${student.name}-Good`);
//             break;
//         case student.grade >= 50:
//             console.log(`${student.name}-Pass`);
//             break;
//         default:
//             console.log(`${student.name}-Fail`);
//     }
// }

//// switch case

const students = [
        { name: "Anna", grade: 85 },
        { name: "Mariam", grade: 92 },
        { name: "Olivia", grade: 76 },
        { name: "Emma", grade: 59 },
    ];

for (let i = 0; i < students.length; i++) {
    let student = students[i];

switch(true) {
    case (student.grade >= 90):
        console.log(`${student.name} - Excellent`);
        break;

    case (student.grade >= 75):
        console.log(`${student.name} - Good`);
        break;

    case (student.grade >= 50):
        console.log(`${student.name} - Pass`)
    default:
        console.log(`${student.name} - Fail`);
}
}
