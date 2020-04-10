package eu.dainius.journeyman.web

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*

class WebRunner {
    fun run() {
        val server = embeddedServer(Netty, 8080) {
            routing {
                get("/") {
                    call.respondText("Hello, world!", ContentType.Text.Html)
                }
            }
        }
        server.start()
    }
}

