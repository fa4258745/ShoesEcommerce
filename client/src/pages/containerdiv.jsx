import reebokdiv from "../images/Logo/New folder/Reebok_-_Logo-removebg-preview.png";
import pumadiv from "../images/Logo/New folder/puma.png";
import adidasdiv from "../images/Logo/New folder/adidas.png";
import nikediv from "../images/Logo/New folder/nike.png";

import reebokshoe from "../images/Logo/New folder/reebokshoe.png";
import pumashoe from "../images/Logo/New folder/pumashoe.png";
import adidasshoe from "../images/Logo/New folder/adidasshoe.png";
import nikeshoe from "../images/Logo/New folder/nikeshoes.png";


import "../css/containerdiv.css"



import AdvidAdidas2 from "../video/AdidasANimate1.mp4";
import AdvidNike2 from "../video/Nikeanimated.mp4";
import AdvidUnderArmour2 from "../video/UnderArmourAnimate.mp4";
import AdvidPuma2 from "../video/From KlickPin CF Rate these _ Shoe advertising Shoes photography Discount sneakers.mp4";
import "../css/advertisement.css";

const ContainerDiv = () => {
  return (
    <div>
       {/* <>*******   SECTION 2     *******</> */}
       <h1 className="familyh2" style={{color:"orangered",marginTop:"20px"}}>New Arrivals</h1>
      <div className="main-divshoes">
        <div className="reebokshoe">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "2px 10px",
            }}
          >
            <div>
              <img src={reebokdiv} className="logo" />
            </div>
            <p style={{ color: "black" }}>$20000</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "black",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2>Reebok Zig Kinetica Edge</h2>
            <p>
              {" "}
              The Reebok Zig Kinetica Edge blends futuristic design with
              responsive performance technology.{" "}
            </p>
          </div>
          <img src={reebokshoe} width="250px" className="reebokimg" />
        </div>

        <div className="pumashoe">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "2px 10px",
            }}
          >
            <div>
              <img src={pumadiv} className="logo" />
            </div>
            <p style={{ color: "black" }}>$30000</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "black",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2>Puma Deviate Nitro 3</h2>
            <p>
              Built for speed and endurance, the Puma Deviate Nitro 3 delivers
              explosive performance with NITRO™ foam cushioning
            </p>
          </div>
          
          <img src={pumashoe} className="pumaimg" width="250px" />
        </div>
        <div className="adidasshoe">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "2px 10px",
            }}
          >
            <div>
              <img src={adidasdiv} className="logo" />
            </div>
            <p>$5000</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "black",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2>Adidas Harden-Inspired Basketball Shoe</h2>
            <p>
              These Adidas Harden-inspired basketball sneakers are engineered
              for agility, control, and explosive 
            </p>
          </div>

          <img src={adidasshoe} width="250px" />
        </div>
        <div className="nikeshoe">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "2px 10px",
            }}
          >
            <div>
              <img src={nikediv} className="logo" />
            </div>
            <p>$5400</p>
          </div>
               <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "black",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2>Nike Adapt-Style Performance </h2>
            <p>
          Designed for innovation lovers, this Nike Adapt-style trainer features a sleek, futuristic build with a snug 
            </p>
          </div>
          <img src={nikeshoe} width="250px" />
        </div>
      </div>









    <div className="ad-container">

      <div className="ad-card">
        <video src={AdvidAdidas2} autoPlay loop muted playsInline />
      </div>

      <div className="ad-card">
        <video src={AdvidUnderArmour2} autoPlay loop muted playsInline />
      </div>

      <div className="ad-card">
        <video src={AdvidNike2} autoPlay loop muted playsInline />
      </div>

      <div className="ad-card">
        <video src={AdvidPuma2} autoPlay loop muted playsInline />
      </div>

    </div>










    </div>





// video2










  )
}

export default ContainerDiv
