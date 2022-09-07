function makeRug(m,n,s = '#'){
    const result = [];
    for(let i = 1; i<= m; i++){
        let row = s;
        for(let j = 1; j< n; j++){
            row = row + s;
        }
        result.push(row);
        row = "";
    }
    return result;
}

console.log(makeRug(3, 5), [
	"#####", 
	"#####", 
	"#####"
])

console.log(makeRug(3, 5, '$'), [
	"$$$$$", 
	"$$$$$", 
	"$$$$$"
])

console.log(makeRug(2, 2, 'A'), [
	"AA",
	"AA"
])

console.log(makeRug(3, 1, 'b'), [
	"b", 
	"b", 
	"b"
])

console.log(makeRug(2, 1, 'bcb'), [
	"bcb", 
	"bcb"
])