import { createReducer, createAction } from 'redux-starter-kit'

//import { fetch } from "./data/DataProvider";

import { VisitObject, Itinerary } from './objects';
import { serialize } from './utils/serializer';

//export const initItinerariesBegin = createAction('INIT_ITINERARIES_BEGIN');
export const initItinerariesSuccess = createAction('INIT_ITINERARIES_SUCCESS');
export const initItinerariesFailure = createAction('INIT_ITINERARIES_FAILURE');

export const itinerariesReducer = createReducer([], {
    [initItinerariesSuccess]: (state, action) => {
        const objects = [];
        for (let i = 0; i < action.payload.length; i++) {
            objects.push(Object.assign(new VisitObject(), action.payload[i]));
        }
        const defaultItinerary = new Itinerary(1, "Spain trip", "7 days", objects);
        return {
            ...state,
            myItineraries: [JSON.parse(JSON.stringify(defaultItinerary))]
        }
    }
})
