package eu.dainius.journeyman.business.travel

object ItineraryFactory {
    fun itineraryFrom(vararg objects: VisitObject): Itinerary {
        if (objects.size > 1) {
            for ((index, visitObject) in objects.withIndex()) {
                if (index == objects.size - 1) break
                if (visitObject == objects[index + 1]) throw InvalidItineraryException("Itinerary cannot contain 2 same objects in a row")
            }
        }
        return Itinerary(*objects)
    }

    fun itineraryPlus(itinerary: Itinerary, vararg objects: VisitObject): Itinerary {
        // TODO check count
        return itineraryFrom(*itinerary.visitObjects.toTypedArray(), *objects)
    }

    fun itineraryMinus(itinerary: Itinerary, visitObject: VisitObject): Itinerary {
        // TODO check count and other corner cases
        val listWithoutObject: List<VisitObject> = itinerary.visitObjects.filter { obj -> obj != visitObject }
        return itineraryFrom(*listWithoutObject.toTypedArray())
    }
}
