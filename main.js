const fs = require('fs');

function printFileContents(filePath) {
  // TODO: Use fs.readFile to read the file contents
  fs.readFile(filePath, 'utf-8', (err,data)=>{
    if(err){
      console.error(`Error: Unable to read the file at path "${filePath}".`);
      return;
    }
    console.log(data);
  })
}


// TODO: Call printFileContents with the command-line argument
const filePath = process.argv[2];
if (!filePath) {
  console.error("Error: Please provide a valid file path as a command-line argument.");
  process.exit(1);
}

printFileContents(filePath);