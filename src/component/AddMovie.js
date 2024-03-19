// // rfc
// import {useFormik} from 'formik'
// import React from 'react'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import './AddMovie.css'
// import * as yup from "yup";
// import { useNavigate } from 'react-router-dom';

// export default function AddMovie() {

//   const navigate = useNavigate()

//   const movievalidationSchema = yup.object({
//       name:yup.string().required(),
//       poster:yup.string().required().min(10).url(),
//       trailer:yup.string().required().min(10).url(),
//       rating:yup.number().required().min(0).max(10),
//       summary:yup.string().required().max(20),
//     });


//   const formik = useFormik({
//     initialValues:{
//       name:'',
//       poster:'',
//       trailer:'',
//       rating:'',
//       summary:'',
//     },
//     validationSchema:movievalidationSchema,
    
//     onSubmit:(values) =>{
//       addMovie(values)
//     },
//   });
//   const addMovie =(values)=>{
//     fetch("https://65f16b93034bdbecc76271e3.mockapi.io/moviapi/movie",{
//       method:"POST",
//       body:JSON.stringify(values),
//       headers:{'Content-type':"application/json"},
//     }).then(() => navigate("/portal/movie"))
//   }
//   return (
//     <>
//     <form className="addForms" onSubmit={formik.handleSubmit}>
//       <h1>Add Movie</h1>
//       <TextField id="outlined-basic" label="name" variant="outlined" value={formik.values.name} onChange={formik.handleChange} name='name' onBlur={formik.handleBlur} error={formik.touched.name && formik.errors.name} helperText={formik.touched.name && formik.errors.name ? formik.errors.name :null} />
//       <TextField id="outlined-basic" label="poster" variant="outlined" value={formik.values.poster} onChange={formik.handleChange} name='poster' onBlur={formik.handleBlur} error={formik.touched.poster && formik.errors.poster} helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster :null}/>
//       <TextField id="outlined-basic" label="trailer" variant="outlined" value={formik.values.trailer} onChange={formik.handleChange} name='trailer' onBlur={formik.handleBlur} error={formik.touched.trailer && formik.errors.trailer} helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer :null}/>
//       <TextField id="outlined-basic" label="rating" variant="outlined" value={formik.values.rating} onChange={formik.handleChange} name='rating' onBlur={formik.handleBlur} error={formik.touched.rating && formik.errors.rating} helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating :null}/>
//       <TextField id="outlined-basic" label="summary" variant="outlined" value={formik.values.summary} onChange={formik.handleChange} name='summary' onBlur={formik.handleBlur} error={formik.touched.summary && formik.errors.summary} helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary :null}/>
//       <Button variant="contained" type='submit'>Submit</Button>
//     </form>
//     </>
//   )
// }

// rfc
import {useFormik} from 'formik'
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './AddMovie.css'
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import {API} from "../global"

export default function AddMovie() {

  const navigate = useNavigate()

  const movievalidationSchema = yup.object({
      name:yup.string().required(),
      poster:yup.string().required().min(10).url(),
      trailer:yup.string().required().min(10).url(),
      rating:yup.number().required().min(0).max(10),
      summary:yup.string().required().max(20),
    });


  const formik = useFormik({
    initialValues:{
      name:'',
      poster:'',
      trailer:'',
      rating:'',
      summary:'',
    },
    validationSchema:movievalidationSchema,
    
    onSubmit:(values) =>{
      addMovie(values)
    },
  });
  const addMovie =(values)=>{
    fetch(`${API}/post`,{
      method:"POST",
      body:JSON.stringify(values),
      headers:{'Content-type':"application/json"},
    }).then(() => navigate("/portal/movielist"))
  }
  return (
    <>
    <form className="addForms" onSubmit={formik.handleSubmit}>
      <h1>Add Movie</h1>
      <TextField id="outlined-basic" label="name" variant="outlined" value={formik.values.name} onChange={formik.handleChange} name='name' onBlur={formik.handleBlur} error={formik.touched.name && formik.errors.name} helperText={formik.touched.name && formik.errors.name ? formik.errors.name :null} />
      <TextField id="outlined-basic" label="poster" variant="outlined" value={formik.values.poster} onChange={formik.handleChange} name='poster' onBlur={formik.handleBlur} error={formik.touched.poster && formik.errors.poster} helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster :null}/>
      <TextField id="outlined-basic" label="trailer" variant="outlined" value={formik.values.trailer} onChange={formik.handleChange} name='trailer' onBlur={formik.handleBlur} error={formik.touched.trailer && formik.errors.trailer} helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer :null}/>
      <TextField id="outlined-basic" label="rating" variant="outlined" value={formik.values.rating} onChange={formik.handleChange} name='rating' onBlur={formik.handleBlur} error={formik.touched.rating && formik.errors.rating} helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating :null}/>
      <TextField id="outlined-basic" label="summary" variant="outlined" value={formik.values.summary} onChange={formik.handleChange} name='summary' onBlur={formik.handleBlur} error={formik.touched.summary && formik.errors.summary} helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary :null}/>
      <Button variant="contained" type='submit'>Submit</Button>
    </form>
    </>
  )
}
