function determineLever(arr){
if(arr[0] === 'e'){
    if(arr[2]==='l'){
        return "first class lever"
    }else{
        return"second class lever"
    }
}else{
    return "third class lever"
}


}

function determineLever(arr) {
	return arr[1] == 'f' ? 'first class lever' : 
				 arr[2] == 'f' ? 'second class lever' :
				 'third class lever';
	}

const determineLever = arr =>
	['third', 'first', 'second'][arr.indexOf('f')] + ' class lever';

console.log(determineLever(["e", "f", "l"]), "first class lever")
console.log(determineLever(["e", "l", "f"]), "second class lever")
console.log(determineLever(["f", "e", "l"]), "third class lever")

// Author: comecheckoutmycode