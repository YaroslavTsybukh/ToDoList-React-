import {Box , Checkbox , Button , IconButton} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

const ListItem = () => {
    return(
        <Box sx={{display : 'flex' ,
                    justifyContent : "space-around",
                    border: "1px solid #d3d3d3",
                    padding: "10px",
                    borderRadius: "10px"
        }}>
            <Checkbox defaultChecked={false} disableRipple={true}/>
            <Box component="p"
                 sx={{wordBreak : "break-all"}}>
                text
            </Box>
            <IconButton color="error" size="large" disableRipple={true}>
                <DeleteIcon />
            </IconButton>
        </Box>
    )
}
export default ListItem