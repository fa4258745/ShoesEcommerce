// import { useSelector, useDispatch } from "react-redux";
// import Table from 'react-bootstrap/Table';
// import { FaPlusCircle } from "react-icons/fa";
// import { FaMinusCircle } from "react-icons/fa";
// import { dataIncrease, dataDecrease, itemRemove } from "./cartSlice";
// import { MdPriceChange } from "react-icons/md";
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from "react-router-dom";
// const CartData=()=>{
//     const cartData= useSelector(state=>state.mycart.cart);
//     const dispatch= useDispatch();
//     const navigate= useNavigate();

//     let totalAmount=0;
//      const ans= cartData.map((key)=>{
//        totalAmount+=key.price*key.qnty;
//         return(
//             <>
//              <tr>
//                 <td> <img src={key.defaultImage} width="100" height="100" /></td>
//                 <td>{key.name}</td>
//                  <td>{key.description}</td>
//                   <td>{key.category}</td>
//                   <td>{key.price}</td>
//                   <td>
//                    <FaPlusCircle onClick={()=>{dispatch(dataIncrease({id:key.id}))}} />
//                     {key.qnty}
//                     <FaMinusCircle onClick={()=>{dispatch(dataDecrease({id:key.id}))}} />
//                    </td>
//                   <td> {key.qnty * key.price} </td>
//                   <td>
//                     <button onClick={()=>{dispatch(itemRemove({id:key.id}))}}> Remove </button>
//                   </td>
//              </tr>
//             </>
//         )
//      })
//     return(
//         <>
//           <h1> Our Cart Data</h1>
//          <h3 align="center" style={{color:"blue"}}><MdPriceChange /> {totalAmount}
//           <Button variant="warning" onClick={()=>{navigate("/checkout")}} style={{marginLeft:"30px"}}>Check Out</Button>
//           </h3>

//            <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Product Name</th>
//           <th>Description</th>
//            <th>Category</th>
//           <th>Price</th>
//           <th> Quantity</th>
//           <th> Total Price</th>
//           <th></th>

//         </tr>
//       </thead>
//       <tbody>
//          {ans}
//          <tr>
//            <th colspan="6">
//             <b>Total Price :</b>
//            </th>
//            <th>{totalAmount}</th>
//            <th> </th>
//          </tr>
//       </tbody>
//       </Table>
//         </>
//     )
// }

// export default CartData;

import { useSelector, useDispatch } from "react-redux";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { dataIncrease, dataDecrease, itemRemove } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const CartData = () => {
  const cartData = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalAmount = 0;
  cartData.forEach((item) => {
    totalAmount += item.price * item.qnty;
  });

  return (
    <div className="cart-page">
      {/* LEFT – CART ITEMS */}
      <div className="cart-left">
        <h2>Your Cart</h2>

        {cartData.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.defaultImage} alt={item.name} />

            <div className="cart-info">
              <h4>{item.name}</h4>
              <p className="desc">{item.description}</p>
              <span className="category">{item.category}</span>
             <p className="size">Size: {item.size}</p>

              <div className="price">₹{item.price}</div>

              <div className="quantity">
                <FaMinusCircle
                  onClick={() =>
                    dispatch(dataDecrease({ id: item.id, size: item.size }))
                  }
                />
                <span>{item.qnty}</span>
                <FaPlusCircle
                  onClick={() =>
                    dispatch(dataIncrease({ id: item.id, size: item.size }))
                  }
                />
              </div>
            </div>

            <div className="item-total">
              ₹{item.price * item.qnty}
              <button
                className="remove-btn"
                onClick={() => dispatch(itemRemove({ id: item.id }))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT – PAYMENT */}
      <div className="cart-right">
        <div className="summary-card">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{totalAmount}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <div className="summary-total">
            <MdPriceChange /> ₹{totalAmount}
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartData;
