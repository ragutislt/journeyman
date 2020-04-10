
package eu.dainius.journeyman.runner

import eu.dainius.journeyman.web.*

class AppContainer {
    fun run() {
        val runner = WebRunner()
        runner.run()
    }
}

