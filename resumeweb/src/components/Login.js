import React, { useState } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("") 
  const [password,setPassword] = useState("")

  const loginUser = async (e)=>{
    e.preventDefault()

    const res = await fetch('/signin',{
      method : "POST",
      headers:{
        "Content-Type":"application/json" 
      },body:JSON.stringify({
          email,password
      })
    })
    const data = res.json();

    if(res.status === 400 || !data)
    {
      window.alert("Invalid Credentials")

    }else{
      // window.alert("Login Succesfull")
      console.log("Login succesfull")
      navigate("/Allcv")
    }

  }
  // const [allentry , setAllEntry] = useState([]) 
  
  // const submitForm = (e)=>{
  //   e.preventDefault();
  //   const newEntry = {email:email, password: password}
    
  //   setAllEntry([...allentry, newEntry])
  //   console.log(allentry)
  // }

  return (
    <form method='POST' onSubmit={loginUser}>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value = {email} onChange={(e)=> setEmail(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value = {password} onChange={(e)=> setPassword(e.target.value)}/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn>Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <Link className="nav-link" to="/New">Register</Link></p>
        <p>or sign up with:</p>
        {/* <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn> */}

          {/* <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn> */}

          {/* <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn> */}

          {/* <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn> */}

        </div>
      {/* </div> */}

     </MDBContainer>
    </form>
  );
}

export default Login;