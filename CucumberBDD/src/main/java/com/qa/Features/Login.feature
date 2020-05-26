@Regression @Smoke @LoginTest
Feature: CRM Application login functionality

@Smoke @ValidLogin
Scenario: CRM application login with valid username and valid password
    Given user opens browser
    Then user is on login page
    When user enters valid username and valid password and clicks on Login button
    Then homepage gets displayed
    And verify username
    And verify homepage tab displayed

@Regression @InvalidLogin
Scenario Outline: CRM application login with invalid credentials
    Given User opens browser
    Then user is on login page
    When user enters invalid "<username>" and invalid "<password>" and clicks on Login button
    Then user gets invalid login error message
    And close the broswer

    Examples:
        |username                   |password    |
        |swapnilnarvekar2@gmail.com |asd         |
        |swap@gmail.com             |Swapnil@5895|