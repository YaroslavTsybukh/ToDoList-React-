import {TextField , Button , Box} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import {Formik , Form , Field} from "formik"
import {useDispatch} from "react-redux"
import {useHttp} from "../Core/hooks/http.hook"
import {addTask} from "../Core/slices/tasksSlice";
import { v4 as uuidv4 } from 'uuid';


const FormInput = () => {
    const dispatch = useDispatch()
    const request = useHttp()

    const onSubmitTask = (data) => {
        dispatch(addTask({data , request}))
    }

    return(
        <Formik
            initialValues={{
                id: uuidv4(),
                title: "",
                completed: false
            }}
            onSubmit={(values) => onSubmitTask(values) }>
            <Form style={{display: 'flex',
                    flexDirection : 'column'}}>
                <Field id="password-input"
                       label="Твои задачи..."
                       type="text"
                       autoComplete="current-password"
                       name="title"
                       as={TextField}
                        />
                <Button variant="contained" endIcon={<SendIcon />} sx={{margin : '10px 0'}} type="submit">
                    Добавить
                </Button>
            </Form>
        </Formik>
    )
}
export default FormInput