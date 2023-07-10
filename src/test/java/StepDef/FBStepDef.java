package StepDef;

import org.openqa.selenium.By;

import base.com.Base;
import cucumber.api.java.en.*;



public class FBStepDef extends Base{
	
	@Given("launch google chrome and hit FB url")
	public void launch_google_chrome_and_hit_FB_url() {
		Base.chromebroswerLaunch();
		Base.getUrl("https://www.facebook.com/");
	   
	}
	@Given("i Enter in valid username")
	public void i_Enter_in_valid_username() {
		  Base.textBox(By.name("email"), "Nithya");
	   
	}

	@Given("i Enter invalid password")
	public void i_Enter_invalid_password() {
	   Base.textBox(By.name("pass"), "Nithya");
	}

	@When("i clicko n login button")
	public void i_clicko_n_login_button() {
	   Base.element(By.name("login")).click();
	}
	

	@Then("i verified validation error message")
	public void i_verified_validation_error_message() {
		String actual = Base.element(By.xpath("//*[@alt='Facebook']")).getText();
		System.out.println(actual);
		
		
	  
	}
	@Given("i Enter {string} username")
	public void i_Enter_username(String string) {
		 Base.textBox(By.name("email"), string);
	}

	@Given("i Enter {string} password")
	public void i_Enter_password(String string) {
		 Base.textBox(By.name("pass"), string);
	}

	@When("i click on login button")
	public void i_click_on_login_button() {
	    System.out.println("logged successfully");
	}






}
