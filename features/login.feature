Feature: Create Case Feature


@gen
Scenario: As a user, I generate Test data for Case Creation
  Given I generate Test data for 1 records

@ui
Scenario: As a user, I create case thru File ingestion
  Given I launch the User portal
  And I should enter username and password
  Then I should select the activity to create upload the file


@gen1
Scenario: As a user, I generate Test data for Case Creation
  Given I generate Test data for 30 records
  Then I see the test data generated in the csv file

@ui1
Scenario: As a user, I login, upload and Create case
  Given I launch the Pega Portal
  And I login to the application with proper username and password
  When I run the "ProcessIngestFile" activity to upload the csv file
  And I run the "CreateCase" activity to create the cases
  Then I should see the cases created successfully



