import {createSlice , createAsyncThunk , current} from "@reduxjs/toolkit"

const initialState = {
    tasks: [],
    isLoading: true
}

export const fetchTasks = createAsyncThunk(
    'tasks/fetchingStatus',
    (request) => {
        return request("http://localhost:3001/tasks")
    }
)

export const addTask = createAsyncThunk(
    'tasks/addingStatus',
    ({data , request}) => {
        return request("http://localhost:3001/tasks" , "POST" , JSON.stringify(data))
    }
)

const setLoadingProcess = (state) => {
    state.isLoading = true
}

const setErrorMessage = () => {
    throw new Error("Ошибка")
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    extraReducers : (builder) => {
        builder
            .addCase(fetchTasks.pending , setLoadingProcess)
            .addCase(fetchTasks.fulfilled , (state ,action) => {
                state.isLoading = false
                state.tasks = action.payload
            })
            .addCase(fetchTasks.rejected , setErrorMessage)
            .addCase(addTask.pending , setLoadingProcess)
            .addCase(addTask.fulfilled , (state , action) => {
                state.isLoading = false
                state.tasks.push(action.payload)
            })
            .addCase(addTask.rejected , setErrorMessage)
    }
})

const {reducer} = taskSlice

export default reducer




