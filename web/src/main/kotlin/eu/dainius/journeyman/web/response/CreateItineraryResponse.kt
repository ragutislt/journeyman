package eu.dainius.journeyman.web.response

import eu.dainius.journeyman.business.travel.Itinerary

class CreateItineraryResponse(_itinerary: Itinerary) {
	val itinerary: Itinerary = _itinerary
}