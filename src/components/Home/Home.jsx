import image1 from "../../assets/1.png"
import './home.css'
const Home =()=>{
    return(
        <section id="Home" className="HomePage" >
            <div className="Home__content">
                <h1>Hello I'm</h1>
                <h1> Hishan Shrestha</h1>
                <h3>Frontend Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis eveniet, illum distinctio quam suscipit provident ab maiores in ipsa iste atque, consequuntur voluptatibus repudiandae, consectetur repellat modi. Enim, et?</p>
               
            </div>
            <div className="imgDiv">
                <img className="img" src={image1} alt="" />
            </div>
            

        </section>
    )
}
export default Home;