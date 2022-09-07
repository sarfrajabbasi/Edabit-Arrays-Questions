function firstAndLast(s){
    let sortW = s.split("");
    let first =  sortW.sort().join("")
    let last =  sortW.sort().reverse().join("")
    return [first,last]
}
function firstAndLast(s){
    let first = s.split("").sort().join("")
    let last =  s.split("").reverse().join("")
    return [first,last]
}
console.log(firstAndLast("marmite"), ["aeimmrt", "trmmiea"])
console.log(firstAndLast("bench"), ["bcehn", "nhecb"])
console.log(firstAndLast("scoop"), ["coops", "spooc"])
console.log(firstAndLast("fanatic"), ["aacfint", "tnifcaa"])