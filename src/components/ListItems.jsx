import {Box} from "@mui/material"
import ListItem from "./ListItem"
import {useDispatch, useSelector} from "react-redux";
import {useHttp} from "../Core/hooks/http.hook";
import {useEffect} from "react";
import {fetchTasks} from "../Core/slices/tasksSlice";
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

    if(statusLoading === true){
        return <Spinner />
    }

    return(
        <Box>
            {data.map(info => (
                <ListItem key={info.id} data={info}/>
            ))}
        </Box>
    )
}

export default ListItems