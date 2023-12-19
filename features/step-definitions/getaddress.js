const fs = require('fs');

getAddress()


function getAddress(){
    try {
        const data = fs.readFileSync("./inputdata/address.json", "utf8");
        const data2 = fs.readFileSync("./inputdata/address-area.json", "utf8");
        console.log(JSON.parse(data)[Math.floor(Math.random()*2000)].Name);
        console.log(JSON.parse(data)[Math.floor(Math.random()*2000)].Name);
        console.log(JSON.parse(data)[Math.floor(Math.random()*2000)].Email);
        console.log(JSON.parse(data)[Math.floor(Math.random()*2000)].FirstLineAddress_1); // 2000 is the count in the address json file
        console.log(JSON.parse(data2)[Math.floor(Math.random()*2855)].town); // 2855 is the count in the address json file
        console.log(JSON.parse(data2)[Math.floor(Math.random()*2855)].City);
        console.log(JSON.parse(data2)[Math.floor(Math.random()*2855)].Country);
        console.log(JSON.parse(data2)[Math.floor(Math.random()*2855)].PostCode);
        
    } catch (err) {
        console.error(err);
    }
}

module.exports = getAddress()