import {TextField , Button} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import {Formik , Form , Field} from "formik"
import {useDispatch} from "react-redux"
import {useHttp} from "../Core/hooks/http.hook"
import {addTask} from "../Core/slices/tasksSlice";
import { v4 as uuidv4 } from 'uuid';
import * as Yup from "yup"


const FormInput = () => {
    const dispatch = useDispatch()
    const {request} = useHttp()

    const onSubmitTask = (data) => {
        dispatch(addTask({data , request}))
    }

    return(
        <Formik
            initialValues={{
                id: uuidv4(),
                title: "",
                status: false
            }}
            validationSchema={Yup.object({
                title: Yup.string().required("Required")
            })}
            onSubmit={(values , {resetForm}) => {
                onSubmitTask(values)
                resetForm()
            }}>
            {({errors, touched}) => (
                <Form style={{display: 'flex',
                    flexDirection : 'column'}}>
                    <Field id="password-input"
                           label="Твои задачи..."
                           type="text"
                           autoComplete="current-password"
                           name="title"
                           as={TextField}
                    />
                    {errors.title && touched.title && <div style={{color:"red"}}>{errors.title}</div>}
                    <Button variant="contained" endIcon={<SendIcon />} sx={{margin : '10px 0'}} type="submit">
                        Добавить
                    </Button>
                </Form>
            )}
        </Formik>
    )
}
export default FormInput