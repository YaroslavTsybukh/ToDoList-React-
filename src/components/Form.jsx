import {TextField , Button , Box} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

const FormInput = () => {
    return(
        <Box sx={{display: 'flex',
                flexDirection : 'column'}}>
            <TextField id="password-input"
                       label="Твои задачи..."
                       type="text"
                       autoComplete="current-password"
                        />
            <Button variant="contained" endIcon={<SendIcon />} sx={{margin : '10px 0'}}>
                Добавить
            </Button>
        </Box>
    )
}
export default FormInput