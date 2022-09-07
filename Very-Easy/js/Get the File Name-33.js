function getFilename(path) {
	return path.split('/').pop();
}
// ************************************8
function getFilename(path){
    return path.match(/[^/]+$/)[0]
  }
// *******************************************
  const getFilename = p => p.split('/').slice(-1)[0]
// **************************************************
  function getFilename(path){
	let f=path.split("/");
	return f[f.length-1];
}
// *****************************************88
function getFilename(path){
	return path.split('/').reverse()[0]
	
}

console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"), "edabit.txt")
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"), "Beethoven_5.mp3")
console.log(getFilename("ffprobe.exe"), "ffprobe.exe")
console.log(getFilename("Music/Drafts/unfinished2.midi"), "unfinished2.midi")
console.log(getFilename("C:/Users/chad/OneDrive/Desktop/Atom.lnk"), "Atom.lnk")
console.log(getFilename("senoron/OneDrive/Desktop/DDLC-1.1.1-pc/lib/windows-i686/DDLC.exe"), "DDLC.exe")