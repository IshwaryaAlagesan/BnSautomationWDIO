# BnS Test Automation - BDD Framework

#### UI Test Automation Framework:  Cucumber & Mocha-style features/scenarios

## Get Started

Step 1: download the Repo

```
git clone https://automation0219@dev.azure.com/automation0219/CEDR_Watrs_BBRS/_git/CEDR_Watrs_BBRS
```

Step 2: install npm dependencies
```
npm install
```

Step 3: Run the Test @tag use respective tag what you want to run the tests
```
npm run test:grep '@E2EFeature-Sc3.11'

[or]
npx codeceptjs run --steps --grep "@BBRSE2E_"

[or]

npx codeceptjs run --steps --grep "@E2EFeature-Sc3."
```

step 4: See Allure Test Report
```
npm install -g allure-commandline --save-dev  <<one time install>>

allure serve output
```

Git commants:
 git add .
 git commit -m 'message'
 git push

 latest code pull local:
  git pull

 

Automation INstallation:
    VS code, Node.js, JAVA

 file :
    URL change- codecept.conf.js
    To run particular case id update case id in-data\ BBRSdata.json and myjsonfile.json for watrs

  