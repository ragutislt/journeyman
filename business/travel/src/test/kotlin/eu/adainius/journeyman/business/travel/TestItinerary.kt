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
        val itinerary = ItineraryFactory.itineraryFrom(
            VisitObject(),
            VisitObject()
        )

        val newItinerary = ItineraryFactory.itineraryPlus(itinerary, VisitObject())

        assertNotEquals(itinerary, newItinerary)
    }

  /*   @Test
    fun 'an itinerary can have 2 same objects to visit'() {

    }
 */
    @Test
    fun `an itinerary cannot have 2 same objects back to back`() {
        // GIVEN
        val object1 = VisitObject()
        val object2 = VisitObject()

        // WHEN
        // THEN
        assertThrows(InvalidItineraryException::class.java) { ItineraryFactory.itineraryFrom(object1, object1, object2) }
    }
    /*

    @Test
    fun 'objects are kept in order'() {

    }

    @Test
    fun 'objects can be removed from the itinerary'() {
        
    }

    @Test
    fun 'itinerary has total distance'() {
        
    }

    @Test
    fun 'itinerary has total time estimate'() {
        
    } */
}
