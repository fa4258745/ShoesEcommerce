import "./button.scss";
import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addtoCart } from "../cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GallerySwiper from "./GallerySwiper";
import "../css/homeData.css";
import heroimg from "../images/banner/hero-section-img.png";
import Advertisement from "./Advertisement.jsx";
import Containerdiv from "./containerdiv";

import Adidaslogo from "../images/Logo/New folder/adidas.png";
import Nikelogo from "../images/Logo/New folder/nike.png";
import Pumalogo from "../images/Logo/New folder/puma.png";
import Reeboklogo from "../images/Logo/New folder/Reebok_-_Logo-removebg-preview.png";
import ReebokShoes from "../images/Logo/New folder/reebokshoe.png";
import PumaShoes from "../images/Logo/New folder/pumashoe.png";
import AdidasShoes from "../images/Logo/New folder/adidasshoe.png";
import NikeShoes from "../images/Logo/New folder/nikeshoes.png";
import aboutImg from "../images/Nike Sports Shoe Ad Design __ Behance/aboutus.webp";

import orangeShoe from "../images/banner/orange-shoe.jpg";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [category, setCategory] = useState("All");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // 🔹 Load products
  const loadData = async () => {
    try {
      const api = `${BackEndUrl}/product/homedisplay`;
      const res = await axios.get(api);
      console.log("Products:", res.data);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // 🔹 CATEGORY FILTER
  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (item) =>
            item.name.toLowerCase().includes(category.toLowerCase()) ||
            item.category.toLowerCase() === category.toLowerCase(),
        );

  // 🔹 PAGINATION
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  return (
    <>
      <div className="hero-section">
        <div className="content-hero-div">
          <h1 className="hero-heading">Nike Air Max</h1>
          <span className="orange">NIKE</span>
          <p style={{ fontSize: "20px" }}>
            {" "}
            For that oversized, futuristic "floating" sole.
          </p>

          <div class="btn-wrapper">
            <a href="#" class="hover-btn">
              <span>Shop Now</span>
            </a>
          </div>
        </div>
        <div>
          <div className="img-container">
            <img src={heroimg} width="100%" />
          </div>
        </div>
      </div>

      <div className="logoContainers">
        <div className="logoTrack">
          <img src={Nikelogo} width="100" />
          <img src={NikeShoes} width="100" />

          <img src={Adidaslogo} width="100" />
          <img src={AdidasShoes} width="100" />

          <img src={Reeboklogo} width="100" />
          <img src={ReebokShoes} width="100" />
          <img src={Pumalogo} width="100" />
          <img src={PumaShoes} width="100" />

          {/* duplicate for seamless loop */}
        </div>
      </div>

      {/* <>*******   SECTION 3     *******</> */}

      <h1 style={{ color: "orangered", marginTop: "50px" }} className="family">
        Our Premium Products
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <p
          onClick={() => setCategory("All")}
          className={category === "All" ? "active-cat" : ""}
        >
          All
        </p>
        <p
          onClick={() => setCategory("Nike")}
          className={category === "Nike" ? "active-cat" : ""}
        >
          Nike
        </p>
        <p
          onClick={() => setCategory("Adidas")}
          className={category === "Adidas" ? "active-cat" : ""}
        >
          Adidas
        </p>
        <p
          onClick={() => setCategory("Reebok")}
          className={category === "Reebok" ? "active-cat" : ""}
        >
          Reebok
        </p>
        <p
          onClick={() => setCategory("Puma")}
          className={category === "Puma" ? "active-cat" : ""}
        >
          Puma
        </p>
        <p
          onClick={() => setCategory("Sandals")}
          className={category === "Sandals" ? "active-cat" : ""}
        >
          Sandals
        </p>
        <p
          onClick={() => setCategory("Clogs")}
          className={category === "Clogs" ? "active-cat" : ""}
        >
          Clogs
        </p>
        <p
          onClick={() => setCategory("Boots")}
          className={category === "Boots" ? "active-cat" : ""}
        >
          Boots
        </p>
        <p
          onClick={() => setCategory("Formal")}
          className={category === "Formal" ? "active-cat" : ""}
        >
          Formal
        </p>
        <p
          onClick={() => setCategory("Flip Flops")}
          className={category === "Flip Flops" ? "active-cat" : ""}
        >
          Flip Flops
        </p>
        <p
          onClick={() => setCategory("Sketchers")}
          className={category === "Sketchers" ? "active-cat" : ""}
        >
          Sketchers
        </p>
        <p
          onClick={() => setCategory("Balenciaga")}
          className={category === "Balenciaga" ? "active-cat" : ""}
        >
          Balenciaga
        </p>
      </div>
      <div id="homedata">
        {currentProducts.map((item) => (
          <Card className="shoe-card" key={item._id}>
            <div className="shoe-img-box">
              <Card.Img
                src={item.defaultImage}
                onClick={() => navigate(`/productdisplay/${item._id}`)}
              />
              <span className="shoe-badge">NEW</span>
            </div>

            <Card.Body className="shoe-body">
              <h5>{item.name}</h5>
              <p>{item.category}</p>

              <div className="shoe-sizes">
                {item.sizes && item.sizes.length > 0 ? (
                  item.sizes.map((s) => (
                    <button
                      key={s.size}
                      disabled={s.stock === 0}
                      className={
                        selectedSize[item._id] === s.size
                          ? "size-btn active"
                          : "size-btn"
                      }
                      onClick={() =>
                        setSelectedSize({
                          ...selectedSize,
                          [item._id]: s.size,
                        })
                      }
                    >
                      {s.size}
                    </button>
                  ))
                ) : (
                  <p style={{ color: "red" }}>Sizes not available</p>
                )}
              </div>

              <div className="shoe-price-row">
                <span className="shoe-price">₹ {item.price}</span>

                <Button
                  className="button"
                  onClick={() => {
                    if (!selectedSize[item._id]) {
                      alert("Please select shoe size");
                      return;
                    }

                    dispatch(
                      addtoCart({
                        id: item._id,
                        name: item.name,
                        price: item.price,
                        category: item.category,
                        defaultImage: item.defaultImage,
                        size: selectedSize[item._id],
                        qnty: 1,
                      }),
                    );
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        <span>
          {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>

      <Containerdiv />

      <GallerySwiper />

      <Advertisement />
      <div className="aboutcontainer">
        <img src={aboutImg} width="50%" />
        <div className="aboutInfo">
          <h3>About Us</h3>
          <h1>Owner:Faraz Ahmed</h1>
          <p>Phone number: 9977667222</p>
          <p>📧 Email: farazshoes@gmail.com</p>
          <p>🕒 Timing: Mon – Sat (10AM – 9PM)</p>
          <p className="about-desc">
            We are a premium footwear store focused on comfort, durability, and
            modern street-style fashion. Our mission is to deliver authentic
            branded shoes at affordable prices.
          </p>

          <h4>Shop Location</h4>
         <div className="map-wrapper">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.658760319852!2d77.42744807447846!3d23.255501479011212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c690063a8cff3%3A0x62340ccf8613fa7a!2s80%20Feet%20Road%2C%20New%20Ashoka%20Garden%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1769281183485!5m2!1sen!2sin"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

        </div>
      </div>

      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "25px",
        }}
      >
        Experience / Stats Looks Professional
      </h3>

      <div 
      className="experience-section"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div>
          <img src={orangeShoe} width="200px" className="disNoneSHoe"/>
        </div>
        <div>
          <ul className="about-features">
            <h2>Trusted Brand</h2>
            <li>✔ 100% Original Products</li>
            <li>✔ Trusted Brands (Nike, Adidas, Puma)</li>
            <li>✔ Affordable Pricing</li>
            <li>✔ Easy Returns</li>
            <li>✔ Fast Delivery</li>
          </ul>
        </div>
        <div>
          <img src={orangeShoe} width="200px" />
        </div>
        <div>
          <div className="about-stats">
            <div>
              <h2>Experience</h2>
              <h2>5+</h2>
              <p>Years Experience</p>
            </div>
            <div>
              <h2>10k+</h2>
              <p>Happy Customers</p>
            </div>
            <div>
              <h2>50+</h2>
              <p>Brands Available</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
