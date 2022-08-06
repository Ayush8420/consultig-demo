import { FC } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "../styles/Social.module.scss";

const Social: FC = () => {
  return (
    <div className={styles.social}>
      <ul>
        {[FaFacebook, FaTwitter, FaYoutube, FaLinkedin].map((Icon, i) => (
          <li key={i}>
            <a href="#">{<Icon />}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
