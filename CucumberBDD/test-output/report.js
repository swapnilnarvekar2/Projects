$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/com/qa/Features/Login.feature");
formatter.feature({
  "name": "CRM Application login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@LoginTest"
    }
  ]
});
formatter.scenario({
  "name": "CRM application login with valid username and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@LoginTest"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@ValidLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.user_opens_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid username and valid password and clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.user_enters_valid_username_and_valid_password_and_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage gets displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.homepage_gets_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify username",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.verify_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify homepage tab displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.verify_homepage_tab_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "CRM application login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@InvalidLogin"
    }
  ]
});
formatter.step({
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters invalid \"\u003cusername\u003e\" and invalid \"\u003cpassword\u003e\" and clicks on Login button",
  "keyword": "When "
});
formatter.step({
  "name": "user gets invalid login error message",
  "keyword": "Then "
});
formatter.step({
  "name": "close the broswer",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "swapnilnarvekar2@gmail.com",
        "asd"
      ]
    },
    {
      "cells": [
        "swap@gmail.com",
        "Swapnil@5895"
      ]
    }
  ]
});
formatter.scenario({
  "name": "CRM application login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@LoginTest"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@InvalidLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.user_opens_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid \"swapnilnarvekar2@gmail.com\" and invalid \"asd\" and clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.user_enters_invalid_and_invalid_and_clicks_on_Login_button(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets invalid login error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.user_gets_invalid_login_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the broswer",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.close_the_broswer()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CRM application login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@LoginTest"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@InvalidLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.user_opens_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid \"swap@gmail.com\" and invalid \"Swapnil@5895\" and clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.user_enters_invalid_and_invalid_and_clicks_on_Login_button(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets invalid login error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.user_gets_invalid_login_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the broswer",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.close_the_broswer()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});