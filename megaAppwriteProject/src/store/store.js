import { configureStore } from '@reduxjs/toolkit'
import slice from './authSlice'

const store = configureStore({
    reducer: {
        authentication: slice
    }
})

export default store;