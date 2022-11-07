import {Box , Checkbox , IconButton} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import {useEffect , useState} from "react";
import {useHttp} from "../Core/hooks/http.hook";
import setContent from "../Core/utils/setContent"

const ListItem = () => {
    const [text , setText] = useState([])
    const {request , process , setProcess} = useHttp()

    useEffect(() => {
        onRequest()
    },[])

    const onRequest = async() => {
        request("http://localhost:3001/tasks")
            .then(res => {
                setText(res)
                setProcess("ready")
            })
            .catch(() => console.log("Ошибка"))
    }

    return(
        <Box sx={{display : 'flex' ,
                    justifyContent : "space-between",
                    border: "1px solid #d3d3d3",
                    padding: "10px",
                    borderRadius: "10px"
        }}>
            <Box sx={{display : 'flex'}}>
                <Checkbox defaultChecked={false} disableRipple={true}/>

                {/*{text.map(text =>*/}
                {/*    <Box key={text.id}*/}
                {/*         component="p"*/}
                {/*         sx={{wordBreak : "break-all" , marginTop : "11px"}}>*/}
                {/*        {text.title}*/}
                {/*    </Box>*/}
                {/*)}*/}
                {setContent(process , text)}

            </Box>
            <IconButton color="error" size="large" disableRipple={true}>
                <DeleteIcon />
            </IconButton>
        </Box>
    )
}
export default ListItem