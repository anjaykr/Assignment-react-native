import { configureStore } from '@reduxjs/toolkit'
import TaskSlice from '../Redux/Slices'
export const store = configureStore({
    reducer: {
        task: TaskSlice
    },
})