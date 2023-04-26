import Logo from "./logo"
import NavMenu from "./NavMenu"
import './header.css'
const Header =()=>{
    return(
        <header className="header">
            <Logo/>
            <NavMenu/>

        </header>
    )
}
export default Header;