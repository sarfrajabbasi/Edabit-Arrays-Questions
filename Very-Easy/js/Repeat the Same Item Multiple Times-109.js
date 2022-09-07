function repeat(item,times){
   let arr =  Array(times).fill(item,0)
   return arr
}
function repeat(item,times){
    let arr = [];
    for(let i=0;i<times;i++){
        arr.push(item)
    }
    return arr
}
function repeat(item,times){
    let arr = Array();
    for(let i=0;i<times;i++){
        arr.push(item)
    }
    return arr
}
console.log(repeat("edabit", 3), ["edabit", "edabit", "edabit"]);
console.log(repeat(13, 5), [13, 13, 13, 13, 13]);
console.log(repeat("7", 2),  ["7", "7"]);
console.log(repeat("2 0 1 8", 1), ["2 0 1 8"]);
console.log(repeat("tom dick and harry", 6), ["tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry"]);
console.log(repeat(0, 1), [0]);
console.log(repeat(0, 0), []);
console.log(repeat("z", 0), []);