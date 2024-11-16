import "./Subscribtion.css";
import { FaTelegramPlane } from "react-icons/fa";

export default function Subscribtion() {
  return (
    <div className="subscribtion">
      <div className="sub-left">
        <div className="sub-title">
          <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
          <p>
            Details to details is what makes Hexashop different from the other
            themes.
          </p>
        </div>
        <form className="form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email Address" />
          <button type="submit">
            <FaTelegramPlane />
          </button>
        </form>
      </div>
      <div className="sub-right">
        <div className="info-1">
          <div className="info-head">
            <h4>Store Location:</h4>
            <p>Lebanon, Beirut</p>
          </div>
          <div className="info-head">
            <h4>Phone Number:</h4>
            <p>+961000000</p>
          </div>

          <div className="info-head">
            <h4>Social Media:</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>TikTok</p>
            <p>Linkedin</p>
          </div>
        </div>
        <div className="info-1">
          <div className="info-head">
            <h4>Work Hours:</h4>
            <p>07:30 AM - 9:30 PM</p>
            <p>Daily</p>
          </div>
          <div className="info-head">
            <h4>Email:</h4>
            <p>HadiZellaya@company.com</p>
          </div>
          <div className="info-head">
            <h4>Office Location:</h4>
            <p>Lebanon, Beirut</p>
            <p>Lebanon, Nabatiyeh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
