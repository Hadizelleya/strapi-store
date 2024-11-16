import "./Ratings.css";
import { FaQuoteLeft } from "react-icons/fa";
import exploreImage1 from "./explore-image-01.jpg";
import exploreImage2 from "./explore-image-02.jpg";
export default function Ratings() {
  return (
    <div className="explore-container">
      <div className="left">
        <div className="explore-heading">
          <h2 className="explore-title">Explore Our Products</h2>
          <p>
            You are allowed to use this HexaShop HTML CSS template. You can feel
            free to modify or edit this layout. You can convert this template as
            any kind of ecommerce CMS theme as you wish.
          </p>
        </div>
        <div className="note">
          <FaQuoteLeft className="quote-icon" />
          <p>All Our Products Are Made In Stylish And Amazing Quality.</p>
        </div>
        <div className="explore-footer">
          <p>
            There are 5 pages included in this HexaShop Template and we are
            providing it to you for absolutely free of charge at our TemplateMo
            website. There are web development costs for us.
          </p>
          <p>
            If this template is beneficial for your website or business, please
            kindly support us a little via PayPal. Please also tell your friends
            about our great website. Thank you.
          </p>
          <button className="explore-button"> Discover More</button>
        </div>
      </div>
      <div className="right">
        <div className="row">
          <div className="explore-box-text">
            <h4 className="explore-box-title">Leather Bags</h4>
            <p className="explore-box-desc">Latest Collection</p>
          </div>
          <div className="explore-box">
            <img src={exploreImage1} alt="explore" />
          </div>
        </div>
        <div className="row">
          <div className="explore-box">
            <img src={exploreImage2} alt="explore" />
          </div>
          <div className="explore-box-text">
            <h4 className="explore-box-title">Different Types</h4>
            <p className="explore-box-desc">Over 304 Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}
