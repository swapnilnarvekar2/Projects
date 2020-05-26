package com.qa.pages;

import com.qa.util.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends TestBase {

    // Page factory - OR
    @FindBy(name="email")
    WebElement emailid;

    @FindBy(name="password")
    WebElement password;

    @FindBy(xpath = "//div[text()='Login']")
    WebElement loginbutton;

    @FindBy(xpath = "//p[text()='Invalid login']")
    WebElement invalidErrormsg;

    // Initialize page objects
    public LoginPage(){

        PageFactory.initElements(driver,this);
    }

    // Actios or methods

    public String validateLoginPageTitle(){

        return driver.getTitle();
    }

    public HomePage login(String uname,String pwd) throws InterruptedException {

        emailid.sendKeys(uname);
        password.sendKeys(pwd);
        loginbutton.click();
        Thread.sleep(3000);
        return new HomePage();
    }

    public String verifyInvalidErrorMessage(){

        return invalidErrormsg.getText();
    }
}
