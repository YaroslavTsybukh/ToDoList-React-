import {Box} from "@mui/material"
import ListItem from "./ListItem"
import {useDispatch, useSelector} from "react-redux";
import {useHttp} from "../Core/hooks/http.hook";
import {useEffect} from "react";
import {fetchTasks , deleteTask} from "../Core/slices/tasksSlice";
import Spinner from "./Spinner";

const ListItems = () => {
    const data = useSelector(state => state.tasks)
    const statusLoading = useSelector(state => state.isLoading)
    const {request} = useHttp()
    const dispatch = useDispatch()

    useEffect(() => {
        onRequest()
    },[])

    const onRequest = () => {
        dispatch(fetchTasks(request))
    }

    const onDeleteTask = (id) => {
        dispatch(deleteTask({id , request}))
    }

    const filteredTasks = (tasks) => {
        const completedTasks = tasks.filter(task => task.status === true)
        const incompletedTasks = tasks.filter(task => task.status === false)
        const newArray = [...incompletedTasks , ...completedTasks]
        console.log(newArray)
        if(newArray.length > 0){
            return newArray.map(info => (
                <ListItem key={info.id} data={info} onDeleteTask={() => onDeleteTask(info.id)}/>
            ))
        }else{
            return <h1 style={{textAlign: "center"}}>Задач нет</h1>
        }
    }

    if(statusLoading === true){
        return <Spinner />
    }

    const elements = filteredTasks(data)
    return(
        <Box>
            {elements}
        </Box>
    )
}

export default ListItems