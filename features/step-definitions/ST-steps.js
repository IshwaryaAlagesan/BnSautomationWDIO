const { Given, When, Then } = require('@wdio/cucumber-framework');
const generatecase = require('./generateCSV.js')
const {execSync} = require('child_process')


Given(/^I launch the User portal with credentials$/, async () => {

    await browser.url('https://brisut-cleted-stg1.pega.net/prweb');
    await browser.setWindowSize(1920,1050)

    elem = await $('#sub')
    isExisting = await elem.isExisting()

    if(isExisting){
        await $("#sub").waitForDisplayed(5000);
        await $('#txtUserID').addValue("testadmin1")
        await $('#txtPassword').addValue("Secret@1111")
        await $('#sub').click();
        await $("//h3[@role='presentation'][normalize-space()='Favorites']").waitForDisplayed(5000);
    }

    
});

Then(/^I run the Process Ingest File activity$/, async () => {
  
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
    const filePath = './inputdata/Pega_NB_B&S_STW_01.csv'
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
    await browser.pause(5000);
    await browser.closeWindow();
    await browser.pause(2000);

    
    // Final Status page with success validation
    await browser.switchWindow("Status Page")
    await $("//h1[text()='Success']").waitForDisplayed(5000);
    await browser.closeWindow();

    await browser.switchWindow("Pega Dev Studio");
    await browser.pause(2000);
    

    // await browser.pause(5000);

 });

 Then(/^I run the ProcessUpdateIngestFile_VisionUpdate activity$/, async () => {
  
    await $("//h3[@role='presentation'][normalize-space()='Favorites']").click();

    
    await $("//input[@placeholder='Search favorites']").addValue("ProcessUpdateIngestFile_VisionUpdate")
    await browser.pause(1000);
    await browser.keys("Enter")
    await browser.pause(2000);
    
    // let clickBtn = await $("//span[@class='explorer_primary']");
    let clickBtn = await $("//div[contains(@data-click,'PROCESSUPDATEINGESTFILE_VISIONUPDATE')]/div/div")
    await browser.execute((el) => {el.click()}, clickBtn)

    await browser.pause(2000);

    let iframe = await browser.findElement('css selector', '#PegaGadget2Ifr')
    await browser.switchToFrame(iframe);
    await $("//h2[text()='Primary page']").waitForDisplayed(5000);
    await $("//button[text()='Actions']").click();

    clickBtn = await $("//ul//a[contains(.,'Run')]");
    await browser.execute((el) => {el.click()}, clickBtn)

    await browser.pause(2000);

    await browser.switchWindow("Simulate File Service Execution")
    await $("//button[@id='Execute']").waitForDisplayed(5000)

    await $("//input[@value='UploadFile']").click();
    const filePath = './inputdata/CSLEnforcementOnlyTransferUpUpdates_02.csv'
    const remoteFilePath = await browser.uploadFile(filePath)

    await $("//input[@name='fileUpload']").setValue(remoteFilePath)
    await browser.pause(1000);
    await $("//button[@id='Execute']").click();

    await browser.pause(5000);
    await browser.closeWindow();

    await browser.switchWindow("Service Simulation Results")
    await $("(//td[contains(text(),'Success')])[1]").isDisplayed();
    await browser.closeWindow();

    await browser.switchWindow("Pega Dev Studio")
    await $("//h3[@role='presentation'][normalize-space()='Favorites']").waitForDisplayed(5000);
    await browser.pause(5000);

 });

 Then('I run the ProcessWritConfirmation activity', async() => {

        await $("//h3[@role='presentation'][normalize-space()='Favorites']").click();

        // Open Create Collection Activity
        await $("//input[@placeholder='Search favorites']").setValue("ProcessWritConfirmation")
        await browser.pause(1000);
        await browser.keys("Enter")
        await browser.pause(2000);
        
        let clickcreateCollectionBtn = await $("//div[contains(@data-click,'PROCESSWRITCONFIRMATION')]/div/div");
        // let clickcreateCollectionBtn = await $("(//div[contains(@uniqueid,'yui-gen')]//div[contains(@data-context,'Declare_MyRulespzPersonalFavorites')])[1]")
        await browser.execute( (el) => {
           el.click()}, clickcreateCollectionBtn)
    
        await browser.pause(2000);
    
        iframe = await browser.findElement('css selector', '#PegaGadget3Ifr')
        await browser.switchToFrame(iframe);
        await $("//a[text()='ProcessWritConfirmation']").waitForDisplayed(5000);
    
        // Run the activity
        await $("//button[text()='Actions']").click();
        clickBtn = await $("//ul//a[contains(.,'Run')]");
        await browser.execute((el) => {
            el.click()}, clickBtn)
    
        await browser.pause(2000);
        await browser.switchWindow("Run")
        await browser.pause(2000);
        await $("//h2[text()='Run context']").waitForDisplayed(5000)
        await browser.pause(2000);
        // await browser.switchWindow("Status Page")
        // await $("//h1[text()='Success']").waitForDisplayed(5000);
        // await browser.closeWindow();
        await $("//button[contains(.,'Run')]").click();
        await browser.pause(5000);
        await browser.closeWindow();

 })


 Given(/^I generate pdf files after the Ingestion$/, async () => {
    execSync("npm run pdf-gen")
 });
 
