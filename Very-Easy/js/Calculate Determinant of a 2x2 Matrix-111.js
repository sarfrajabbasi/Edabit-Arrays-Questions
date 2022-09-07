function calcDeterminant(matrix){
    return matrix[0][0] *matrix[1][1] - matrix[0][1] *matrix[1][0]
}
function calcDeterminant(matrix){
    let a =  matrix[0][0] 
    let b = matrix[0][1] 
    let c  =matrix[1][0]
   let d =  matrix[1][1] 
   return a*d-b*c
}

function calcDeterminant(matrix){
    let [a,b,c,d] = [matrix[0][0],matrix[0][1],matrix[1][0],matrix[1][1]]

   return a*d-b*c
}
console.log(calcDeterminant([

	[1, 2],
	[3, 4]
]), -2)

console.log(calcDeterminant([
	[5, 3],
	[3, 1]
]), -4)

console.log(calcDeterminant([
	[1, 1],
	[1, 1]
]), 0)

console.log(calcDeterminant([
	[1, 1],
	[1, 0]
]), -1)