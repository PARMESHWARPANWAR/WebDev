//fileSystem
//files->create,        read              update,            delete
//open -w,              readfileSync      appendFile         unlinkSync
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

//folders(directory)
//Create         read             delete
//mkdirSync      readdirSync      rmdirSync


// fs.mkdirSync("newFolder");

// fs.writeFileSync("newFolder/abc.txt","Meri New Files")

// let content = fs.readdirSync("newFolder");
// console.log(content);
// for(let i=0; i<content.length; i++){
//     console.log("file ",content[i] , "is removed");
//     //remove file
//     fs.unlinkSync("newFolder/" + content[i]);
// }

//remove folder
//fs.rmdirSync("newFolder");

//fs.existsSync -> If a file exist at a path -> true/false
// let doesPathExist = fs.existsSync("abc.txt");
// console.log(doesPathExist);
// doesPathExist = fs.existsSync("abcd.txt")
// console.log(doesPathExist);
//fs.lstatSync -> fs.lstatSync

// let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");
// let ans = detailsObj.isFile();
// console.log(ans);
// ans = detailsObj.isDirectory();
// console.log(ans);

//C:\Users\parme\OneDrive\Desktop\Projects\WebDev\NodeJsIntro\newFolder
//C:\Users\parme\OneDrive\Desktop\Projects\WebDev\NodeJsIntro\abc.txt

//Create 10 new folders and add readme for every Lector folder
for(let i = 1; i<10;i++){
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\" + "readme.md", `# readme for ${dirPathToMake}`);
}
