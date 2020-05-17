
package eu.dainius.journeyman.runner

import eu.dainius.journeyman.web.WebRunner

public class AppContainer {
	var runner =  WebRunner()
	
    fun run() {
        runner.run()
    }

    fun url() {
        return runner.url()
    }
}

