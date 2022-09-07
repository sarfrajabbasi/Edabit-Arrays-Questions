function nthSmallest(arr,n){ 
 let sortArr = arr.sort();
 return sortArr[n-1] || null;
}
function nthSmallest(arr,n){ 
 n > arr.length ? null : arr.sort((a,b) => a-b)[n-1]
}
function nthSmallest(arr,n){ 
 let sortArr = arr.sort();
 return sortArr[n-1] || null;
}
function nthSmallest(arr,n){ 
 return arr.sort()[n-1] || null;
 
}
function nthSmallest(arr,n){ 
 return arr.sort()[--n] || null; 
 
}

function nthSmallest(arr,n){ 
 if(n>arr.length){
  return null;
 }else{
  return arr.sort((a,b)=> a-b)[n-1];
 }
 
}
function nthSmallest(arr, n) {
	arr.sort();
	return typeof(arr[n-1]) === 'undefined' ? null : arr[n-1];
}
function nthSmallest(arr, n) {
	return n>arr.length || n<1 ? null : arr.sort()[n-1]
}
console.log(nthSmallest([1, 3, 5, 7], 1), 1)
console.log(nthSmallest([1, 3, 5, 7], 3), 5)
console.log(nthSmallest([1, 3, 5, 7], 5), null)
console.log(nthSmallest([7, 3, 5, 1], 2), 3)
console.log(nthSmallest([5, 4, 3, 2, 1, -3], 1), -3)
console.log(nthSmallest([5, 4, 3, 2, 1, -3], 5), 4)
console.log(nthSmallest([4, 5], 3), null)
console.log(nthSmallest([4, 5], 2), 5)
console.log(nthSmallest([4, 5], 1), 4)