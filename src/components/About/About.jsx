import "./About.css";
import image2 from "../../assets/3.webp";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AboutPageCard } from "../Cards/Cards";
const About = () => {
  return (
    <section id="About" className="AboutPage">
      <div className="AboutContainer">
        <div className="imgDiv">
          <img className="img" src={image2} alt="" />
        </div>

        <div className="About-socials">
          <a href="https://www.facebook.com/hishanshrestha1" target="_Blank">
            <FaFacebook size={30} />
          </a>

          <a href="https://github.com/hishanstha420" target="_Blank">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/hishan-shrestha-2a03a5225/" target="_Blank">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com/Hishan_Shrestha" target="_Blank">
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
      <div className="About__content">
        <h1>Hello</h1>
        <h3>I am Frontend Developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis
          eveniet, illum distinctio quam suscipit provident ab maiores in ipsa
          iste atque, consequuntur voluptatibus repudiandae, consectetur
          repellat modi. Enim, et?
        </p>
        <div className="Contact">
          <div className="Container">
            <AboutPageCard fieldName="Name" value="Hishan Shrestha" />
            <AboutPageCard
              fieldName="Email"
              value="hishanshrestha29@gmail.com"
            />
            <AboutPageCard fieldName="Phone" value="+9779823715263" />
            <AboutPageCard fieldName="Address" value="Kathmandu, Nepal" />
          </div>
        </div>
        <div className="btn-box">
          <a href="/Hishan_CV.pdf" download="Hishan_CV" target="_Blank">
            Hire Me
          </a>
          <a href="#Contact">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};
export default About;
