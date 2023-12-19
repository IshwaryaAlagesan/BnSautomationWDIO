const { Given, When, Then } = require('@wdio/cucumber-framework');
const generatecase = require('./generateCSV.js')


Given(/^I launch the User portal$/, async () => {
    await browser.url('https://brisut-cleted-stg1.pega.net/prweb');
    await browser.setWindowSize(1920,1050)
    await $("#sub").waitForDisplayed(5000);

});


Then(/^I should enter username and password$/, async () => {
   await $('#txtUserID').addValue("testadmin1")
   await $('#txtPassword').addValue("Secret@11")
   await $('#sub').click();
   await $("//h3[@role='presentation'][normalize-space()='Favorites']").waitForDisplayed(5000);

    
});

Then(/^I should select the activity to create upload the file$/, async () => {
  
    await $("//h3[@role='presentation'][normalize-space()='Favorites']").click();

    
    await $("//input[@placeholder='Search favorites']").addValue("ProcessingestFile")
    await browser.pause(1000);
    await browser.keys("Enter")
    await browser.pause(2000);
    
    // let clickBtn = await $("//span[@class='explorer_primary']");
    let clickBtn = await $("//div[contains(@data-click,'PROCESSINGESTFILE')]/div/div")
    // let clickBtn = await $("//div[@name='BASE_REF'][@role='row']/div/div")
    await browser.execute((el) => {
        el.click()}, clickBtn)

    await browser.pause(2000);

    let iframe = await browser.findElement('css selector', '#PegaGadget0Ifr')
    await browser.switchToFrame(iframe);
    await $("//h2[text()='Primary page']").waitForDisplayed(5000);
    await $("//button[text()='Actions']").click();

    clickBtn = await $("//ul//a[contains(.,'Run')]");
    await browser.execute((el) => {
        el.click()}, clickBtn)

    await browser.pause(1000);

    await browser.switchWindow("Simulate File Service Execution")
    await $("//button[@id='Execute']").waitForDisplayed(5000)

    await $("//input[@value='UploadFile']").click();
    const filePath = './inputdata/CreateCase_V1.csv'
    const remoteFilePath = await browser.uploadFile(filePath)

    await $("//input[@name='fileUpload']").setValue(remoteFilePath)
    await browser.pause(1000);
    await $("//button[@id='Execute']").click();

    await browser.pause(1000);
    await browser.closeWindow();

    await browser.switchWindow("Service Simulation Results")
    await $("(//td[contains(text(),'Success')])[1]").isDisplayed();
    await browser.closeWindow();

    await browser.switchWindow("Pega Dev Studio")
    await $("//h3[@role='presentation'][normalize-space()='Favorites']").waitForDisplayed(5000);    

    
    // Open Create Collection Activity
    await $("//input[@placeholder='Search favorites']").setValue("CreateCollectionCaseWrapper")
    await browser.pause(1000);
    await browser.keys("Enter")
    await browser.pause(2000);
    
    let clickcreateCollectionBtn = await $("//div[contains(@data-click,'CREATECOLLECTIONCASEWRAPPER')]/div/div");
    // let clickcreateCollectionBtn = await $("(//div[contains(@uniqueid,'yui-gen')]//div[contains(@data-context,'Declare_MyRulespzPersonalFavorites')])[1]")
    await browser.execute( (el) => {
       el.click()}, clickcreateCollectionBtn)

    await browser.pause(2000);

    iframe = await browser.findElement('css selector', '#PegaGadget1Ifr')
    await browser.switchToFrame(iframe);
    await $("//a[text()='CreateCollectionCaseWrapper']").waitForDisplayed();

    // Run the activity
    await $("//button[text()='Actions']").click();
    clickBtn = await $("//ul//a[contains(.,'Run')]");
    await browser.execute((el) => {
        el.click()}, clickBtn)

    await browser.switchWindow("Run")
    await $("//h2[text()='Run context']").waitForDisplayed(5000)
    await $("//button[contains(.,'Run')]").click();
    await browser.pause(3000);
    await browser.closeWindow();
    // await browser.pause(3000);

    
    // Final Status page with success validation
    // await browser.switchWindow("Status Page")
    // await $("//h1[text()='Success']").waitForDisplayed(5000);
    // await browser.closeWindow();


    // await browser.pause(5000);

 });

Given("I generate Test data for {int} records",(count)=>{
    generatecase.GenerateTestData(count)
})
