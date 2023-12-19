Feature: ST Create Case Feature



@st1
Scenario: As a user, I create case thru File ingestion - part 1
  Given I launch the User portal with credentials
   Then I run the Process Ingest File activity
   And I run the ProcessUpdateIngestFile_VisionUpdate activity
   And I run the ProcessWritConfirmation activity


@gen-file-pdf
Scenario: As a user, I create pdfs after file ingestion
  Given I generate pdf files after the Ingestion

@st2
Scenario: As a user, I create case thru File ingestion - part 2
  Given I launch the User portal with credentials
  # Then I run the Process Ingest File activity
  And I run the ProcessUpdateIngestFile_VisionUpdate activity
  # And I run the ProcessWritConfirmation activity

  @st3
Scenario: As a user, I create case thru File ingestion - part 2
  Given I launch the User portal with credentials
  # Then I run the Process Ingest File activity
  # And I run the ProcessUpdateIngestFile_VisionUpdate activity
  And I run the ProcessWritConfirmation activity