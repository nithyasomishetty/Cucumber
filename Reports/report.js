$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/NITHYA .S/eclipse-workspace/Cucumber/src/test/java/feature/FB.feature");
formatter.feature({
  "name": "FB login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "FB Login negative scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "launch google chrome and hit FB url",
  "keyword": "Given "
});
formatter.step({
  "name": "i Enter \"\u003cUserName\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "name": "i Enter \"\u003cPassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "name": "i click on login button",
  "keyword": "When "
});
formatter.step({
  "name": "i verified validation error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "Nithya",
        "123"
      ]
    },
    {
      "cells": [
        "Monika",
        "456"
      ]
    },
    {
      "cells": [
        "Subbu",
        "789"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FB Login negative scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "launch google chrome and hit FB url",
  "keyword": "Given "
});
formatter.match({
  "location": "FBStepDef.launch_google_chrome_and_hit_FB_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i Enter \"Nithya\" username",
  "keyword": "And "
});
formatter.match({
  "location": "FBStepDef.i_Enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i Enter \"123\" password",
  "keyword": "And "
});
formatter.match({
  "location": "FBStepDef.i_Enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "FBStepDef.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i verified validation error message",
  "keyword": "Then "
});
formatter.match({
  "location": "FBStepDef.i_verified_validation_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "FB Login negative scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "launch google chrome and hit FB url",
  "keyword": "Given "
});
formatter.match({
  "location": "FBStepDef.launch_google_chrome_and_hit_FB_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i Enter \"Monika\" username",
  "keyword": "And "
});
formatter.match({
  "location": "FBStepDef.i_Enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i Enter \"456\" password",
  "keyword": "And "
});
formatter.match({
  "location": "FBStepDef.i_Enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "FBStepDef.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i verified validation error message",
  "keyword": "Then "
});
formatter.match({
  "location": "FBStepDef.i_verified_validation_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "FB Login negative scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "launch google chrome and hit FB url",
  "keyword": "Given "
});
formatter.match({
  "location": "FBStepDef.launch_google_chrome_and_hit_FB_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i Enter \"Subbu\" username",
  "keyword": "And "
});
formatter.match({
  "location": "FBStepDef.i_Enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i Enter \"789\" password",
  "keyword": "And "
});
formatter.match({
  "location": "FBStepDef.i_Enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "FBStepDef.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i verified validation error message",
  "keyword": "Then "
});
formatter.match({
  "location": "FBStepDef.i_verified_validation_error_message()"
});
formatter.result({
  "status": "passed"
});
});