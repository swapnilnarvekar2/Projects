package com.qa.pages;

import com.qa.util.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends TestBase {

    @FindBy(xpath = "//a[@href=\"/home\"]")
    WebElement homeTab;

    @FindBy(xpath = "//span[text()='Swapnil Narvekar']")
    WebElement username;

    @FindBy(xpath = "//a[@href=\"/deals\"]")
    WebElement dealspagelink;

    @FindBy(xpath = "//a[@href=\"/tasks\"]")
    WebElement taskspagelink;

    public HomePage(){

        PageFactory.initElements(driver,this);
    }

    public String verifyUsername() {

        return username.getText();
    }

    public boolean isHometabdisplayed() throws InterruptedException {

        homeTab.click();
        Thread.sleep(3000);
        return homeTab.isDisplayed();
    }

    public DealsPage clickOnDealsLink(){

        dealspagelink.click();
        return new DealsPage();
    }

    public TasksPage clickOnTasksPage(){

        taskspagelink.click();
        return new TasksPage();
    }

    public String verifyHomeUrl(){

        return driver.getCurrentUrl();

    }


}
