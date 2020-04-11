package eu.dainius.journeyman.business.travel

object ItineraryFactory {
    fun itineraryFrom(vararg objects: VisitObject): Itinerary {
        return Itinerary(*objects)
    }

    fun itineraryPlus(itinerary: Itinerary, vararg objects: VisitObject): Itinerary {
        return itineraryFrom(*itinerary.visitObjects.toTypedArray(), *objects)
    }
}