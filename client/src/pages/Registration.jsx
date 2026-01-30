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
// import "../css/style.css"
// import nikeVideo from "../video/From KlickPin CF Nike SB Dunk Low Big Money Savings (2024) _ Sneakers men Sneakers men fashion Shoes fashion editorial.mp4";

// const Registration = () => {
//   const [input, setInput] = useState({});

//   const handleInput = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let api = `${BackEndUrl}/user/registration`;
//     const response = await axios.post(api, input);
//     console.log(response.data);
//     alert("You are Successfully Registered!!");
//   };








//   return (
//   <Box
//     sx={{
//       display: "flex",
//       background: "#f5f5f5",
//       minHeight: "200vh",
//     }}
//   >
//     {/* LEFT – FORM */}
//     <Box
//       className="leftBox"
//       sx={{
//         flex: 1,
//         minHeight: "100vh",
//          position: { xs: "relative", md: "sticky" }, // ✅ desktop only
//         top: 0,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         px: 2,
//         marginTop:"20px"
//       }}
//     >
//       <Paper
//         elevation={12}
// className="reveal delay-1"
//         sx={{
//           width: "100%",
//           maxWidth: 420,
//           p: 4,
//           borderRadius: 4,
//         }}
//       >
//         <Typography variant="h4" fontWeight="bold">
//           Create Account
//         </Typography>

//         <Typography sx={{ color: "#777", mb: 3 }}>
//           Join the sneaker movement
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           <TextField fullWidth label="Full Name" name="name" sx={{ mb: 2 }} onChange={handleInput} />
//           <TextField fullWidth label="City" name="city" sx={{ mb: 2 }} onChange={handleInput} />
//           <TextField fullWidth label="Address" name="address" sx={{ mb: 2 }} onChange={handleInput} />
//           <TextField fullWidth label="Pincode" name="pincode" type="number" sx={{ mb: 2 }} onChange={handleInput} />
//           <TextField fullWidth label="Email" name="email" sx={{ mb: 2 }} onChange={handleInput} />
//           <TextField fullWidth label="Password" name="password" type="password" sx={{ mb: 3 }} onChange={handleInput} />

//           <Button
//             type="submit"
//             fullWidth
//             sx={{
//               background: "orangered",
//               color: "#fff",
//               py: 1.3,
//               fontSize: 16,
//               fontWeight: "bold",
//               borderRadius: 2,
//               "&:hover": { background: "#ff5722" },
//             }}
//           >
//             Sign Up
//           </Button>
//         </form>
//       </Paper>
//     </Box>

//     {/* RIGHT – VIDEO */}
//     <Box
//       className="videoWrapper  reveal delay-2"
//       sx={{
//         flex: 1,
//         height: "200vh",
//         display: { xs: "none", md: "block" },
//       }}
//     >
//       <video
//         className="video"
//         src={nikeVideo}
//         autoPlay
//         loop
//         muted
//         playsInline
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//         }}
//       />
//     </Box>
//   </Box>
// );

  
// };

// export default Registration;





// import { useState, useEffect } from "react";
// import axios from "axios";
// import BackEndUrl from "../config/BackEndUrl";

// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper,
// } from "@mui/material";

// import "../css/style.css";
// import nikeVideo from "../video/From KlickPin CF Nike SB Dunk Low Big Money Savings (2024) _ Sneakers men Sneakers men fashion Shoes fashion editorial.mp4";

// const Registration = () => {
//   const [input, setInput] = useState({});

//   const handleInput = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let api = `${BackEndUrl}/user/registration`;
//     await axios.post(api, input);
//     alert("You are Successfully Registered!!");
//   };

//   /* 🔥 SCROLL REVEAL */
//   useEffect(() => {
//     const reveals = document.querySelectorAll(".reveal");

//     const revealOnScroll = () => {
//       reveals.forEach((el) => {
//         const windowHeight = window.innerHeight;
//         const elementTop = el.getBoundingClientRect().top;
//         const revealPoint = 120;

//         if (elementTop < windowHeight - revealPoint) {
//           el.classList.add("active");
//         }
//       });
//     };

//     window.addEventListener("scroll", revealOnScroll);
//     revealOnScroll();

//     return () => window.removeEventListener("scroll", revealOnScroll);
//   }, []);

//   return (
//     <Box className="pageWrapper">
//       {/* LEFT – STICKY FORM */}
//       <Box className="leftBox reveal">
//         <Paper className="formCard" elevation={12}>
//           <Typography variant="h4" fontWeight="bold">
//             Create Account
//           </Typography>

//           <Typography className="subText">
//             Join the sneaker movement
//           </Typography>

//           <form onSubmit={handleSubmit}>
//             <TextField fullWidth label="Full Name" name="name" sx={{ mb: 2 }} onChange={handleInput} />
//             <TextField fullWidth label="City" name="city" sx={{ mb: 2 }} onChange={handleInput} />
//             <TextField fullWidth label="Address" name="address" sx={{ mb: 2 }} onChange={handleInput} />
//             <TextField fullWidth label="Pincode" name="pincode" type="number" sx={{ mb: 2 }} onChange={handleInput} />
//             <TextField fullWidth label="Email" name="email" sx={{ mb: 2 }} onChange={handleInput} />
//             <TextField fullWidth label="Password" name="password" type="password" sx={{ mb: 3 }} onChange={handleInput} />

//             <Button type="submit" fullWidth className="signupBtn">
//               Sign Up
//             </Button>
//           </form>
//         </Paper>
//       </Box>

//       {/* RIGHT – SCROLLING VIDEO */}
//       <Box className="videoWrapper reveal">
//         <video
//           className="video"
//           src={nikeVideo}
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//       </Box>
//     </Box>
//   );
// };

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
//   Switch,
// } from "@mui/material";

// import { motion } from "framer-motion";
// import "../css/style.css";
// import nikeVideo from "../video/From KlickPin CF Nike SB Dunk Low Big Money Savings (2024) _ Sneakers men Sneakers men fashion Shoes fashion editorial.mp4";

// const MotionBox = motion(Box);
// const MotionPaper = motion(Paper);

// const Registration = () => {
//   const [input, setInput] = useState({});
//   const [darkMode, setDarkMode] = useState(true);

//   const handleInput = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let api = `${BackEndUrl}/user/registration`;
//     await axios.post(api, input);
//     alert("You are Successfully Registered!!");
//   };

//   return (
//     <Box className={darkMode ? "pageWrapper dark" : "pageWrapper"}>
//       {/* LEFT – STICKY FORM */}
//       <Box className="leftBox">
//         <MotionPaper
//           elevation={12}
//           className="formCard"
//           initial={{ opacity: 0, y: 80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {/* DARK MODE TOGGLE */}
//           <Box className="darkToggle">
//             <Typography variant="caption">🌙 Dark Mode</Typography>
//             <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
//           </Box>

//           <Typography variant="h4" fontWeight="bold">
//             Create Account
//           </Typography>

//           <Typography className="subText">
//             Join the sneaker movement
//           </Typography>

//           <form onSubmit={handleSubmit}>
//             {["name", "city", "address", "pincode", "email", "password"].map(
//               (field, index) => (
//                 <MotionBox
//                   key={field}
//                   initial={{ opacity: 0, x: -40 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                  <TextField
//   fullWidth
//   label="Full Name"
//   name="name"
//   sx={{ mb: 2 }}
//   onChange={handleInput}
//   InputProps={{
//     style: { color: darkMode ? "#fff" : "#000" },
//   }}
//   InputLabelProps={{
//     style: { color: darkMode ? "#aaa" : "#555" },
//   }}
// />

//                 </MotionBox>
//               )
//             )}

//             <MotionBox whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//               <Button type="submit" fullWidth className="signupBtn">
//                 Sign Up
//               </Button>
//             </MotionBox>
//           </form>
//         </MotionPaper>
//       </Box>

//       {/* RIGHT – VIDEO */}
//       <MotionBox
//         className="videoWrapper"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//       >
//         <video
//           className="video"
//           src={nikeVideo}
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//       </MotionBox>
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
  Switch,
} from "@mui/material";

import { motion } from "framer-motion";
import "../css/style.css";
import nikeVideo from "../video/From KlickPin CF Nike SB Dunk Low Big Money Savings (2024) _ Sneakers men Sneakers men fashion Shoes fashion editorial.mp4";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Registration = () => {
  const [input, setInput] = useState({});
  const [darkMode, setDarkMode] = useState(true);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BackEndUrl}/user/registration`;
    await axios.post(api, input);
    alert("You are Successfully Registered!!");
  };

  return (
    <Box className={darkMode ? "pageWrapper dark" : "pageWrapper"}>
      {/* LEFT – STICKY FORM */}
      <Box className="leftBox">
        <MotionPaper
          elevation={12}
          className="formCard"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* DARK MODE TOGGLE */}
          <Box className="darkToggle">
            <Typography variant="caption">🌙 Dark Mode</Typography>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          </Box>

          <Typography variant="h4" fontWeight="bold">
            Create Account
          </Typography>

          <Typography className="subText">
            Join the sneaker movement
          </Typography>

          <form onSubmit={handleSubmit}>
            {[
              { name: "name", label: "Full Name", type: "text" },
              { name: "city", label: "City", type: "text" },
              { name: "address", label: "Address", type: "text" },
              { name: "pincode", label: "Pincode", type: "number" },
              { name: "email", label: "Email", type: "email" },
              { name: "password", label: "Password", type: "password" },
            ].map((field, index) => (
              <MotionBox
                key={field.name}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  value={input[field.name] || ""}
                  onChange={handleInput}
                  sx={{ mb: 2 }}
                  InputProps={{
                    style: { color: darkMode ? "#fff" : "#000" },
                  }}
                  InputLabelProps={{
                    style: { color: darkMode ? "#aaa" : "#555" },
                  }}
                />
              </MotionBox>
            ))}

            <MotionBox whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button type="submit" fullWidth className="signupBtn">
                Sign Up
              </Button>
            </MotionBox>
          </form>
        </MotionPaper>
      </Box>

      {/* RIGHT – VIDEO */}
      <MotionBox
        className="videoWrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
     <video
  src={nikeVideo}
  preload="none"
  autoPlay
  loop
  muted
/>

      </MotionBox>
    </Box>
  );
};

export default Registration;
