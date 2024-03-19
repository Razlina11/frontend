// import logo from './logo.svg';
import './App.css';
import AddMovie from './component/AddMovie';
import Register from './component/Register';
import Login from './component/Login.js'
import { Route,Routes } from 'react-router-dom';
// import Topbar from './component/Topbar.js';
import Portal from './component/Portal.js';
import Home from './component/Home.js';
import Notfound from './component/Notfound.js';
import Movie from './component/Movie.js';
import MovieList from './component/MovieList.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Paper from '@mui/material/Paper'
import MovieDetail from './component/MovieDetail.js';
import EditMovie from './component/EditMovie.js';

function App() {
  const [mode,setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      {/* <CssBaseline />
      <main>This app is using the dark mode</main> */}
    <Paper style={{ minHeight:'100vh' ,borderRadius:'0%'}} elevation={9}>
    <Routes>
    <Route path="/" element={<Login/>} /> 
    <Route path="/register" element={<Register/>} />
    <Route path="/portal" element={<Portal mode={mode} setMode={setMode} />} >
      <Route path="home" element={<Home/>} />
      <Route path="movielist" element={<MovieList/>} />
      <Route path="movie" element={<Movie/>} />
      <Route path="addmovie" element={<AddMovie/>} />
      <Route path="view/:id" element={<MovieDetail/>} />
      <Route path="edit/:id" element={ <EditMovie/>} />
    </Route>
    <Route path="*" element={<Notfound/>} />
    
    </Routes> 
    </Paper>
    </ThemeProvider>
    
    </>
    
  );
}

export default App;
