import { Box, Button, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import { object, string } from "yup"
import { useNavigate } from "react-router-dom"

export const Login = (props) => {
    const {data,login,isValidate} = props;
    const navigate = useNavigate();
    // console.log(isValidate)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values);
            login(values);
        }
    })

    if(isValidate){
        navigate("/")
        console.log(isValidate)
    }

    return(
        <Box className = "container App-header">
            
            <form onSubmit={formik.handleSubmit}>
            <h1>Login</h1>
                 <TextField
                 name="email"
                 value={formik.values.email}
                 label = "Please enter your email"
                 onChange={formik.handleChange}
                 sx={{
                    width: "80%"
                 }}
                 ></TextField>
                 <TextField
                 name="password"
                 value={formik.values.password}
                 label = "Please enter password"
                 onChange={formik.handleChange}
                 sx={{
                    width: "80%"
                 }}
                 ></TextField>
                 <Button
                 type="submit"
                 sx={{
                    width: "80%"
                 }}
                 variant="contained"
                 onClick={() => navigate('/')}
                  >Login</Button>
                  <span>if you are a new user</span>
                  <Button onClick={() => navigate('/Register')} sx={{display: "inline-block"}}>Sign up</Button>
            </form>
        </Box>
    )
}