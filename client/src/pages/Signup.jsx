import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import BackEndUrl from '../config/BackEndUrl';
const Signup=()=>{
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");


   const handleSubmit=async(e)=>{
    e.preventDefault();
     let api=`${BackEndUrl}/user/login`;
    const response = await axios.post(api, {email, password});
    console.log(response);
    localStorage.setItem("token", response.data.accessToken);
   } 

    return(
        <>
         
           <Form style={{width:"300px", margin:"auto"}}>
             <h1> User Signin</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password}
        onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
      If you Don't have Account  
      <span style={{cursor:"pointer", color:"blue", fontWeight:"bold"}} onClick={()=>{navigate("/registration")}}> SignUp </span> now
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit!
      </Button>
    </Form>
        </>
    )
}

export default Signup;











// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import BackEndUrl from "../config/BackEndUrl";

// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Stack
// } from "@mui/material";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const api = `${BackEndUrl}/user/login`;
//     const response = await axios.post(api, { email, password });
//     localStorage.setItem("token", response.data.accessToken);
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#f5f6fa",
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           width: 360,
//           padding: 4,
//           borderRadius: 3,
//           backgroundColor: "#fff",
//         }}
//       >
//         <Stack spacing={3}>
//           <Typography variant="h5" fontWeight="600" textAlign="center" >
//             User Sign In
//           </Typography>

//           <TextField
//             label="Email Address"
//             type="email"
//             variant="outlined"
//             fullWidth
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <Button
//             variant="contained"
//             size="large"
//             fullWidth
//             onClick={handleSubmit}
//             sx={{
//               textTransform: "none",
//               borderRadius: 2,
//               fontWeight: 600,
//             }}
//           >
//             Sign In
//           </Button>

//           <Typography variant="body2" textAlign="center">
//             Don’t have an account?{" "}
//             <span
//               style={{
//                 color: "#1976d2",
//                 cursor: "pointer",
//                 fontWeight: 600,
//               }}
//               onClick={() => navigate("/registration")}
//             >
//               Sign Up
//             </span>
//           </Typography>
//         </Stack>
//       </Paper>
//     </Box>
//   );
// };

// export default Signup;
