import "./Footer.css";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="footer">
      <p className="footer-text">
        <span>Copy Rights &copy; </span>Web Developer Hadi Zellaya 2024
      </p>
      <ul>
        <li>
          <a href="/">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="/">
            <FaInstagramSquare />
          </a>
        </li>
        <li>
          <a href="/">
            <FaSquareXTwitter />
          </a>
        </li>
        <li>
          <a href="/">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}
