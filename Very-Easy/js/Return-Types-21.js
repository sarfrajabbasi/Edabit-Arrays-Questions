function arrayValuesTypes(arr) {
	var arrType = arr.map(x => typeof(x))
    return arrType;
}

console.log(arrayValuesTypes([1, 10]), ['number', 'number']);
console.log(arrayValuesTypes([["hello" , 1]  , 10]), ['object', 'number']);
console.log(arrayValuesTypes(["shashwat", 10, 90]), ['string', 'number', 'number']);
console.log(arrayValuesTypes([[], true]), ['object', 'boolean']);
console.log(arrayValuesTypes([false, false, "true"]), ['boolean', 'boolean', "string"]);
console.log(arrayValuesTypes([1, 10]), ['number', 'number']);
console.log(arrayValuesTypes([undefined, null]), ['undefined', 'object']);
console.log(arrayValuesTypes([function(){let x =10;}, 10]), ['function', 'number']);

/* 
  Shashwat Verma twitter/zippytyro
	10 tests to pass in total
*/