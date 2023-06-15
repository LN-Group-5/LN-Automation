Feature: Heros Functionality

    This Feature tests to heros scenarios

    Background: 
        Given the user is on the landing page

    Scenario: As a  user, I want to navigate to heros in order to see the list of heros
        Then the user shall see the employee dashboard the click the heros button
        Then the user shall to remove a hero in order to see the hero list decrease
        Then the user shall to add a hero in order to see the hero list increase 
        Then the user shall to add a hero without a name in order to see the hero list remain the same
        Then the user shall to clear the message

        