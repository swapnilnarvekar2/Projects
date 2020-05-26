@Smoke @Regression @DealTest
Feature: Creating deals functionality in CRM Application

@Regression
Scenario: Navigating to deals page
  Given User is on login page
  When user enters valid username and valid password
    |swapnilnarvekar2@gmail.com|Swapnil@5895|
  And clicks on Login button
  Then user gets logged in and populated with username
  When user clicks on Deals tab
  Then user get navigated to deals page
  Then close the browser

@Smoke
Scenario: Create deal in CRM Application
  Given User is on login page
  When user enters valid username and valid password
    |swapnilnarvekar2@gmail.com|Swapnil@5895|
  And clicks on Login button
  Then user gets logged in and populated with username
  When user navigates to deals page by clcking on deals tab
  Then user clicks on New button to create new deal
  And fill deal details and clicks on Save button
  |TestDeal|2000|New|
  Then verify deals gets created on deals dashboard page
  Then close the browser