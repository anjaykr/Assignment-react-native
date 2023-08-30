import { createSlice } from "@reduxjs/toolkit";


const TaskSlice = createSlice({
    name: "image",
    initialState: [],
    reducers: {
        AddImage: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const { AddImage } = TaskSlice.actions;
export default TaskSlice.reducer;
