import {Box , Checkbox , IconButton} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

const ListItem = ({data}) => {
    return(
        <Box sx={{display : 'flex' ,
                    justifyContent : "space-between",
                    border: "1px solid #d3d3d3",
                    padding: "10px",
                    borderRadius: "10px",
                    marginBottom: "10px"
        }}>
            <Box sx={{display : 'flex'}}>
                <Checkbox defaultChecked={false} disableRipple={true}/>
                <Box component="p"
                     sx={{wordBreak : "break-all" , marginTop : "11px"}}>
                    {data.title}
                </Box>
            </Box>
            <IconButton color="error" size="large" disableRipple={true}>
                <DeleteIcon onClick={() => console.log(1)}/>
            </IconButton>
        </Box>
    )
}
export default ListItem