const students = [
  { name: "Ali", marks: [60, 70, 80] },
  { name: "Sara", marks: [30, 50, 40] },
  { name: "John", marks: [90, 95, 92] },
  { name: "Areeba", marks: [20, 35, 38] },
  { name: "Hamza", marks: [45, 55, 50] }
];

const pass = (students) => {
    for (let i = 0; i < students.marks.length; i++) {
        if(students.marks[i] <40){
            return false
        }        
    }
    return true
}
console.log(students.filter(pass))

const passed = students.filter(pass)
let avg = passed.map((students) => {
    let total = 0
        for (let av = 0; av < students.marks.length; av++) {
        total += students.marks[av]
    }
    let average = total / students.marks.length;
    console.log(average)

    let grade = ""
    if (average > 85) {
        grade = "A+"
    }
    else if (average > 75) {
    grade = "C"
    }
    else if (average > 60) {
    grade = "D"
    }
    else if (average > 50) {
        grade = "E"
    }
    else if (average > 40) {
        grade = "F"
    }
    
    return {
        name: students.name ,
        marks: students.marks ,
        average : average ,
        grade: grade
    }

})
console.log(avg)
