let a = [1, 2, 3, 4]
let a1 = []
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    a1.push(element ** 2)

}
console.log(a1)


// the upper work can be done by using map function

let a2 = a.map((e) => {
    return e ** 2
})
console.log(a2)


// filter function
let b = [1, 2, 3, 4, 8, 9]
const gts = (e) => {
    if (e > 7) {
        return true
    }
    return false
}
console.log(b.filter(gts))

// we can also do this in shorter version
const c = [1, 2, 3, 8, 10, 6];
console.log(c.filter(e => e > 7));


// reduce funtion
// ye 2 2 numbers ko baari baari add krega phr result dega
let g = [1, 2, 3, 4, 5, 6]
const red = (a, b) => {
    return a + b
}
console.log(g.reduce(red))