//fileSystem
//files->create, read update, delete
let fs = require('fs');
//read 
// let buffer = fs.readFileSync("abc.js");
// console.log("bin data "+buffer);
//Create a new file
// fs.openSync("abc.txt", "w");

//no file -> create a new file and file exists -> content replace
// fs.writeFileSync("abc.txt","Hum aaj khush hai");

//update
// fs.appendFileSync("abc.txt","Bhai kha pr hai abhi");

//folders
//Create directory
// fs.mkdirSync("newFolder");

// fs.writeFileSync("newFolder/abc.txt","Meri New Files")

let content = fs.readdirSync("newFolder");
console.log(content);
for(let i=0; i<content.length; i++){
    console.log("file ",content[i] , "is removed");
    fs.unlinkSync("newFolder/" + content[i]);
}
