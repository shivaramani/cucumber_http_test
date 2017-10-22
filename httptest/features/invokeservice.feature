Feature: Requesting a Service Validation
  Scenario: Request the service call
    When I update the service response to have first "param1"
    When I update the service response to have second "param2"
    When I retrieve the service response
    Then I get an OK response
    And the service response has details:
      | answer | param1 |
