function formatDate(date){
    let str = ""
    let a =  date.split("")
    for(let i=0;i<a.length;i++){
        if(a[i] !== "/"){
            str += a[i]
        }
    }
    return str.slice(4) + str.slice(2,4) +str.slice(0,2)
}
function formatDate(date){
    let str ="";
    let a = date.replaceAll("/","")
    return a.slice(4) + a.slice(2,4) + a.slice(0,2)
}
console.log(formatDate("11/12/2019"),"20191211")
console.log(formatDate("12/31/2019"), "20193112")
console.log(formatDate("01/15/2019"), "20191501")