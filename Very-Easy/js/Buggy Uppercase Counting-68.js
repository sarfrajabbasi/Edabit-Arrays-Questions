function countUppercase(str){
let sum =0;
for(let i =0;i<str.length;i++){
    for(let j = 0;j<str[i].length;j++){
        if(str[i][j] === str[i][j].toUpperCase()){
            sum++;//6,0,5
        }
    }
}
return sum;


}
console.log(countUppercase(["SOLO", "hello", "Tea", "wHat"]), 6)
console.log(countUppercase(["little", "lower", "down"]), 0)
console.log(countUppercase(["EDAbit", "Educate", "Coding"]), 5)