// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import BackEndUrl from "../config/BackEndUrl";
// import axios from "axios";
// import " ../css/ProductDisplay.css"
// const ProductDisplay = () => {
//     const { id } = useParams();
//     const [mydata, setMydata] = useState({});
//     const [imglist, setimgList] = useState([]);
//     const [DefaultImage, SetDefaultImage] = useState("");

//     console.log(imglist);

//     const loadData = async () => {
//         let api = `${BackEndUrl}/product/productdisplay/?id=${id}`;
//         try {
//             const response = await axios.get(api);
//             console.log(response.data);
//             setMydata(response.data);
//             setimgList(response.data.images);
//             SetDefaultImage(response.data.defaultImage);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(() => {
//         loadData();
//     }, [])



//     const ans = imglist.map((key) => {
//         return (
//             <>
//                 <img src={key} width="50" height="50" style={{border:"5px solid lightblue", margin:"5px"}}
//                 onMouseOver={()=>{SetDefaultImage(key)}} />
//                 <br/>
//             </>
//         )
//     })

//     return (
//         <>
//             <h1> Product Display</h1>
//    <div id="prodisplay">
//                 <div style={{display:"flex"}}>
//                     <div>
//                         {ans}

//                     </div>
//                     <div>
//                         <img src={DefaultImage} width="300" height="300" />
//                     </div>
//                 </div>
//                 <div>
//                 <p>Description : {mydata.description} </p>
//                     <h1> Product Name: {mydata.name}</h1>
//                     <h1>Category: {mydata.category}</h1>
//                     <h2> Price : {mydata.price}</h2>

//                 </div>
//             </div> 


//         </>
//     )
// }
// export default ProductDisplay;







// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import BackEndUrl from "../config/BackEndUrl";
// import axios from "axios";
// import "../css/ProductDisplay.css";

// const ProductDisplay = () => {
//   const { id } = useParams();
//   const [mydata, setMydata] = useState({});
//   const [imglist, setimgList] = useState([]);
//   const [DefaultImage, SetDefaultImage] = useState("");

//   const loadData = async () => {
//     let api = `${BackEndUrl}/product/productdisplay/?id=${id}`;
//     try {
//       const res = await axios.get(api);
//       setMydata(res.data);
//       setimgList(res.data.images);
//       SetDefaultImage(res.data.defaultImage);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div className="fp-page">
      
//       {/* LEFT IMAGE AREA */}
//       <div className="fp-left">

//         <div className="fp-thumbs">
//           {imglist.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               onMouseOver={() => SetDefaultImage(img)}
//               className="fp-thumb"
//             />
//           ))}
//         </div>

//         <div className="fp-main-img-box">
//           <img src={DefaultImage} className="fp-main-img" />
//         </div>

//       </div>

//       {/* RIGHT BUY BOX */}
//       <div className="fp-right">

//         <h1 className="fp-title">{mydata.name}</h1>

//         {/* Ratings */}
//         <div className="fp-rating">
//           ⭐⭐⭐⭐☆ <span>4.3 | 2,345 Ratings</span>
//         </div>

//         {/* Price */}
//         <div className="fp-price">
//           ₹ {mydata.price}
//           <span className="fp-mrp">₹ {mydata.price + 1500}</span>
//           <span className="fp-off">30% OFF</span>
//         </div>

//         {/* Offers */}
//         <div className="fp-offers">
//           <p>🏷 Bank Offer: 10% off on HDFC Cards</p>
//           <p>🚚 Free Delivery</p>
//           <p>🔁 7 Days Replacement</p>
//         </div>

//         {/* Buttons */}
//         <div className="fp-btns">
//           <button className="fp-cart">ADD TO CART</button>
//           <button className="fp-buy">BUY NOW</button>
//         </div>

//         {/* Description */}
//         <div className="fp-desc">
//           <h3>Description</h3>
//           <p>{mydata.description}</p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;





























import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import "../css/ProductDisplay.css";
import "./button.scss"
const ProductDisplay = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [mydata, setMydata] = useState({});
  const [imglist, setimgList] = useState([]);
  const [DefaultImage, SetDefaultImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const loadData = async () => {
    try {
      const api = `${BackEndUrl}/product/productdisplay/?id=${id}`;
      const res = await axios.get(api);
      setMydata(res.data);
      setimgList(res.data.images);
      SetDefaultImage(res.data.defaultImage);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // 🔥 ADD TO CART
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select size");
      return;
    }

    dispatch(
      addtoCart({
        id: mydata._id,
        name: mydata.name,
        price: mydata.price,
        category: mydata.category,
        defaultImage: mydata.defaultImage,
        size: selectedSize,
        qnty: 1,
      })
    );
  };

  // 🔥 BUY NOW
  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart"); // ya "/checkout" agar direct payment chahiye
  };

  return (
    <div className="fp-page">

      {/* LEFT IMAGE */}
      <div className="fp-left">
        <div className="fp-thumbs">
          {imglist.map((img, i) => (
            <img
              key={i}
              src={img}
              onMouseOver={() => SetDefaultImage(img)}
              className="fp-thumb"
            />
          ))}
        </div>

        <div className="fp-main-img-box">
          <img src={DefaultImage} className="fp-main-img" />
        </div>
      </div>

      {/* RIGHT BUY BOX */}
      <div className="fp-right">

        <h1 className="fp-title">{mydata.name}</h1>

        {/* Ratings */}
        <div className="fp-rating">
          ⭐⭐⭐⭐☆ <span>4.3 | 2,345 Ratings</span>
        </div>

        {/* Price */}
        <div className="fp-price">
          ₹ {mydata.price}
          <span className="fp-mrp">₹ {mydata.price + 1500}</span>
          <span className="fp-off">30% OFF</span>
        </div>

        {/* SIZE SELECTION */}
        <div className="fp-sizes">
          <h4>Select Size</h4>
          <div className="size-box">
            {mydata.sizes?.map((s) => (
              <button
                key={s.size}
                disabled={s.stock === 0}
                className={
                  selectedSize === s.size ? "size-btn active" : "size-btn"
                }
                onClick={() => setSelectedSize(s.size)}
              >
                {s.size}
              </button>
            ))}
          </div>
        </div>

        {/* OFFERS */}
        <div className="fp-offers">
          <p>🏷 10% Instant Discount on Cards</p>
          <p>🚚 Free Delivery</p>
          <p>🔁 7 Days Replacement</p>
        </div>

        {/* BUTTONS */}
        <div className="fp-btns">
          <button className="button" onClick={handleAddToCart}>
            ADD TO CART
          </button>
          <button className="button" onClick={handleBuyNow}>
            BUY NOW
          </button>
        </div>

        {/* DESCRIPTION */}
        <div className="fp-desc">
          <h3>Description</h3>
          <p>{mydata.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;






