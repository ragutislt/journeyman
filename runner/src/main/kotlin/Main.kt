import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import eu.dainius.journeyman.web.*

fun main(args: Array<String>) {
    val runner = WebRunner();
    runner.run();
}