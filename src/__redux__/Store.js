import { configureStore } from '@reduxjs/toolkit'
import discoverReducer from './features/discover/discoverFeature'

export const store = configureStore({
  reducer: {
    'discover': discoverReducer,
  },
})