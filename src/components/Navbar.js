import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark bg-transparent border-5">
            <div className="container">
                <Link className="navbar-brand" to="/EldenRingWiki-React-"><strong>Elden Ring Guider</strong></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent-7"
                        aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">x</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-7" data-toggle="dropdown"
                               aria-haspopup="true"
                               aria-expanded="false">Dropdown </a>
                            <div className="dropdown-menu dropdown-pink" aria-labelledby="navbarDropdownMenuLink-7">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav mt-2" style={{marginLeft: '290px'}}>
                        <li> <input className="text-white mx-3 h-100 bg-dark" type="search" placeholder="Search website"/>  <button className="btn btn-dark" type="submit">Search</button>  </li>


                        <li ><a className="mx-3 btn btn-dark" href="#"><span
                            className="glyphicon glyphicon-user"/> Sign Up</a></li>
                        <li><a className="btn btn-dark" href="#"><span
                            className="glyphicon glyphicon-log-in"/> Login</a></li>

                    </ul>

                </div>
            </div>
        </nav>

    );
};

export default Navbar;
