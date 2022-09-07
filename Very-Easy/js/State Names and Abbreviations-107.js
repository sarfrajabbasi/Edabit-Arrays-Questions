function filterStateNames(arr,type){
    let a =[]
    for(let i=0;i<arr.length;i++){
        if( type ==="abb"){
            if(arr[i].length < type.length){
                a.push(arr[i])
            }
        }else if(type ==="full"){ 
        
        if(arr[i].length >2){ 
            a.push(arr[i])
        }
    }
    }
    return a
}

function filterStateNames(arr,type){
    return arr.filter(v=> type==="abbb"? v.length <type.length : v.length >2)
}

console.log(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'abb'), ['CA', 'NY'])
console.log(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'full'), ['Arizona', 'Nevada'])
console.log(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'abb'), ['MT', 'NJ', 'TX', 'ID', 'IL'])
console.log(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'full'), [])
console.log(filterStateNames(['Montana', 'FL'], 'abb'), ['FL'])
console.log(filterStateNames(['Montana', 'FL'], 'full'), ['Montana'])