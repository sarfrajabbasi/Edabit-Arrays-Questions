// Fix this code

function checkEquals(arr1, arr2) {
    if (arr1.every(x=> arr2.includes(x))) {
      return true
     } else {
      return false
     }
  }

// JavaScript
// test cases
let actual = [checkEquals([1, 2], [1, 2]), checkEquals([1, 2], [1, 3]), 
						 checkEquals([11, 2], [1, 12]), checkEquals([34, 56, 98], [34, 56, 98]),
						 checkEquals([1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7], [11, 12, 13, 14, 15, 16, 17]),
						 checkEquals([11, 12, 15, 16, 19], [11, 13, 15, 1, 6, 19, 20]), 
							checkEquals([11, 12, 13, 14, 15, 16], [11, 12, 13, 14, 15, 16]), checkEquals([123, 45, 6, 78, 90], [1234, 5678, 90]),
						 checkEquals([23, 26, 78, 934], [94, 26, 78, 934]), checkEquals([], []),
						 checkEquals([9, 87, 1, 23], [98, 7, 12, 3])]

// results
let expected = [true, false, false, true, false, false, true, false, false, true, false]

// messages
let message = ["", "", "Are you sure this is true?", "", "Should return false", "", "", "", "", "", ""]

// run tests
for (i in actual){
	console.log(actual[i], expected[i], message[i])
}