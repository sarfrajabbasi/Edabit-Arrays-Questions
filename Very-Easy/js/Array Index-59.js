function arrIndex(arr, idx) {
	let a =arr.flat();
    let res = [];
    for(let i = 0; i< a.length;i++){
        if(idx.includes(i + 1)){
            res.push(a[i]);
        }
    }
    return res.join('')
}
// ****************************************

function arrIndex(arr, idx){
    let tempStr = '',
      flatArr = arr.flat();
    for (let i = 0; i < idx.length; i++) {
      tempStr += flatArr[idx[i] - 1];
    }
    return tempStr;
  }
//   *******************************************
function arrIndex(arr, idx){
    let l = arr[0].concat(arr[1]).concat(arr[2])
    let s = ""
    for (let i = 0; i < l.length; i++){
      if (idx.includes(i+1)){
        s += l[i]
      }
    }
    return s
  }
results1 = arrIndex([['m', 'u', 'b'], ['a', 's', 'h'], ['i', 'r', '1']],  [1, 3, 5, 8])
console.log(results1, 'mbsr')
results1 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(results1, 'myexample')
results2 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6])
console.log(results2, 'mam')
results3 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8])
console.log(results3, 'mepl')
//Mubashir