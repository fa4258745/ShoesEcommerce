import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import BackEndUrl from '../config/BackEndUrl';
import axios from 'axios';
const Registration=()=>{
    const [input, setInput] = useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
       console.log(input);         
    }


   const handleSubmit=async(e)=>{
      e.preventDefault();
       let api=`${BackEndUrl}/user/registration`;
       const response = await axios.post(api, input);
      console.log(response.data);
      alert("You are Succesfully Registered!!");
   }

    return(
        <>
          
            <Form style={{width:"300px", margin:"auto"}}>
             <h1> User SignUp </h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name="city" onChange={handleInput}  />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" name="address" onChange={handleInput}  />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Pin code</Form.Label>
        <Form.Control type="number" name='pincode' onChange={handleInput}  />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name='email' onChange={handleInput}  />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleInput}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit!
      </Button>
    </Form>      
        </>
    )
}

export default Registration;















// import { useState } from "react";
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

// const Registration = () => {
//   const [input, setInput] = useState({});

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setInput((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const api = `${BackEndUrl}/user/registration`;
//     const response = await axios.post(api, input);
//     console.log(response.data);
//     alert("You are Successfully Registered!");
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
//           width: 420,
//           padding: 4,
//           borderRadius: 3,
//           backgroundColor: "#fff",
//         }}
//       >
//         <Stack spacing={2.5}>
//           <Typography
//             variant="h5"
//             fontWeight="600"
//             textAlign="center"
//           >
//             User Registration
//           </Typography>

//           <TextField
//             label="Full Name"
//             name="name"
//             fullWidth
//             onChange={handleInput}
//           />

//           <TextField
//             label="City"
//             name="city"
//             fullWidth
//             onChange={handleInput}
//           />

//           <TextField
//             label="Address"
//             name="address"
//             fullWidth
//             onChange={handleInput}
//           />

//           <TextField
//             label="Pin Code"
//             name="pincode"
//             type="number"
//             fullWidth
//             onChange={handleInput}
//           />

//           <TextField
//             label="Email Address"
//             name="email"
//             type="email"
//             fullWidth
//             onChange={handleInput}
//           />

//           <TextField
//             label="Password"
//             name="password"
//             type="password"
//             fullWidth
//             onChange={handleInput}
//           />

//           <Button
//             variant="contained"
//             size="large"
//             fullWidth
//             onClick={handleSubmit}
//             sx={{
//               mt: 1,
//               textTransform: "none",
//               borderRadius: 2,
//               fontWeight: 600,
//             }}
//           >
//             Create Account
//           </Button>
//         </Stack>
//       </Paper>
//     </Box>
//   );
// };

// export default Registration;






