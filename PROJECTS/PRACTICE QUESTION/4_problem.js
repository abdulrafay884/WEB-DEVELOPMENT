const movies = [
  { title: "Avengers", rating: 9 },
  { title: "The Room", rating: 3 },
  { title: "Inception", rating: 8.5 },
  { title: "Cats", rating: 2 },
  { title: "Interstellar", rating: 9.2 },
  { title: "Frozen", rating: 5.5 },
  { title: "Fast & Furious", rating: 7 }
];

const rating = (movies) => {
    if(movies.rating < 5) {
        return false
    }
    return true
}
console.log(movies.filter(rating))

const review = movies.filter(rating)
let g = ""
let grade = review.map((movies) => {
    if(movies.rating >= 9) {
        g = "Excellent"
    }
    else if (movies.rating >= 8){
        g = "Good"
    }
    else if (movies.rating >= 7){
        g = "Average"
    }
    else if (movies.rating >= 6){
        g = "Ok"
    }
    else if (movies.rating >= 5){
        g = "Not Recommended"
    }

    return {
        name : movies.title , 
        rating : movies.rating ,
        grade : g
    }
})
console.log(grade)
