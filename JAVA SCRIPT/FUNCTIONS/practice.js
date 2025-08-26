// ? FIND OUT THE NUMBER OF VOWELS IN THE STRING BY NORMAL FUNCTION
// ! let counting = 0;
// ! function count(string) {
// !     for (let char of string) {
// !         if (char === "a" ||
// !             char === "e" ||
// !             char === "i" || 
// !             char === "o" || 
// !             char === "u"
// !         ) {
// !             counting++
// !         }
// !     }
// !     console.log(counting);
// ! }
// ! count("abdul rafay")

// ? FIND OUT THE NUMBER OF VOWELS IN THE STRING BY ARROW FUNCTION
// ! let count = 0;
// ! const vowelscounting = (string) =>{
// !     for(let char of string){
// !         if(char === "a" ||
// !             char === "e" ||
// !             char === "i" || 
// !             char === "o" || 
// !             char === "u"
// !         ){
// !             count++
// !         }
// !     }
// !     console.log(count);
// ! } 
// ! vowelscounting("abdul rafay")

// ? FILTER OUT STUDENTS WHO HAVE 90+ MARKS
// ! marks = [78,89,56,12,48,89,90,98,99,10,100]
// ! let goodstudents = marks.filter((mark)=>{
// !    return mark >= 90;
// ! })
// ! console.log(goodstudents);

// ? TAKE A NUMBER AS INPUT FROM THE USER AND MAKE ARRAY FROM 1 TO INPUT NUMBER.THEN ADD ALL THE NUMBERS IN ARRAY AND ALSO MULTIPLIED THEM.
// ! let n = parseInt(prompt("ENTER NUMBER: ")); 
// ! array = [];
// ! for(let i = 1; i<=n;i++){
// !     array [i-1] = i
// ! }
// ! console.log(array);
// ! let add = array.reduce((pre,cur)=>{
// !     return pre + cur
// ! })
// ! console.log(`the addtiton of all number is ${add}`);
// ! let mul = array.reduce((pre,cur)=>{
// !     return pre * cur;
// ! })
// ! console.log(`the multiplication of all number is ${mul}`);