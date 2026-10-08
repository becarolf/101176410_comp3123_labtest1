/* Q3: Create a script that will do the following:
    2. Create Log files
      - create a Logs directory, if it does not exist
      - change the current process to the new Logs directory
      - create 10 log files and write some text into the file
      - output the files names to console
*/

const fs = require("fs")

// creating the folder Logs if it doesn't exists
if(!fs.existsSync("Logs")) {
  fs.mkdirSync("Logs")
}

process.chdir("Logs")
// creating the 10 log files
for(let i = 0; i < 10; i++){
  let fileName = `log${i}.text`;

  fs.writeFileSync(fileName, `Hey, I'm log file ${i}`)
  console.log(fileName)
}
