Feature: Validation of User Login in Automation Application

  Scenario Outline: User Login in Automation Application Validation
    Given Open "<browser>" for Sorterlog Application
    When User Enters Username as "<Username>" and password as "<Password>"
    Then Message displayed User able to login

    Examples: 
      | browser | Username      | Password     |
      | Chrome  | abhishek.gaur | UGl0bmV5QDE= |
