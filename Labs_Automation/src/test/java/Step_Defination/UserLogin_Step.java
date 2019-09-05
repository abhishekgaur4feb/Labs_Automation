package Step_Defination;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Collections;
import java.util.Hashtable;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;
import java.util.Set;

import javax.imageio.ImageIO;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;


import Page_Object.User_Login_Object;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class UserLogin_Step {
	Logger logger = Logger.getLogger("UserLogin_Step");
	public WebDriver driver;
	public Properties prop;

	@Given("^Open \"([^\"]*)\" for Sorterlog Application$")
	public void open_for_CenterOPS_Application(String arg1) throws Throwable {
		driver = Hooks.driver;
		
		logger.info("Fetching URL and Opening the Url");
	    
	}

	@When("^User Enters Username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_Enters_Username_as_and_password_as(String Username, String Password) throws Throwable {
		PageFactory.initElements(driver, User_Login_Object.class);
		
		Thread.sleep(4000);
		WebDriverWait wait1 = new WebDriverWait(driver, 50);
		WebElement element1 = wait1.until(ExpectedConditions.visibilityOf(User_Login_Object.Username));
		Thread.sleep(1000);
		element1.sendKeys(Username);
		
		byte[] decoded = Base64.getDecoder().decode(Password);
		String Decoded_Password=new String(decoded, StandardCharsets.UTF_8);
		
		WebDriverWait wait2 = new WebDriverWait(driver, 50);
		WebElement element2 = wait2.until(ExpectedConditions.visibilityOf(User_Login_Object.Password));
		Thread.sleep(1000);
		element2.sendKeys(Decoded_Password);
		
		
		
	    
	}

	@Then("^Message displayed User able to login$")
	public void message_displayed_User_able_to_login() throws Throwable {
		WebDriverWait wait2 = new WebDriverWait(driver, 50);
		WebElement element2 = wait2.until(ExpectedConditions.visibilityOf(User_Login_Object.Login_Button));
		Thread.sleep(1000);
		element2.click();
		
	    
	}
		
}
