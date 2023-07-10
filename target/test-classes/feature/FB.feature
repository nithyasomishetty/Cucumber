 
 Feature: FB login
  
@test
       Scenario Outline: FB Login negative scenario
      Given launch google chrome and hit FB url
      And i Enter "<UserName>" username 
      And i Enter "<Password>" password 
      When i click on login button
      Then i verified validation error message
      Examples:
						|UserName|Password|
						|Nithya|123|
						|Monika|456|
						|Subbu|789|