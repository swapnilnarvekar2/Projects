package com.qa.StepDefinations;

import com.qa.pages.LoginPage;
import com.qa.util.TestBase;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class InvalidLoginStepDefination extends TestBase {

    LoginPage login;

    @Given("User opens browser")
    public void user_opens_browser() {

        TestBase.initialization();
    }

    @When("user enters invalid {string} and invalid {string} and clicks on Login button")
    public void user_enters_invalid_and_invalid_and_clicks_on_Login_button(String string, String string2) throws InterruptedException {

        login= new LoginPage();
        login.login(string,string2);
    }


    @Then("user gets invalid login error message")
    public void user_gets_invalid_login_error_message() {

        String actualErrorMsg = login.verifyInvalidErrorMessage();
        Assert.assertEquals("Invalid login",actualErrorMsg);
    }

    @Then("close the broswer")
    public void close_the_broswer() {

        driver.close();
    }

}
