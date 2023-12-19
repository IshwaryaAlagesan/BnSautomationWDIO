let fs = require("fs");
// GenerateTestData(2);


function GenerateTestData(count){
  let headers = ["Your Ref","Judgment Date","Claim Number","Court Costs","Enforcement Costs","Solicitor Costs","Claim Amount with Judgment Interest","Fixed Costs on Judgment","Interest post judgment","Execution Costs","Payments since Judgment","Balance for enforcement","Balance for interest calculation","Deductions since Judgment","Debtor Trading Name","Debtor PersonalAddr1","Debtor PersonalAddr2","Debtor PersonalAddr3","Debtor PersonalCounty","Debtor PersonalPostcode","Debtor1 Registered Office Address1","Debtor1 Registered Office Address2","Debtor1 Registered Office Address3","Debtor1 Registered Office AddressCounty","Debtor1 Registered Office AddressPostcode","Telephone","Mobile","Debtor1EmailAddress","Debtor1 Fax","Judgment debtor2 Name","debtor2 PersonalAddr1","debtor2 PersonalAddr2","debtor2 PersonalAddr3","debtor2 PersonalCounty","debtor2 PersonalPostcode","debtor2 Registered Office Address1","debtor2 Registered Office Address2","debtor2 Registered Office Address3","debtor2 Registered Office AddressCounty","debtor2 Registered Office AddressPostcode","debtor2 Telephone","debtor2 Mobile","debtor2EmailAddress","debtor2 Fax","Court","Notes","Claimant","Creditor Title","Creditor Initial","Creditor Surname","Creditor PersonalAddr1","Creditor PersonalAddr2","Creditor PersonalAddr3","Creditor PersonalCounty","Creditor PersonalPostcode","Account Number","Supply Period","Interest Rate","VAT Status","VAT Accounting TreatmentClient"].join(",");
  let row2    = ["964265","24/09/2020","AUTOTEST","115","71","102","7000","217","0","51.75","0","8339.75","8339.75","0","Test Auto","2 hodge Avenue","Brod Lane","Swindon","England","SN1 7BX","6 Linalls Drive"," North Park Lane"," Godstone","","RH9 8ND","07456734523","07456734523","pearl.p@outlook.com","7456734523","Nick Paul","2 Irving House"," Handel Avenue"," Port Talbot","","SA12 7TD","20 Statham Avenue"," New Tupton","","","S42 6YF","07456734523","07456734523","nick.p@outlook.com","118977842","County Court Bulk Centre","\"Sheriff instructed (Marstons).HCE FEES added (Solicitor costs: 51.75 , Lodgment Fee: 71, High Court Transfer Fee: 45).Additional notes:\"","So Energy Trading Limited","","","","1st Floor","107 Power Road","London","","W4 5PY","124567","Gas: 31/07/2021 - 05/08/2021 Electricity:31/07/2021 - 05/08/2021","8","Yes","Gross"]

  let ClaimNumber = "AUTOTEST"
  let DebtorName = "Test Auto"

  let writeStream = headers;

  // count = 3


  const filepath = './inputdata/myData.json';
  const data = JSON.parse(fs.readFileSync(filepath));
  // console.log(data.ID);
  // console.log(data.RefNumber);
  
  for(i=1;i<=count;i++){
    AddressList = getAddress();
      row2[0]=data.RefNumber
      row2[2]=ClaimNumber+data.ID
      row2[55]=data.AccountNumber
      row2[14]=AddressList[0] + " " + AddressList[1];
      row2[15]=AddressList[3]; //Address Line 1
      row2[16]=AddressList[4];
      row2[17]=AddressList[5];
      row2[18]=AddressList[6];
      row2[19]=AddressList[7]; // postcode
      row2[27]=AddressList[2]; // Email Address
      
      data.ID =data.ID + 1;
      data.RefNumber =data.RefNumber + 1;
      data.AccountNumber=data.AccountNumber + 1;
      let row3    = row2.join(",");    
      writeStream = writeStream + "\r\n" + row3;
  }

  fs.writeFileSync(filepath, JSON.stringify(data, null, 4));
  fs.writeFile("./inputdata/CreateCase_V1.csv", writeStream,(err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully");
      }
  });

}

function getAddress(){
  try {
      const data = fs.readFileSync("./inputdata/address.json", "utf8");
      const data2 = fs.readFileSync("./inputdata/address-area.json", "utf8");
      var address_Array = [];
      address_Array.push(JSON.parse(data)[Math.floor(Math.random()*2000)].Name);
      address_Array.push(JSON.parse(data)[Math.floor(Math.random()*2000)].Name);
      address_Array.push(JSON.parse(data)[Math.floor(Math.random()*2000)].Email);
      address_Array.push(JSON.parse(data)[Math.floor(Math.random()*2000)].FirstLineAddress_1); // 2000 is the count in the address json file
      address_Array.push(JSON.parse(data2)[Math.floor(Math.random()*2855)].town); // 2855 is the count in the address json file
      address_Array.push(JSON.parse(data2)[Math.floor(Math.random()*2855)].City);
      address_Array.push(JSON.parse(data2)[Math.floor(Math.random()*2855)].Country);
      address_Array.push(JSON.parse(data2)[Math.floor(Math.random()*2855)].PostCode);
      return (address_Array)
      
  } catch (err) {
      console.error(err);
  }
}


module.exports ={ GenerateTestData}