function findBob(names){
    // let findBobs = names.findIndex(x => x === "Bob");
    // return findBobs;
   let a;
   let find = x => (x==="Bob")? x : -1
   for(let i=0;i<names.length;i++){
    a = find(i)

   } 
   return a;

}
console.log(findBob(["Jimmy", "Layla", "Mandy"]), -1)
console.log(findBob(["Bob", "Nathan", "Hayden"]), 0)
console.log(findBob(["Paul", "Layla", "Bob"]), 2)
console.log(findBob(["Garry", "Maria", "Bethany", "Bob", "Pauline"]), 3)