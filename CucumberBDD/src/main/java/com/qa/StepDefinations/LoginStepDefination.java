package com.qa.StepDefinations;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginStepDefination extends TestBase {

    LoginPage login;
    HomePage home;

    @Given("user opens browser")
    public void user_opens_browser() {
        TestBase.initialization();
    }

    @Then("user is on login page")
    public void user_is_on_login_page() {

        login= new LoginPage();
        String actualTitle = login.validateLoginPageTitle();
        Assert.assertEquals("Cogmento CRM",actualTitle);
    }

    @When("user enters valid username and valid password and clicks on Login button")
    public void user_enters_valid_username_and_valid_password_and_clicks_on_Login_button() throws InterruptedException {

        home = login.login(prop.getProperty("email"),prop.getProperty("password"));
    }

    @Then("homepage gets displayed")
    public void homepage_gets_displayed() throws InterruptedException {

        boolean bool = home.isHometabdisplayed();
        Assert.assertTrue(home.verifyHomeUrl().contains("home"));
    }

    @Then("verify username")
    public void verify_username() {

        String actualUname = home.verifyUsername();
        Assert.assertEquals("Swapnil Narvekar",actualUname);
    }

    @Then("verify homepage tab displayed")
    public void verify_homepage_tab_displayed() throws InterruptedException {

        Assert.assertTrue(home.isHometabdisplayed());
    }

}
