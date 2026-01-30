// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';
// import BackEndUrl from '../config/BackEndUrl';
// import NikeVid from "../video/From KlickPin CF Nike Air Max Banner [Video] _ Shoes photography Sneaker posters Creative shoes.mp4"
// const Signup=()=>{
//     const navigate=useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword]= useState("");


//    const handleSubmit=async(e)=>{
//     e.preventDefault();
//      let api=`${BackEndUrl}/user/login`;
//     const response = await axios.post(api, {email, password});
//     console.log(response);
//     localStorage.setItem("token", response.data.accessToken);
//    } 

//     return(
//         <>
         

//  <div style={{display:"flex"}}>

//            <Form style={{width:"300px", margin:"auto"}}>
//              <h1> User Signin</h1>



//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" name="password" value={password}
//         onChange={(e)=>{setPassword(e.target.value)}}/>
//       </Form.Group>
//       If you Don't have Account  
//       <span style={{cursor:"pointer", color:"blue", fontWeight:"bold"}} onClick={()=>{navigate("/registration")}}> SignUp </span> now
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit!
//       </Button>
//     </Form>


//     <div>
//                <video
//              src={NikeVid}
//              autoPlay
//              loop
//              muted
//              playsInline
//              width="100%"
//            />
//     </div>
//      </div>
//         </>
//     )
// }

// export default Signup;





import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";

import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

import NikeVid from "../video/From KlickPin CF Nike Air Max Banner [Video] _ Shoes photography Sneaker posters Creative shoes.mp4";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let api = `${BackEndUrl}/user/login`;
  //   const response = await axios.post(api, { email, password });
  //   localStorage.setItem("token", response.data.accessToken);
  // };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const api = `${BackEndUrl}/admin/adminlogin`;

    const response = await axios.post(api, {
      adminid: email,   // 👈 email field ko adminid bana diya
      password,
    });

    localStorage.setItem("admin", JSON.stringify(response.data));
    navigate("/home");

  } catch (err) {
    alert(err.response?.data?.msg || "Login failed");
  }
};



  return (
    <Box
      sx={{
     display: "flex",
        minHeight: "200vh",   // 👈 important for sticky
        background: "#f9f9f9",
      }}
    >
      {/* LEFT – FORM */}
      <Box
        sx={{
            flex: 1,
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: 380,
            p: 4,
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 1, color: "#ff4500" }}
          >
           Sign Up
          </Typography>

          <Typography sx={{ mb: 3, color: "#666" }}>
            Sign in to continue shopping
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              sx={{
                background: "orangered",
                color: "#fff",
                py: 1.2,
                fontSize: "16px",
                "&:hover": {
                  background: "#ff5722",
                },
              }}
            >
              Sign In
            </Button>
          </form>

          <Typography sx={{ mt: 2, fontSize: 14 }}>
            Don&apos;t have an account?{" "}
            <span
              style={{
                color: "orangered",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={() => navigate("/registration")}
            >
              Sign Up
            </span>
          </Typography>
        </Paper>
      </Box>

      {/* RIGHT – VIDEO */}
      <Box
        sx={{
          flex: 1.2,
          display: { xs: "none", md: "block" },
          overflow: "hidden",
        }}
      >
        <video
          src={NikeVid}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default Signup;





