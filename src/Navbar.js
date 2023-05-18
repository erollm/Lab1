import Logo from "./assets/images/cvlogo.png";
import {ReactComponent as SearchIcon} from "./assets/icons/search.svg";
import {ReactComponent as BookmarkIcon} from "./assets/icons/bookmark.svg";
import {ReactComponent as WatchLaterIcon} from "./assets/icons/clock.svg";
import {ReactComponent as UserIcon} from "./assets/icons/user.svg";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg 4 ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/HomeScreen"><img src={Logo} alt=""/></a>
                <button className="navbar-toggler" type="button"style={{background: 'white' }} data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-white active" aria-current="page" href="/Categories">Categories</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0" id="navbarListIcon">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/SearchPage"><SearchIcon/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/MyLibrary"><BookmarkIcon/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/WatchLater"><WatchLaterIcon/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active " aria-current="page" href="/Profile"><UserIcon/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;