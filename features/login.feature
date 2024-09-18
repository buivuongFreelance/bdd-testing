@regression @login
Feature: [CEH] Login
    Background: Pre-conditions
        Given I am on the login page
        When I see a Welcome back title

    Scenario: Login with valid credentials
        When I enter an admin email address into Login form
        When I enter an admin password into Login form
        When I click on the Login button
        Then I should see a dashboard page
    Scenario Outline: Login with invalid credentials
        When I enter email "<email>" into Login form
        When I enter password "<password>" into Login form
        When I click on the Login button
        Then I should see error messages
        Examples:
            | email           | password |
            |                 |          |
            | admin@gmail.com |          |
            |                 | 123456   |
            | admin           | 123456   |