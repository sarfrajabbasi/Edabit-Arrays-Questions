function ageDifference(ages){
   const arr = ages.sort((a,b)=>b-a);
   console.log(arr);
   if(arr[0]-arr[1] === 0){
    return "No age difference between spouses."
   }else{
     const arr2 =  arr[0]-arr[1] 
     return `${arr2} years`;
   }
  
}

console.log(ageDifference([29, 1, 6, 8, 28]), "1 year")
console.log(ageDifference([43, 86, 49, 86]), "No age difference between spouses.")
console.log(ageDifference([2, 4, 6, 32, 27]), "5 years")
console.log(ageDifference([55, 28, 25, 56, 20]), "1 year")
console.log(ageDifference([21, 56, 69, 18]), "13 years")
console.log(ageDifference([25, 70, 25, 26, 58]), "12 years")
console.log(ageDifference([10, 12, 44, 9, 44]), "No age difference between spouses.")