package com.qa.util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class TestBase {

    public static WebDriver driver;
    public static Properties prop;

    public TestBase(){

        try {
            prop = new Properties();
            FileInputStream fis = new FileInputStream("C:\\Users\\SwapnilN3\\IdeaProjects\\CucumberBDD\\src\\main\\java\\com\\qa\\config\\config.properties");
            prop.load(fis);
        }catch (IOException e) {
            e.getMessage();
        }
    }

    public  static void  initialization(){

        String browsername = prop.getProperty("browser");

        if(browsername.equalsIgnoreCase("chrome")){

            System.setProperty("webdriver.chrome.driver","C:\\Users\\SwapnilN3\\Downloads\\chromedriver_win32 (2)\\chromedriver.exe");
            driver = new ChromeDriver();
        }
        else  if(browsername.equalsIgnoreCase("firefox")){

            System.setProperty("webdriver.gecko.driver","C:\\Users\\SwapnilN3\\IdeaProjects\\CucumberBDD\\src\\main\\java\\Drivers\\geckodriver.exe");
            driver = new FirefoxDriver();
        }

        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT,TimeUnit.SECONDS);

        driver.get(prop.getProperty("url"));
    }
}
