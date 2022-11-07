import Spinner from '../../components/Spinner'
import {Box} from "@mui/material";

const setContent = (state , data = null) => {
    switch(state){
        case "loading":
            return <Spinner />
        case "ready":
            return (
                <>
                    {data.map(text =>
                            <Box key={text.id}
                                 component="p"
                                 sx={{wordBreak : "break-all" , marginTop : "11px"}}>
                                {text.title}
                            </Box>
                        )}
                </>
            )
    }
}

export default setContent