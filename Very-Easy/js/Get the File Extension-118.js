function getExtension(arr){
let a = []
for(let i=0;i<arr.length;i++){
    a.push(arr[i].split(".").pop())
}
return a
}
function getExtension(arr){
    return arr.map(x=> x.split(".")[1])
}

function getExtension(arr){
    return arr.map(x=> x.slice(x.indexOf(".")+1))
}

function getExtension(arr){
    for( i in arr){
       arr[i] = arr[i].slice(arr[i].indexOf(".")+1)
    }
    return arr
}
function getExtension(arr){
   return arr.map(file => file.substr(file.lastIndexOf(".")+1))
}
function getExtension(arr){
    return arr.map(name => name.match(/\.\w*/)[0].slice(1));
}



console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]), ["jpg", "pdf", "mp3"])
console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]), ["rb", "cpp", "py", "js"])
console.log(getExtension(["code.html", "code.css"]), ["html", "css"])
console.log(getExtension(["minesweeper.java", "game.java", "my_project.java"]), ["java", "java", "java"])