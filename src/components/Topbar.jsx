import './topbar.scss'
// import MailIcon from '@mui/icons-material/Mail';
// import PersonIcon from '@mui/icons-material/Person';
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && "active")}>
            <div className='wrapper'>
                <div className="left">
                    <a href="#intro" className='logo'>
                       LoGo
                    </a>
                    <div className="itemContainer">
                    <i class="fa-solid fa-user"></i>
                        <span>+44 547781 522</span>
                    </div>
                    <div className="itemContainer">
                    <i class="fa-solid fa-user"></i>
                        <span>xyz@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <i class="fa-solid fa-bars"></i>
                    <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
