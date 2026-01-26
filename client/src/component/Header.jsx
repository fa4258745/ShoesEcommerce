
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { FaShoppingCart } from "react-icons/fa";
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import "../css/header.css"
// const Header=()=>{

// const cartData= useSelector(state=>state.mycart.cart);
// const cartLength= cartData.length;
// const navigate = useNavigate();

// const logout=()=>{
//   localStorage.clear();
// }
//   return(
//         <>
//       <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>

//          <span> Welcome {localStorage.getItem("username")} 
//           <a href="#" onClick={logout}>Logout</a></span>
//           <span style={{cursor:"pointer"}} onClick={()=>{navigate("/signup")}}> SignIn </span>

//          <span className='itemcount'> {cartLength} </span> 

//           <FaShoppingCart className='carticon'
//           onClick={()=>{navigate("/cartdata")}} style={{cursor:"pointer"}} /> 
//         </Container>
//       </Navbar>
   
    
//         </>
//     )
// }

// export default Header;









import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../css/header.css";
import logo from "../images/banner/logo.jpg"
import { FaHeart } from "react-icons/fa";
const Header = () => {

  const cartData = useSelector(state => state.mycart.cart);
  const cartLength = cartData.length;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
  };

  return (
    <>
      <Navbar  data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
           <img src={logo} width="60px"/>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Nike</Nav.Link>
            <Nav.Link as={Link} to="home">Reebok</Nav.Link>
            <Nav.Link as={Link} to="home">Adidas</Nav.Link>
            <Nav.Link as={Link} to="home">Under Armour</Nav.Link>
            <Nav.Link as={Link} to="home">Puma</Nav.Link>
          </Nav>

          <div> 
          <input type='text' placeholder='Search' className='searchbar'/>
          </div>

          <span>
            <a href="#" onClick={logout}>Logout</a>
          </span>

          <span style={{ cursor: "pointer" }} onClick={() => { navigate("/signup") }}>
            SignIn
          </span>



         <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px"}}>

          <span className="itemcount">{cartLength}</span>
          <FaShoppingCart
            className="carticon"
            onClick={() => { navigate("/cartdata") }}
            style={{ cursor: "pointer",color:"black" }}
          />

          <FaHeart className='favouriteicon'/>

         </div>



        </Container>
      </Navbar>
    </>
  );
};

export default Header;


