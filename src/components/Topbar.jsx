import './topbar.scss'
import person from "../assets/logo.png"
import flag from "../assets/flag.gif"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className="left">
                    <div className='logoContainer'><a href="#intro" className='logo'>
                      <img className='pic' src={person}  alt="" />
                    </a></div>
                    <div className="itemContainer">
                    <i class="fa-solid fa-phone-volume"></i>
                        <span>+977 9748 284 837 </span>
                    </div>
                    <div className="itemContainer">
                    <i class="fa-solid fa-envelope"></i>
                        <span><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgCwCKWFFlxJsKRBdKCDDdqlkpSnjJfTSlNrJrfNcKHlLvldgWRSDLlfQvmBmnPffvJxq" target="_blank">anupshrestha40@gmail.com</a></span>
                    </div>
                </div>
                <div className="mid">
                <img src={flag} alt="" />
                </div>
                <div className="right">
                    <div className="social">
                   <div className="social-icon"><a href="https://www.facebook.com/anupsht012"  target="_blank"><i class="fa-brands fa-facebook"></i></a></div>
                   <div className="social-icon"><a href="https://www.linkedin.com/in/anup-shrestha-3274561a2/"  target="_blank"><i class="fa-brands fa-linkedin"></i></a></div>
                   <div className="social-icon"><a href="https://www.youtube.com/AnupShrestha?sub_confirmation=1"  target="_blank"><i class="fa-brands fa-youtube"></i></a></div>
                   <div className="social-icon"><a href="https://github.com/anupsht012"><i class="fa-brands fa-github"  target="_blank"></i></a></div>
                    </div>
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <i class="fa-solid fa-bars"></i>
                    <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
