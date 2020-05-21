package eu.dainius.journeyman.web

import eu.dainius.journeyman.web.request.CreateItineraryRequest
import eu.dainius.journeyman.web.response.CreateItineraryResponse
import eu.dainius.journeyman.business.travel.Itinerary
import eu.dainius.journeyman.business.travel.ItineraryFactory

class ItineraryController {
	fun createItinerary(request: CreateItineraryRequest) : CreateItineraryResponse {
		val itinerary : Itinerary = ItineraryFactory.itineraryFrom(*request.visitObjects.toTypedArray())
		return CreateItineraryResponse(itinerary)
	}
}