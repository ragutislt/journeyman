package eu.dainius.journeyman.spec.itinerary

import io.cucumber.java.en.Given
import io.cucumber.java.en.Then
import io.cucumber.java.en.When
import io.cucumber.java.Before
import eu.dainius.journeyman.runner.AppContainer
import io.ktor.client.*
import io.ktor.client.request.get
import io.ktor.client.request.post
import io.ktor.client.request.HttpRequestBuilder
import io.ktor.http.HttpMethod
import kotlinx.coroutines.runBlocking
import io.ktor.client.engine.apache.Apache
import io.cucumber.datatable.DataTable

class ViewItinerarySteps {

	val app: AppContainer

	init {
		app = AppContainer();
	}

	lateinit var initialVisitObjects: List<List<String>> 
	
	@Before
	fun startApp() {
		app.run()
	}

	@Given("following objects:")
	fun visit_objects(table: DataTable) {
		initialVisitObjects = table.asLists();
	}
	
	@Given("an itinerary")
	fun an_itinerary() {
		runBlocking {
			val client = HttpClient(Apache)
			client.get<Unit>("https://en.wikipedia.org/wiki/Main_Page")
		}
	}

     @When("I view it")
    fun i_view_it() {
        // Write code here that turns the phrase above into concrete actions
        throw io.cucumber.java.PendingException()
    }

    @Then("I should see the itinerary")
    fun i_should_see_the_itinerary() {
        // Write code here that turns the phrase above into concrete actions
        throw io.cucumber.java.PendingException()
    }

 /*
    @Then("I get a list of objects in the itinerary")
    fun i_get_a_list_of_objects_in_the_itinerary() {
        // Write code here that turns the phrase above into concrete actions
        throw io.cucumber.java.PendingException()
    }

    @Then("I get a total distance of the itinerary")
    fun i_get_a_total_distance_of_the_itinerary() {
        // Write code here that turns the phrase above into concrete actions
        throw io.cucumber.java.PendingException()
    }

    @Then("I get a total time estimated for the itinerary")
    fun i_get_a_total_time_estimated_for_the_itinerary() {
        // Write code here that turns the phrase above into concrete actions
        throw io.cucumber.java.PendingException()
    }

    @Then("I see name {string}")
    fun i_see_name_x() {
        // Write code here that turns the phrase above into concrete actions
        throw io.cucumber.java.PendingException()
    } */
}
