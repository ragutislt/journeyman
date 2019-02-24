import { createReducer, createAction } from 'redux-starter-kit'

import { fetch } from "./data/DataProvider";

import VisitObject from './objects/VisitObject.ts';
import Itinerary from './objects/Itinerary.ts';

export const initItineraries = createAction('INIT');

export const itinerariesReducer = createReducer([], {
    [initItineraries]: (state, action) => {
        console.log(action);
        switch (action.type) {
            case initItineraries.type: {
                console.log('Initializing my itineraries...')

                fetch("objects.json", (data) => {
                    const itineraries = [];
                    console.log(VisitObject);
                    const objects = [];
                    for (let i = 0; i < data.length; i++) {
                        const rawObject = data[i];
                        objects.push(Object.assign(new VisitObject(), data[i]));
                    }
                    const defaultItinerary = new Itinerary(objects);
                    console.log(defaultItinerary);
                    return {
                        myItineraries: [defaultItinerary]
                    }
                })

                break;
            }
            default: break;
        }
    }
})
