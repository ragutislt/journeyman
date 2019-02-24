import { configureStore } from 'redux-starter-kit'

import { itinerariesReducer } from './reducers';

const store = configureStore({
    reducer: {
        itineraries: itinerariesReducer
    }
})

export default store