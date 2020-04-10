package eu.dainius.journeyman.spec

import io.cucumber.junit.Cucumber
import io.cucumber.junit.CucumberOptions
import org.junit.runner.RunWith
import org.junit.ClassRule

@RunWith(Cucumber::class)
@CucumberOptions(plugin = ["pretty"], features = ["src/test/resources/features/sprint1/ViewItinerary.feature"])
class RunCucumberTest