@regression @fnb
Feature: CEH - Food and Beverages
    Background: Pre-conditions
        Given I am logged in as an admin user
        When I hover on sidebar button
        When I click on the Accommodation menu
        When I click on the FNB menu
        When I click on the Create FNB button

    Scenario: Check Form FNB
        When I see a fnb modal dialog creation
        When I see a fnb input restaurant name
        When I see a fnb textarea restaurant address
        When I see a fnb select cuisine type
        When I see a fnb textarea contact

    Scenario: Display all required fields in Form FB
        When I see a fnb modal dialog creation
        When I click a fnb Create button
        When I see a required error message of Restaurant Name
        When I see a required error message of Restaurant Address
        When I see a required error message of Cuisine Type

    Scenario: Create Form FB successfully
        When I see a fnb modal dialog creation
        When I enter FNB Restaurant name
        When I enter FNB Restaurant address
        When I select first value of FNB select cuisine type
        When I enter FNB Contact
        When I click a fnb Create button
