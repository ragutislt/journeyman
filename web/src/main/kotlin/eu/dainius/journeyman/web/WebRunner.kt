package eu.dainius.journeyman.web

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.request.*
import io.ktor.features.ContentNegotiation
import io.ktor.gson.*
import java.text.DateFormat
import eu.dainius.journeyman.web.request.CreateItineraryRequest

public class WebRunner {
	val itineraryController: ItineraryController = ItineraryController()
	
	fun run() {
		val server = embeddedServer(Netty, 8080) {
			install(ContentNegotiation) {
				gson {
					setPrettyPrinting()
				}
			}
			routing {
				post("/itinerary/create") {
					val createdItinerary = call.receive<CreateItineraryRequest>()
				}
			}
		}
		server.start()
	}

	fun url() {
		return
	}
}

