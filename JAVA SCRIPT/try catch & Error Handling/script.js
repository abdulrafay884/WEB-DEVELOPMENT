function add(a,b) {
    a = prompt("entet number")
    b = prompt("entet number")
    if(isNaN(a) || isNaN(b)){
        throw SyntaxError("sorry not allowed")
    }
    return parseInt(a) + parseInt(b)
    sum = a + b
}

function main() {
    
    try {
        
        console.log('the sum is ' ,add()+ x);
        return true
    } catch (error) {
        console.log('the sum is ' ,add());
        console.log('bach gaye error se!!');
        return false
    }
    finally{
        console.log('closing!!');
        
    }
}
let d = main()
