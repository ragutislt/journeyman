package eu.dainius.journeyman.business.travel

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test

class TestItinerary {
    @Test
    fun `itinerary has objects`() {
        // GIVEN
        val itinerary = ItineraryFactory.itineraryFrom(
            VisitObject(),
            VisitObject()
        )

        // WHEN
        val objects: List<VisitObject> = itinerary.visitObjects

        // THEN
        assertTrue(objects.size == 2)
    }

    @Test
    fun `2 itineraries are equal if they have the same visit objects in the same order`() {
        // GIVEN
        val object1 = VisitObject()
        val object2 = VisitObject()
        val itinerary1 = ItineraryFactory.itineraryFrom(object1, object2)
        val itinerary2 = ItineraryFactory.itineraryFrom(object1, object2)

        // WHEN
        // THEN
        assertTrue(itinerary1 == itinerary2)
    }

    @Test
    fun `2 itineraries are unequal if they have a different number of visitObjects`() {
        // GIVEN
        val object1 = VisitObject()
        val object2 = VisitObject()
        val itinerary1 = ItineraryFactory.itineraryFrom(object1)
        val itinerary2 = ItineraryFactory.itineraryFrom(object1, object2)

        // WHEN
        // THEN
        assertFalse(itinerary1 == itinerary2)
    }

    @Test
    fun `2 itineraries are unequal if they the same visitObjects but in different order`() {
        // GIVEN
        val object1 = VisitObject()
        val object2 = VisitObject()
        val itinerary1 = ItineraryFactory.itineraryFrom(object2, object1)
        val itinerary2 = ItineraryFactory.itineraryFrom(object1, object2)

        // WHEN
        // THEN
        assertFalse(itinerary1 == itinerary2)
    }

    @Test
    fun `adding an object to the itinerary creates a new itinerary`() {
        // GIVEN
        val itinerary = ItineraryFactory.itineraryFrom(
            VisitObject(),
            VisitObject()
        )

        // WHEN
        val newItinerary = ItineraryFactory.itineraryPlus(itinerary, VisitObject())

        // THEN
        assertNotEquals(itinerary, newItinerary)
        assertTrue(newItinerary.visitObjects.size == itinerary.visitObjects.size + 1)
    }

    @Test
    fun `an itinerary can have 2 same objects to visit`() {
        // GIVEN
        val object1 = VisitObject()
        val object2 = VisitObject()

        // WHEN
        // THEN
        assertDoesNotThrow { ItineraryFactory.itineraryFrom(object1, object2, object1) }
    }

    @Test
    fun `an itinerary cannot have 2 same objects back to back`() {
        // GIVEN
        val object1 = VisitObject()
        val object2 = VisitObject()

        // WHEN
        // THEN
        assertThrows(InvalidItineraryException::class.java) { ItineraryFactory.itineraryFrom(object1, object1, object2) }
    }

    @Test
    fun `removing an object from the itinerary will yield a new itinerary`() {
        // GIVEN
        val object1 = VisitObject()
        val object2 = VisitObject()
        val itinerary = ItineraryFactory.itineraryFrom(object1, object2)
        
        // WHEN
        val newItinerary = ItineraryFactory.itineraryMinus(itinerary, object2)

        // THEN 
        assertNotEquals(itinerary, newItinerary)
        assertTrue(newItinerary.visitObjects.size == itinerary.visitObjects.size - 1)
    }

    /* @Test
    fun `we get a new itinerary when an object is removed at a specified position`() {
        // GIVEN
        val object1 = VisitObject()
        val object2 = VisitObject()
        val itinerary = ItineraryFactory.itineraryFrom(object1, object2)
        
        // WHEN
        val newItinerary = ItineraryFactory.itineraryMinus(object2)

        // THEN 
        assertNotEquals(itinerary, newItinerary)
        assertTrue(newItinerary.visitObjects.size == itinerary.visitObjects.size - 1)
    }
 */
    /*
    @Test
    fun 'itinerary has total distance'() {
        
    }

    @Test
    fun 'itinerary has total time estimate'() {
        
    } */
}
