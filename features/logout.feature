@regression @logout
Feature: [CEH] Logout
    Background: Pre-conditions
        Given I am logged in as an admin user

    Scenario: Logout from the application
        When I see a Logout button
        When I click on the Logout button
        Then I should see a login page