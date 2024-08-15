import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

const GuestLayout = () => {
  return (
    <Box style={{backgroundColor: '#540fb4',height: '100%',minHeight: '100vh'}}>
        <Outlet/>
    </Box>
  )
}

export default GuestLayout