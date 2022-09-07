function evenLast(numbers){
    let sum = 0;
    let lastNum = numbers[numbers.length-1];
 for(let i =0;i<numbers.length;i+=2){
    sum +=numbers[i];
 }
 if(lastNum === undefined){
    return 0
 }
 return sum *lastNum;
}

console.log(evenLast([2, 3, 4, 5]), 30)
console.log(evenLast([]), 0)
console.log(evenLast([2, 2, 2, 2]), 8)
console.log(evenLast([1, 3, 3, 1, 10]), 140)
console.log(evenLast([-11, 3, 3, 1, 10]), 20)
