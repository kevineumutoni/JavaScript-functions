//THE FIRST QUESTION ON REVERSING ARRAY OF STRINGS

const { number } = require("yargs")

function stringsReverse(arr){
    let reversed = arr.map(u=> u.split("").reverse().join("")) 
    return reversed.sort()  
}
console.log(stringsReverse(["earth", "mercury", "venus", "pluto", "neptune"]))

//QUESTION 2 ON FINDING OUT IF THE NUMBER IS  POSITIVE AND NEGATIVE 
function isPositive(arr){
    let output = arr.map(m=> {
        if(m>0){
            console.log("It is positive")
        }
        else if(m<0){
            console.log("It is negative")
        }
        else{
            m= 0
            console.log("It is zero")
        }
    })
    return output

}
console.log(isPositive([2,4,5,6,7,0,-1,-4,-6,-5]))

//QUESTION 3 SORTING SALARY IN ASCENDING ORDER

function sortSalary(arr){
    return arr.sort((a, b)=> a.salary-b.salary)
}
console.log(sortSalary([
    {id:1, name:"Kevine", salary: 500},
    {id:2, name:"Umutoni", salary:1000},
    {id:3, name:"Lovelace", salary:200},
]))
//QUESTION 4

function multiplyByTwo(numbers){
    numbers.forEach(num=> console.log(num*2))

}
multiplyByTwo([2,4,3,5,6,7])

//QUESTION 5
function transformArray(arr){
    let newArray = []
    arr.forEach((num, i)=>{
        if(i<4){
            newArray.push(num*8)
        }
        else if(i>=arr.length -2){
            newArray.push(num+5)
        }
    };
    else{
        newArray.push(num)
    })
    console.log(newArray);
