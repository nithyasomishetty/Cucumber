package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;




@RunWith(Cucumber.class)
@CucumberOptions(features= {"C:\\Users\\NITHYA .S\\eclipse-workspace\\Cucumber\\src\\test\\java\\feature\\FB.feature"}, 
dryRun = false,glue={"StepDef"},monochrome = true, 
snippets = SnippetType.CAMELCASE, tags= {"@test"}, plugin = {"html:Reports","junit:reports/result.xml"})
public class Runner {

}
