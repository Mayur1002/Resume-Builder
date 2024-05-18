import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

// const [user, setUser] = useState({
//     name:"",
//     email:"",
//     password:"",
//     reEnterPassword:"",
// })


const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  })

  let name, value
  const handleinputs = (e) => {
    console.log(e)
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, password, rePassword } = user

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password, rePassword
      })

    })

    const data = await res.json()
    console.log(data)
    console.log(data.status)

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration")
      console.log("Invalid Registration")
    } else {
      window.alert("Succesfull Registration")
      console.log("Succesfull Registration")

      navigate("/login")
    }

  }

















  // let name, value
  // const postUserData = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;
  //   setUser({ ...user, [name]: value })
  // }

  // // Connection with Database
  // const submitData = async (event) => {
  //   event.preventDefault();
  //   const { name, email, password, reEnterPassword } = user
  //   if (name && email && password && reEnterPassword) {


  //     const res = fetch('https://resumehere-73f7b-default-rtdb.firebaseio.com/userDataRecords.json', {
  //       method: "POST",
  //       Headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         password,
  //         reEnterPassword,
  //       }),
  //     }
  //     )

  //     if (res) {
  //       setUser({
  //         name: "",
  //         email: "",
  //         password: "",
  //         reEnterPassword: "",
  //       })
  //       alert("Data Stored")
  //     }
  //     else {
  //       alert("Please Fill the Data")
  //     }
  //   } else {
  //     alert("Please Fill the Data")
  //   }
  // };








  // const handleChange = e =>{
  //   const {name, value} = e.target
  //   // console.log(name, value)
  //   setUser({
  //     ... user,
  //     [name]: value
  //   })
  // }

  // const postData = async (e) =>{
  //     e.preventDefault()
  //       const{name,email,password,reEnterPassword} = user;

  //   const res = await fetch("https://resumeweb-cf63b-default-rtdb.firebaseio.com/resumeweb.json",{
  //     method : "POST",
  //     headers: {
  //       "Content-Type": "application/json",

  //     },
  //     body:JSON.stringify({
  //       name,
  //       email,
  //       password,
  //       reEnterPassword
  //     })
  //   }
  //   )
  // };

  return (
    <form method='POST'>
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
        <div className='mask gradient-custom-3'></div>
        {console.log("User", user)}
        <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
            <MDBInput wrapperClass='mb-4' name='name' value={user.name} label='Your Name' size='lg' id='form1' type='text' onChange={handleinputs} />
            <MDBInput wrapperClass='mb-4' name='email' value={user.email} label='Your Email' size='lg' id='form2' type='email' onChange={handleinputs} />
            <MDBInput wrapperClass='mb-4' name='password' value={user.password} label='Password' size='lg' id='form3' type='password' onChange={handleinputs} />
            <MDBInput wrapperClass='mb-4' name='rePassword' value={user.rePassword} label='Repeat your password' size='lg' id='form4' type='password' onChange={handleinputs} />
            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
            </div>
            <div className="d-flex justify-content-between mx-3 mb-4">
              <Link className="nav-link" to="/">login</Link>
            </div>

            <MDBBtn className='mb-4 w-100 gradient-custom-4' onClick={postData} size='lg' >Register</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </form>
  );
}

export default Signin;