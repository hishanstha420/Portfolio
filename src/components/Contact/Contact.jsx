import { useState } from "react";
import {
  IoPhonePortrait,
  IoMail,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoFacebook
} from "react-icons/io5";
import "./Contact.css";
export const Contact = () => {
    const [formInput , SetFormInput]=useState({
        name:"",
        email:"",
        message:""

    })
    const handleChange=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        SetFormInput({...formInput,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formInput.name || formInput.email || formInput.message)
        {
            alert("Thank you for your message")
        }
        else{
            alert("Please fill the form")
        }
        
    }
  return (
    <section id="Contact" className="ContactPage">
        <h1 className="ContactMe">Contact Me</h1>
      <div className="ContactWrapper">
      
        <div className="ContactInfo">
          
          <a
            className="infoLink"
            style={{ margin: "10px" }}
            href="tel:+9779823715263"
          >
            <IoPhonePortrait size={30} /> +9779823715263
          </a>
          <br />
          <a className="infoLink" href="mailto:hishanshrestha29@gmail.com">
            <IoMail size={30} /> hishanshrestha29@gmail.com
          </a>
          <br />
          <a className="infoLink" href="https://twitter.com/Hishan_Shrestha">
            <IoLogoTwitter color="#1877f2" size={30} /> Hishan Shrestha
          </a>{" "}
          <br />
          <a className="infoLink" href="https://www.linkedin.com/in/hishan-shrestha-2a03a5225/">
            <IoLogoLinkedin color="#1877f2" size={30} /> Hishan Shrestha
          </a>
          <br />
          <a className="infoLink" href="https://www.facebook.com/hishanshrestha1">
            <IoLogoFacebook color="#1877f2" size={30} /> Hishan Shrestha
          </a>
        </div>
        <form className="Form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter your message"
            onChange={handleChange}
          ></textarea>
            <br />
            <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};
