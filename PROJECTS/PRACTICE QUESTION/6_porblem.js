const students = [
    { name: "Ali", scores: [80, 90, 85] },
    { name: "Sara", scores: [95, 92, 88] },
    { name: "Umar", scores: [50, 60, 65] },
    { name: "Hina", scores: [70, 75, 72] }
];

const pass = ((students) => {
    for (let i = 0; i < students.scores.length; i++) {
        if (students.scores[i] < 40) {
            return false
        }
    }
    return true
})
console.log(students.filter(pass)
);

const passed = students.filter(pass)
let avg = passed.map((students) => {
    let total = 0
    for (let a = 0; a < students.scores.length; a++) {
        total += students.scores[a]
    }
    let average = total/ students.scores.length
    console.log(average);
    

    return{
        name : students.name,
        scores: students.scores,
        average: average
    }
})
