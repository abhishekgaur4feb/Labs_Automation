$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1_User_Login.feature");
formatter.feature({
  "line": 1,
  "name": "Validation of User Login in SorterLog Application",
  "description": "",
  "id": "validation-of-user-login-in-sorterlog-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Login in Sorterlog Application",
  "description": "",
  "id": "validation-of-user-login-in-sorterlog-application;user-login-in-sorterlog-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open \"\u003cbrowser\u003e\" for Sorterlog Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Enters Username as \"\u003cUsername\u003e\" and password as \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Message displayed User able to login",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "validation-of-user-login-in-sorterlog-application;user-login-in-sorterlog-application;",
  "rows": [
    {
      "cells": [
        "browser",
        "Username",
        "Password"
      ],
      "line": 9,
      "id": "validation-of-user-login-in-sorterlog-application;user-login-in-sorterlog-application;;1"
    },
    {
      "cells": [
        "Chrome",
        "abhishek.gaur",
        "UGl0bmV5QDE\u003d"
      ],
      "line": 10,
      "id": "validation-of-user-login-in-sorterlog-application;user-login-in-sorterlog-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14042194465,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User Login in Sorterlog Application",
  "description": "",
  "id": "validation-of-user-login-in-sorterlog-application;user-login-in-sorterlog-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open \"Chrome\" for Sorterlog Application",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Enters Username as \"abhishek.gaur\" and password as \"UGl0bmV5QDE\u003d\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Message displayed User able to login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 6
    }
  ],
  "location": "UserLogin_Step.open_for_CenterOPS_Application(String)"
});
formatter.result({
  "duration": 196873888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abhishek.gaur",
      "offset": 25
    },
    {
      "val": "UGl0bmV5QDE\u003d",
      "offset": 57
    }
  ],
  "location": "UserLogin_Step.user_Enters_Username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 8235247259,
  "status": "passed"
});
formatter.match({
  "location": "UserLogin_Step.message_displayed_User_able_to_login()"
});
formatter.result({
  "duration": 6904965241,
  "status": "passed"
});
formatter.after({
  "duration": 686007938,
  "status": "passed"
});
});