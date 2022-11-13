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

export const deleteTask = createAsyncThunk(
    "tasks/deletingTask",
    ({id , request} , {fulfillWithValue}) => {
        request(`http://localhost:3001/tasks/${id}`, "DELETE")
        return fulfillWithValue(id)
    }
)

export const toggleTask = createAsyncThunk(
    "tasks/togglingTask",
    ({id, request , status} , {fulfillWithValue}) => {
        const statusTask = !status
        request(`http://localhost:3001/tasks/${id}` , "PATCH" , JSON.stringify({status : statusTask}))
        return fulfillWithValue(id)
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
            .addCase(deleteTask.pending , setLoadingProcess)
            .addCase(deleteTask.fulfilled , (state , action) => {
                console.log(action.payload)
                state.isLoading = false
                state.tasks = state.tasks.filter(task => task.id !== action.payload )
            })
            .addCase(deleteTask.rejected , setErrorMessage)
            // .addCase(toggleTask.pending , setLoadingProcess)
            .addCase(toggleTask.fulfilled , (state , action) => {
                state.isLoading = false
                const necessaryTask = state.tasks.find(task => task.id === action.payload)
                necessaryTask.status = !necessaryTask.status
            })
            .addCase(toggleTask.rejected , setErrorMessage)
    }
})

const {reducer} = taskSlice

export default reducer




