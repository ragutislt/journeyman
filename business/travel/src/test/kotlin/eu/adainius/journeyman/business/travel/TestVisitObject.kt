package eu.adainius.journeyman.business.travel

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.*
import eu.dainius.journeyman.business.travel.VisitObject

class TestVisitObject {
	@Test
	fun `object has properties`() {
		// GIVEN
		val objectName = "name"
		val objectDesc = "desc"
		val lat = 45.2
		val long = 30.2332
		val location = Location(lat, long)
		val visitObject = VisitObject(_name = objectName, _description = objectDesc, _location = location)

		// WHEN
		// THEN
		assertEquals(objectName, visitObject.name)
		assertEquals(objectDesc, visitObject.description)
		assertEquals(lat, visitObject.location.lat)
		assertEquals(long, visitObject.location.long)
	}

}