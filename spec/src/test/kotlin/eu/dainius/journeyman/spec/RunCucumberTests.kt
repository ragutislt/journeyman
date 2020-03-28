package eu.dainius.journeyman.spec
 
import io.cucumber.junit.CucumberOptions
import io.cucumber.junit.Cucumber 
import org.junit.runner.RunWith

@RunWith(Cucumber::class)
@CucumberOptions(plugin = ["pretty"])
class RunCucumberTest