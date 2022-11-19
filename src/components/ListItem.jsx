import {Box , Checkbox , IconButton} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import {useHttp} from "../Core/hooks/http.hook";
import {addTask, toggleTask} from "../Core/slices/tasksSlice";
import {useDispatch} from "react-redux";

const ListItem = ({data , onDeleteTask}) => {
    console.log(data)
    const {id , title , status} = data
    const dispatch = useDispatch()
    const {request} = useHttp()

    const onChangeCheckbox = (id) => {
        dispatch(toggleTask({id , request , status}))
        // dispatch(addTask({data , request}))
    }

    return(
        <Box sx={{display : 'flex' ,
                    justifyContent : "space-between",
                    border: "1px solid #d3d3d3",
                    padding: "10px",
                    borderRadius: "10px",
                    marginBottom: "10px"
        }}>
            <Box sx={{display : 'flex'}}>
                <Checkbox defaultChecked={false} disableRipple={true} onChange={() => onChangeCheckbox(id)}/>
                <Box component="p"
                     sx={{wordBreak : "break-all" , marginTop : "11px" , textDecoration : status ? "line-through" : null}}>
                    {title}
                </Box>
            </Box>
            <IconButton color="error" size="large" disableRipple={true} onClick={onDeleteTask}>
                <DeleteIcon/>
            </IconButton>
        </Box>
    )
}
export default ListItem