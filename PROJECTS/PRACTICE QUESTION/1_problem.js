const students = [
    { name: "Alice", scores: [85, 90, 78] },
    { name: "Bob", scores: [55, 60, 65] },
    { name: "Charlie", scores: [30, 60, 70] },
    { name: "David", scores: [95, 88, 92] },
    { name: "Eve", scores: [50, 40, 45] }
];

const pass = (students) => {
    for (let i = 0; i < students.scores.length; i++) {
        if (students.scores[i] < 40) {
            return false;
        }
    }
    return true;
}
console.log(students.filter(pass));


const passed = students.filter(pass);
let avg = passed.map((students) => {
    let total = 0
    for (let av = 0; av < students.scores.length; av++) {
        total += students.scores[av]
    }
    })
    // let average = total / students.scores.length;
    // console.log(average)

    // let grade = ""
    // if (average > 85) {
    //     console.log("A+")
    // }
    // else if (average > 75) {
    //     console.log("A")
    // }
    // else if (average > 60) {
    //     console.log("B")
    // }
    // else if (average > 50) {
    //         console.log("C")
    // }
    // else if (average > 40) {
    //         console.log("F")
    // }



