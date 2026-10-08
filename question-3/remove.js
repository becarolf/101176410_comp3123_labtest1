/* Q3: Create a script that will do the following:
    2. Remove Log files
      - remove all the files from the Logs directory, if exists
      - output the file names to delete
      - remove the Logs directory
*/

const fs = require("fs")

if(fs.existsSync("Logs")) {
  const files  = fs.readdirSync("Logs")

  files.forEach((file) => {
    fs.unlinkSync(`Logs/${file}`)
    console.log(`delete files...${file}`)
  })

  fs.rmdirSync("Logs")
}