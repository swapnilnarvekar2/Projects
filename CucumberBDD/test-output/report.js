$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/com/qa/Features/CreateDeal.feature");
formatter.feature({
  "name": "Creating deals functionality in CRM Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@DealTest"
    }
  ]
});
formatter.scenario({
  "name": "Navigating to deals page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@DealTest"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.User_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters valid username and valid password",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.user_enters_valid_username_and_valid_password(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets logged in and populated with username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.user_gets_logged_in_and_populated_with_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Deals tab",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.user_clicks_on_Deals_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user get navigated to deals page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.user_get_navigated_to_deals_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "Create deal in CRM Application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@DealTest"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.User_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters valid username and valid password",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.user_enters_valid_username_and_valid_password(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets logged in and populated with username",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.user_gets_logged_in_and_populated_with_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to deals page by clcking on deals tab",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.user_navigates_to_deals_page_by_clcking_on_deals_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on New button to create new deal",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.user_clicks_on_New_button_to_create_new_deal()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "fill deal details and clicks on Save button",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.fill_deal_details_and_clicks_on_Save_button(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify deals gets created on deals dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.verify_deals_gets_created_on_deals_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.DealStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/main/java/com/qa/Features/Login.feature");
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
  "status": "skipped"
});
formatter.step({
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.user_opens_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters valid username and valid password and clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.user_enters_valid_username_and_valid_password_and_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "homepage gets displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.homepage_gets_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify username",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.verify_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify homepage tab displayed",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.verify_homepage_tab_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.user_opens_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters invalid \"swapnilnarvekar2@gmail.com\" and invalid \"asd\" and clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.user_enters_invalid_and_invalid_and_clicks_on_Login_button(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets invalid login error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.user_gets_invalid_login_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the broswer",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.close_the_broswer()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.user_opens_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.LoginStepDefination.user_is_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters invalid \"swap@gmail.com\" and invalid \"Swapnil@5895\" and clicks on Login button",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.user_enters_invalid_and_invalid_and_clicks_on_Login_button(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user gets invalid login error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.user_gets_invalid_login_error_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close the broswer",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.StepDefinations.InvalidLoginStepDefination.close_the_broswer()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});