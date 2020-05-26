package com.qa.runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
//import io.cucumber.*;
//import cucumber.api.*;

@RunWith(Cucumber.class)
@CucumberOptions(
        features="C:\\Users\\SwapnilN3\\IdeaProjects\\CucumberBDD\\src\\main\\java\\com\\qa\\Features\\Login.feature",  // It contains path to feature files
        glue= {"com/qa/StepDefinations"},	// It stores path to step defination file
        plugin= {"pretty","html:test-output","json:Json_Reports/Cucumber.json","junit:Junit_XMLReports/Cucumber.xml"},//"cucumber-reporting:target/pretty-cucumber"},	// It creates reports
        dryRun=false,		// if this is true then it will check mapping. If false it will execute the project
        monochrome=true,		// this will generate readable format output on console
        strict=true,		// it will check if any step is not defined in step defination file
        tags= {"@ValidLogin"}
        // {"@RegressionTest,@E2ETest"} this means OR condition. Means any of the mentioned the take it for execution
        // {"@RegressionTest","@E2ETest"} this means AND condition. If both are present then take for execution
        // ~ used to ignore tag
        )


public class TestRunner {


}
