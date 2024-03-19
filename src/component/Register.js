// import React from 'react'

// export default function Register() {
//   return (
//     <div></div>
//   )
// }
// rfc
import {useFormik} from 'formik'
import './Register.css'
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './AddMovie.css'
import * as yup from "yup";
import { Link,useNavigate } from 'react-router-dom';
import {API} from '../global';


export default function Register() {

  const navigate = useNavigate()

  const regvalidationSchema = yup.object({
      username:yup.string().required(),
      email:yup.string().required().min(10).email(),
      password:yup.string().required().min(10),
    });


  const formik = useFormik({
    initialValues:{
      username:'',
      email:'',
      password:'',
    },
    validationSchema:regvalidationSchema,
    
    onSubmit:(values) =>{
      console.log(values);
      register(values);
    }
  });
 const register=(values)=>{
   fetch(`${API}/register`, { 
    method: "POST" ,
    body:JSON.stringify(values),
    headers:{"Content-Type": "application/json"}
  })
  .then(()=>alert("Successfully Registered"))
  .then(()=>navigate("/"))
 }
  return (
    <>
    <form className="register" onSubmit={formik.handleSubmit}>
      <h1>Register</h1>
      <TextField id="outlined-basic" label="username" variant="outlined" value={formik.values.username} onChange={formik.handleChange} name='username' onBlur={formik.handleBlur} error={formik.touched.username && formik.errors.username} helperText={formik.touched.username && formik.errors.username ? formik.errors.username :null} />
      <TextField id="outlined-basic" label="email" variant="outlined" value={formik.values.email} onChange={formik.handleChange} name='email' onBlur={formik.handleBlur} error={formik.touched.email && formik.errors.email} helperText={formik.touched.poster && formik.errors.email ? formik.errors.email :null}/>
      <TextField id="outlined-basic" label="password" variant="outlined" value={formik.values.password} onChange={formik.handleChange} name='password' onBlur={formik.handleBlur} error={formik.touched.password && formik.errors.password} helperText={formik.touched.password && formik.errors.password ? formik.errors.password :null}/>
      <Button variant="contained" type='submit'>Submit</Button>
      <h4>Do You Have Account?click here <Link to="/" >Login</Link></h4>
    </form>
    </>
  )
}

