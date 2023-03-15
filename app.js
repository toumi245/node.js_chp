//console.log("starting app.js")


const fs=require("fs");
const notes=require("./notes.js");
const yargs=require('yargs')

var title=yargs.argv.title
var body=yargs.argv.body;


var command=yargs.argv._[0]

console.log(body)
if (command ==="add" ){
console.log("adding node")
 notes.addingNote(title,body)
}
else if(command==="remove"){
    notes.removeNote(title)
    console.log("remove note")
}else if(command === "read")
{
    notes.readNote(title)
    console.log("reading note")
}else if(command==="list"){
    notes.noteList()
    console.log("list notes")
}else{
    console.log("inknown command")
}