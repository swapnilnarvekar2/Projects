package com.qa.StepDefinations;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DealStepDefination {

    @Before
    @Given("User is on login page")
    public void User_is_on_login_page() {

    }

    @When("user enters valid username and valid password")
    public void user_enters_valid_username_and_valid_password(io.cucumber.datatable.DataTable dataTable) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
        // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
        // Double, Byte, Short, Long, BigInteger or BigDecimal.
        //
        // For other transformations you can register a DataTableType.

    }

    @When("clicks on Login button")
    public void clicks_on_Login_button() {
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("user gets logged in and populated with username")
    public void user_gets_logged_in_and_populated_with_username() {
        // Write code here that turns the phrase above into concrete actions

    }

    @After
    @Then("close the browser")
    public void close_the_browser(){

    }

    @When("user clicks on Deals tab")
    public void user_clicks_on_Deals_tab() {
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("user get navigated to deals page")
    public void user_get_navigated_to_deals_page() {
        // Write code here that turns the phrase above into concrete actions

    }

    @When("user navigates to deals page by clcking on deals tab")
    public void user_navigates_to_deals_page_by_clcking_on_deals_tab() {
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("user clicks on New button to create new deal")
    public void user_clicks_on_New_button_to_create_new_deal() {
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("fill deal details and clicks on Save button")
    public void fill_deal_details_and_clicks_on_Save_button(io.cucumber.datatable.DataTable dataTable) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
        // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
        // Double, Byte, Short, Long, BigInteger or BigDecimal.
        //
        // For other transformations you can register a DataTableType.

    }

    @Then("verify deals gets created on deals dashboard page")
    public void verify_deals_gets_created_on_deals_dashboard_page() {
        // Write code here that turns the phrase above into concrete actions

    }

}
