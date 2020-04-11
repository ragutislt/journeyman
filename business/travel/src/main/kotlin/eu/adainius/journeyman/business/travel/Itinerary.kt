package eu.dainius.journeyman.business.travel

class Itinerary constructor (vararg _visitObjects: VisitObject) {

    val visitObjects: List<VisitObject> = _visitObjects.toList()

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other?.javaClass != javaClass) return false

        val otherItinerary = other as Itinerary

        if (otherItinerary.visitObjects.size != this.visitObjects.size) return false

        for ((index, visitObject) in this.visitObjects.withIndex()) {
            if (visitObject != otherItinerary.visitObjects[index]) return false
        }

        return true
    }

    override fun hashCode(): Int {
        return this.visitObjects.hashCode()
    }
}
