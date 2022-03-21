import { BiMap } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Logobar = () => {
  return (
    <nav class="navbar navbar-light ">
      <div class="container-fluid">
          <a href="/">
            <img
              src="/001.png"
              alt=""
              width="140"
              height="40"
              class="d-inline-block align-text-top"
            />
          </a>
        

        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="https://m.facebook.com/CentrodeGastroSCJ/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookSquare id="icon"></FaFacebookSquare>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.instagram.com/centrogastro_sagradocorazon/?hl=es"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram id="icon"></FaInstagram>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.google.com/maps/place/Centro+de+Gastroenterolog%C3%ADa+Sagrado+Coraz%C3%B3n+De+Jes%C3%BAs/@-34.7243935,-58.2501319,19z/data=!4m5!3m4!1s0x95a32e44312de28b:0xe2227fff848c9c04!8m2!3d-34.7244368!4d-58.2496164"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BiMap id="icon"></BiMap>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Logobar;