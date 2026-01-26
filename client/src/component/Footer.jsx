import "../css/footer.css"
import "../css/footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>MyShopping</h2>
          <p>Premium shoes for comfort, performance & style.</p>

          <div className="footer-social">
          <div className="footer-social">
  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
  <a href="#"><i className="fa-brands fa-instagram"></i></a>
  <a href="#"><i className="fa-brands fa-twitter"></i></a>
  <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
  <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
</div>

          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Shop</h4>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Sports</a>
          <a href="#">New Arrivals</a>
        </div>

        {/* IMAGES / PAYMENT */}
        <div className="footer-images">
          <h4>We Accept</h4>
          <div className="payment-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo-vector.svg" />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 MyShopping. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

