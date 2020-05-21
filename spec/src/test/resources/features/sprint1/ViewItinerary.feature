Feature: View Itinerary
    We should be able to view a detailed Itinerary

    Background: Itinerary exists
    		Given following objects:
	    		| name    | description              				| location        |
		  		| Madrid  | capital of spain  							| 40.416, -3.703  |
		  		| Malaga  | capital of the sunny coast 			| 36.721, -4.425  |
		  		| Sevilla | very nice   										| 37.389, -5.984  |
        Given an itinerary
        When I view it

    Scenario: Open an itinerary
        Then I should see the itinerary

    # Scenario: Get itinerary object list
    #     Then I get a list of objects in the itinerary

    # Scenario: Get total distance for itinerary
    #     Then I get a total distance of the itinerary

    # Scenario: Get total time estimated for itinerary
    #     Then I get a total time estimated for the itinerary

    # Scenario: Rename an itinerary
    #     Then I see name 1
    #     And I rename it to 2
    #     And I view it
    #     And I see name 2

    # Scenario: See a transport type for each leg
    #     Then I see a transport type for each leg