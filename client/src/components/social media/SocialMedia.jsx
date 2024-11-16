import "./SocialMedia.css";
import { socialMediaData } from "../../data/data";
import { FaInstagram } from "react-icons/fa";
export default function SocialMedia() {
  return (
    <div className="social-section">
      <div className="social-title">
        <h1>Social Media</h1>
        <p>Check Our Content On Different Social Media Platforms!</p>
      </div>
      <div className="social-images">
        {socialMediaData.map((post) => {
          return (
            <div key={post.id} className="social-image">
              <img src={post.image} alt="post" />
              <div className="thumb">
                <h4>{post.title}</h4>
                <FaInstagram className="thumb-icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
