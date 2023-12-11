import { AppBar, Box, Container, Typography, Button } from "@mui/material"
import AdbSharpIcon from '@mui/icons-material/AdbSharp';
import { useNavigate } from "react-router-dom";
const Nav = () => {

    const navigate = useNavigate();
    return(
        <AppBar position="static" sx={{height : '50px',display: "flex", justifyContent: "center"}}>
          <Container sx={{ml: 1, display: "flex" ,alignItems: "center",gap:1}} >
              <Box className = "logo">
                  <AdbSharpIcon fontSize="medium" />
              </Box>
              <Box>
              <Typography fontSize="20px" fontWeight="bold">LOGO</Typography>
              </Box>
  
              <Box className = "btn-group" sx={{marginLeft: "auto"}}>
                  <Button sx={{color: "#fff"}} onClick={() => navigate("/login")}>Login</Button>
              </Box>
          </Container>
        </AppBar>
      )
}

export default Nav