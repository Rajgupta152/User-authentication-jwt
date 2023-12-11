import { Box } from "@mui/material"
import Nav from "./Nav"
export const Home = () => {

    return(
      <Box className = "home-conatiner">
        <Nav />
        <h1>Welcome to Home Page</h1>
      </Box>
    )
}