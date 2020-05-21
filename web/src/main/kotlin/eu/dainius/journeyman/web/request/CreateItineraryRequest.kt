package eu.dainius.journeyman.web.request

import eu.dainius.journeyman.business.travel.VisitObject

class CreateItineraryRequest(_visitObjects: List<VisitObject>) {
	val visitObjects: List<VisitObject> = _visitObjects
}