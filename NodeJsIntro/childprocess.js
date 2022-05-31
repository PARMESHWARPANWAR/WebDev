let cp = require('child_process');
// console.log("Trying to open calculator");
// cp.execSync("calc");
// cp.execSync("code");
// console.log("opened calculator");

// console.log("Trying to open website");
// cp.execSync("start chrome https:\\www.youtube.com");
// console.log("opened websilte");

let output = cp.execSync("node abc.js");
console.log("output 🔥 "+output);


