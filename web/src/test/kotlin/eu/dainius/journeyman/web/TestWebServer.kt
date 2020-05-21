package eu.dainius.journeyman.web

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.*
import eu.dainius.journeyman.web.request.CreateItineraryRequest
import eu.dainius.journeyman.web.response.CreateItineraryResponse
import eu.dainius.journeyman.business.travel.VisitObject
import eu.adainius.journeyman.business.travel.Location

class TestItineraryController {
	val controller = ItineraryController()

	@Test
	fun `can create itinerary`() {
		// GIVEN
		val visitObject = VisitObject(_name = "aa", _description = "ss", _location = Location(45.22, 44.32135))
		val request = CreateItineraryRequest(listOf(visitObject))

		// WHEN
		val response: CreateItineraryResponse = controller.createItinerary(request)

		// THEN
		assertNotNull(response)
		assertNotNull(response.itinerary)
	}
}