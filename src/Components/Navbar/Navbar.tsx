import "../Navbar/Navbar.css"
import { BsCart2, BsHeart, BsSearch } from "react-icons/bs";


function Navbar() {
    return (
        <div className="navbar-light bg-colour navbar-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-12 d-lg-inline">
                        <nav className="navbar navbar-expand-lg navbar-light bg-colour">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="d-lg-none d-flex justify-content-center">
                                <button className="nav-link navbtn">
                                    <BsSearch />
                                </button>
                                <button className="nav-link navbtn">
                                    <BsHeart />
                                </button>
                                <button className="nav-link navbtn">
                                    <BsCart2 />
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home</a>
                                        <div className="line"></div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Shopy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Our Story</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">wholeSale</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Offer</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-3 d-none d-lg-inline align-self-center">
                        <div className="d-flex justify-content-lg-center justify-content-end">
                            <button className="nav-link navbtn">Login</button>
                            <button className="nav-link navbtn">
                                <BsSearch />
                            </button>
                            <button className="nav-link navbtn">
                                <BsHeart />
                            </button>
                            <button className="nav-link navbtn">
                                <BsCart2 />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar