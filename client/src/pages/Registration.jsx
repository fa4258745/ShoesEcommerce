// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import BackEndUrl from '../config/BackEndUrl';
// import axios from 'axios';
// import nikeVideo from "../video/From KlickPin CF Nike SB Dunk Low Big Money Savings (2024) _ Sneakers men Sneakers men fashion Shoes fashion editorial.mp4"
// const Registration=()=>{
//     const [input, setInput] = useState({});

//     const handleInput=(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;
//         setInput(values=>({...values, [name]:value}));
//        console.log(input);         
//     }


//    const handleSubmit=async(e)=>{
//       e.preventDefault();
//        let api=`${BackEndUrl}/user/registration`;
//        const response = await axios.post(api, input);
//       console.log(response.data);
//       alert("You are Succesfully Registered!!");
//    }

//     return(
//         <>
//           <div style={{display:"flex"}}>

//             <Form style={{width:"300px", margin:"auto"}}>
//              <h1> User SignUp </h1>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Name</Form.Label>
//         <Form.Control type="text" name="name" onChange={handleInput} />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter City</Form.Label>
//         <Form.Control type="text" name="city" onChange={handleInput}  />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Address</Form.Label>
//         <Form.Control type="text" name="address" onChange={handleInput}  />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Pin code</Form.Label>
//         <Form.Control type="number" name='pincode' onChange={handleInput}  />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Email</Form.Label>
//         <Form.Control type="email" name='email' onChange={handleInput}  />
//       </Form.Group>
//        <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Enter Password</Form.Label>
//         <Form.Control type="password" name="password" onChange={handleInput}  />
//       </Form.Group>
//       <Button variant="primary" type="submit" onClick={handleSubmit}>
//         Submit!
//       </Button>
//     </Form>      

//     <div>
//       <video src={nikeVideo}

//       autoPlay
//           loop
//           muted
//           playsInline
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//           }}

//       />
//     </div>
//           </div>

//         </>
//     )
// }

// export default Registration;



// import { useState } from "react";
// import axios from "axios";
// import BackEndUrl from "../config/BackEndUrl";

// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper,
// } from "@mui/material";

// import nikeVideo from "../video/From KlickPin CF Nike SB Dunk Low Big Money Savings (2024) _ Sneakers men Sneakers men fashion Shoes fashion editorial.mp4";

// const Registration = () => {
//   const [input, setInput] = useState({});

//   const handleInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setInput((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let api = `${BackEndUrl}/user/registration`;
//     const response = await axios.post(api, input);
//     console.log(response.data);
//     alert("You are Successfully Registered!!");
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         minHeight: "200vh",
//         backgroundColor: "#f8f8f8",
//       }}
//     >
//       {/* LEFT – STICKY FORM */}
//       <Box
//         sx={{
//           flex: 1,
//           position: "sticky",
//           height: "200vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           marginTop:"20px"
//         }}
//       >
//         <Paper
//           elevation={10}
//           sx={{
//             width: 420,
//             p: 4,
//             borderRadius: 4,
//             background: "#fff",
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: "bold",
//               mb: 1,
//             }}
//           >
//             Create Account 
//           </Typography>

//           <Typography sx={{ color: "#777", mb: 3 }}>
//             Join the sneaker movement
//           </Typography>

//           <form onSubmit={handleSubmit}>
//             <TextField
//               label="Full Name"
//               name="name"
//               fullWidth
//               required
//               onChange={handleInput}
//               sx={{ mb: 2 }}
//             />

//             <TextField
//               label="City"
//               name="city"
//               fullWidth
//               required
//               onChange={handleInput}
//               sx={{ mb: 2 }}
//             />

//             <TextField
//               label="Address"
//               name="address"
//               fullWidth
//               required
//               onChange={handleInput}
//               sx={{ mb: 2 }}
//             />

//             <TextField
//               label="Pincode"
//               name="pincode"
//               type="number"
//               fullWidth
//               required
//               onChange={handleInput}
//               sx={{ mb: 2 }}
//             />

//             <TextField
//               label="Email"
//               name="email"
//               type="email"
//               fullWidth
//               required
//               onChange={handleInput}
//               sx={{ mb: 2 }}
//             />

//             <TextField
//               label="Password"
//               name="password"
//               type="password"
//               fullWidth
//               required
//               onChange={handleInput}
//               sx={{ mb: 3 }}
//             />

//             <Button
//             className="button"
//               type="submit"
//               fullWidth
//               sx={{
//                 backgroundColor: "orangered",
//                 color: "#fff",
//                 py: 1.4,
//                 fontSize: "16px",
//                 fontWeight: "bold",
//                 borderRadius: 2,
//                 "&:hover": {
//                   backgroundColor: "#ff5722",
//                 },
//               }}
//             >
//               Sign Up
//             </Button>
//           </form>
//         </Paper>
//       </Box>

//       {/* RIGHT – SCROLLING VIDEO */}
//       <Box
//         sx={{
//           flex: 1.2,
//           height: "200vh",
//           overflow: "hidden",
//         }}
//       >
//         <video
//           src={nikeVideo}
//           autoPlay
//           loop
//           muted
//           playsInline
//           style={{
//             width: "100%",
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Registration;


















import { useState } from "react";
import axios from "axios";
import BackEndUrl from "../config/BackEndUrl";

import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

import nikeVideo from "../video/From KlickPin CF Nike SB Dunk Low Big Money Savings (2024) _ Sneakers men Sneakers men fashion Shoes fashion editorial.mp4";

const Registration = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BackEndUrl}/user/registration`;
    const response = await axios.post(api, input);
    console.log(response.data);
    alert("You are Successfully Registered!!");
  };

  return (
    <Box sx={{ display: "flex", background: "#f5f5f5" }}>

      {/* LEFT – STICKY FORM */}
      <Box
        sx={{
          width: "45%",
          height: "100vh",
          position: "sticky",
          top: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f5",
          marginTop:"20px"
        }}
      >
        <Paper
          elevation={12}
          sx={{
            width: 420,
            p: 4,
            borderRadius: 4,
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Create Account
          </Typography>

          <Typography sx={{ color: "#777", mb: 3 }}>
            Join the sneaker movement
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField label="Full Name" name="name" fullWidth sx={{ mb: 2 }} onChange={handleInput} />
            <TextField label="City" name="city" fullWidth sx={{ mb: 2 }} onChange={handleInput} />
            <TextField label="Address" name="address" fullWidth sx={{ mb: 2 }} onChange={handleInput} />
            <TextField label="Pincode" name="pincode" type="number" fullWidth sx={{ mb: 2 }} onChange={handleInput} />
            <TextField label="Email" name="email" type="email" fullWidth sx={{ mb: 2 }} onChange={handleInput} />
            <TextField label="Password" name="password" type="password" fullWidth sx={{ mb: 3 }} onChange={handleInput} />

            <Button
              type="submit"
              fullWidth
              sx={{
                background: "orangered",
                color: "#fff",
                py: 1.3,
                fontSize: 16,
                fontWeight: "bold",
                borderRadius: 2,
                "&:hover": {
                  background: "#ff5722",
                },
              }}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </Box>

      {/* RIGHT – SCROLLING VIDEO */}
      <Box
        sx={{
          width: "55%",
          height: "200vh",
          overflow: "hidden",
        }}
      >
        <video
          src={nikeVideo}
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

export default Registration;

