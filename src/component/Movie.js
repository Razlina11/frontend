import React, { useState } from 'react'
// import vikram from '../images/vikram.jpeg'
import './Movie.css'
import Counter from './Counter'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit'
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import {API} from "../global"



export default function Movie({movieTake,getMovies}) {
  const ratingStyle={
    color:movieTake.rating>=8.5?'green':'red'
  }
  const navigate = useNavigate()
  const [show,setShow] = useState();

const deleteMovie=(id)=>{
  fetch(`${API}/delete/${id}`, {
    method: "DELETE",

  })
  .then(()=>getMovies())
    .then(() => alert("Deleted"))
};



  return (
    <Card className='movie-container' sx={{ maxWidth: 345 }}>
      <CardMedia className="movie-poster" height="140" alt="VIKRAM" image={movieTake.poster}/> 
        <CardContent  className='movie-spec'>
        <Typography gutterBottom variant="h5" component="div"> {movieTake.name} </Typography>
        <CardActions>
            <IconButton aria-label="Toggle-Descroption"  color="primary" onClick={() => setShow(!show)}> 
                {show?<ExpandLessIcon fontSize='large'/>:<ExpandMoreIcon fontSize='large'/>}
            </IconButton>
            <IconButton aria-label="Toggle-Descroption" onClick={() =>navigate(`/portal/view/${movieTake._id}`)} color="primary" > 
                <InfoIcon fontSize='large'/>
            </IconButton>
          </CardActions>
            
            
            
            <h3 style={ratingStyle} className='movie-rating'>⭐{movieTake.rating}</h3>
            </CardContent>
        {/* <button onClick={() => setShow(!show)}>Toggle des- {show + ""}</button> */}
        {show ? <p className='movie-summary'>{movieTake.summary}</p>:null}
        <CardActions>

          <Counter/>
          <IconButton sx={{ marginLeft: "auto" }}
            aria-label="Toggle-Descroption"
          onClick={() => deleteMovie(movieTake._id)}
          
          >
            <DeleteIcon color="secondary" />
            
          </IconButton>

          <IconButton sx={{marginLeft:"auto"}}
          aria-label="Toggle-Descroption"
          onClick={() => navigate(`/portal/edit/${movieTake._id}`)}
          
          > 
            <EditIcon color="secondary"/>
          </IconButton>
        </CardActions>
        
    
    </Card>
  )
}
