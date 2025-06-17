//Calculate sum of numbers from 1 to 100 then print the result

let x = 1
let sum = 0
while(x <= 100){
    console.log(x) // 1-100
    sum = sum + x 
    // 0 = 0 + 1
    // 1 = 1 + 2
    // 3 = 3 + 3
    // 6 = 6 + 4
    // 10= 10 + 5
    // 15= 15 + 6
    // 21=21+7
    x = x + 1
}
console.log(sum); //5050
