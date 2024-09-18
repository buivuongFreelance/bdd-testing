@regression @hotel
Feature: CEH - Hotel Creation
    Background: Pre-conditions
        Given I am logged in as an admin user
        When I hover on sidebar button
        When I click on the Accommodation menu
        When I click on the Hotel menu
        When I click on the Create Hotel button

    Scenario: Check Form Hotel
        When I see a hotel modal dialog creation
        When I see a hotel name field