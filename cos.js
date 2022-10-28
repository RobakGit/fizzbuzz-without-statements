const fizzBuzzArray = []
const multiplesOfThree = []
const multiplesOfFive = []
const multiplesOfBoth = []
let iterator = 3

for(let i = 0; i <= 100; i++){
    fizzBuzzArray.push(i)
}

while(iterator < 100){
    multiplesOfThree.push(iterator)
    iterator += 3
}

iterator = 5
while(iterator < 100){
    multiplesOfFive.push(iterator)
    iterator += 5
}

iterator = 15
while(multiplesOfBoth < 100){
    multiplesOfBoth.push(iterator)
    iterator += 15
}

multiplesOfThree.forEach(el => {
    fizzBuzzArray[el] = "Fizz"
})

multiplesOfFive.forEach(el => {
    fizzBuzzArray[el] = "Buzz"
})

multiplesOfBoth.forEach(el => {
    fizzBuzzArray[el] = "FizzBuzz"
})

console.log(fizzBuzzArray)