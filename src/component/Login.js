// import React from 'react'

// export default function Register() {
//   return (
//     <div></div>
//   )
// }
// rfc
import {useFormik} from 'formik'
import React from 'react'
import './Login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './AddMovie.css'
import * as yup from "yup";
import { Link,useNavigate } from 'react-router-dom';
import {API} from "../global";

export default function Register() {

  const navigate = useNavigate()

  const regvalidationSchema = yup.object({
      email:yup.string().required().min(10).email(),
      password:yup.string().required().min(10),
    });


  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validationSchema:regvalidationSchema,
    
    onSubmit:(values) =>{
      login(values)
    }
  });

  const login=async (values)=>{
    let data=await fetch(`${API}/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(values),

    })
    if(data.status==="400")
    {
      const result= await data.json();
      alert(result.message);
    }
    else{
      const result=await data.json();
      localStorage.setItem("store-token",result.token);
      alert("login successfully");
      navigate("/portal");
    }
  }

  return (
    <>
    <form className="register" onSubmit={formik.handleSubmit}>
      <h1>Login</h1>
      <TextField id="outlined-basic" label="email" variant="outlined" value={formik.values.email} onChange={formik.handleChange} name='email' onBlur={formik.handleBlur} error={formik.touched.email && formik.errors.email} helperText={formik.touched.poster && formik.errors.email ? formik.errors.email :null}/>
      <TextField id="outlined-basic" label="password" variant="outlined" value={formik.values.password} onChange={formik.handleChange} name='password' onBlur={formik.handleBlur} error={formik.touched.password && formik.errors.password} helperText={formik.touched.password && formik.errors.password ? formik.errors.password :null}/>
      <Button variant="contained" type='submit'>Submit</Button>
      <h4>Don't have an account?click here <Link to="/register" >Regiter</Link></h4>
    </form>
    </>
  )
}

