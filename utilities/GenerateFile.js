const fs = require('fs')
const path = require('path')

var FILENAME = "./utilities/writscanref.csv";
const outputDirectory = "./utilities/out/";
const csvFileNameColumn = 1

fs.readdir(outputDirectory, (err,files)=>{
    if(err) throw err;
    for (const file of files){
        fs.unlink(path.join(outputDirectory, file), (err) =>{
            if(err) throw err;
        });
    }
});

fs.readFile(FILENAME, "UTF8", function(err,data){
    if(err) {throw err;}
    csvJSON(data);
})

function csvJSON(csv){
    console.log("csv JSON Function - started...");
    var lines = String(csv).split(/\r?\n/);
    for(var i=1; i< lines.length;i++){
        var currentline = lines[i].split(",");
        if(currentline!=''){
            newFileName = currentline[csvFileNameColumn-1] + ';'+currentline[csvFileNameColumn-1]+'.pdf'
            console.log(newFileName);
            fs.copyFile('./utilities/in/source.pdf','./utilities/out/S30C-' + newFileName, (err) =>{
                if(err) throw err;
            })
        }
    }
    console.log("csv JSON Function - Ended...");
}
