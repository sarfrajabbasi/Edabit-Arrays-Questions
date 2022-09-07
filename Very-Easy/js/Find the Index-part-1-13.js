function search(arr,i){
    return arr.findIndex(x => x==i)
    }
    
    console.log(search([1, 5, 3], 5), 1)
    console.log(search([9, 8, 3], 3), 2)
    console.log(search([1, 2, 3], 4), -1)
    console.log(search([1, 5, 3, 10, 17, 20, -6], 20), 5)