import * as React from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { logout } from "./Logout.js";


export default function Topbar({mode,setMode}) {
  const navigate = useNavigate()

  return (
    // <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button   color="inherit" onClick={() => navigate("/portal/movielist")}>Movie</Button>
          <Button  color="inherit" onClick={() => navigate("/portal/home")}>Home</Button>
          <Button  color="inherit" onClick={() => navigate("/portal/addmovie")}>Add Movie</Button>

          <Button color="inherit">Login</Button>
          <Button 
          style={{marginleft:"60%"}} 
          startIcon={mode==="light"?<Brightness4Icon/>:<Brightness7Icon/>} 
          color="inherit"
           onClick={()=> setMode(mode ==="light" ? "dark":"light")}>
           {mode === "light" ?"dark":"light"}Mode
           </Button>
        <Button color="inherit" onClick={()=>logout()}>Logout</Button>

        </Toolbar>
      </AppBar>
    // </Box>
  );
}
