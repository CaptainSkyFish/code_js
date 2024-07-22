/*  Read a file, remove all the extra spaces and write it back to the same file.
For example, if the file input was:
hello     world    my    name   is       raman

After the program runs, the output should be
hello world my name is raman    */

const fs = require("fs");

fs.readFile("cleanMe.txt", "utf8", (err, data) =>{
    if(err){
        console.log("error loading:\n");
        throw(err);
    }
    const cleanString = data.replace(/\s+/g, " ");
    console.log("the cleaned string is:\n"+ cleanString +"\nWriting to file....\n");

    fs.writeFile(
        "cleanMe.txt", cleanString, "utf8", (err)=>{
            if(err) throw err;
            console.log("file written");
        });
});