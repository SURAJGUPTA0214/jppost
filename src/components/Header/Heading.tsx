import React from "react";
import { makeStyles } from '@material-ui/styles';
import logo from "../../assets/images/logo.png";
import CustomButton from "components/Buttons/CustomButton";
import { Link, NavLink } from "react-router-dom";
import NavData from "./NavData";
import Notification from "components/Notification/Notification";
import { GiHamburgerMenu } from "react-icons/gi";


const NavbarHeader = () => {
    const classes = useStyles();
    const [scroll, setScroll] = React.useState<boolean>(false);
    const [showMediaIcons, setShowMediaIcons] = React.useState<boolean>(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10)
        })
    }, [])
    const path = window.location.pathname.split("/")[1];
    console.log(path, "pathname")

    return (
        <>
            <header id="master-head" className={scroll ? "navbar menu-absolute menu-center scrolled" : "navbar menu-absolute menu-center"}>
                <div className="container">
                    <div id="main-logo" className={classes.logocontainer}>
                        <Link className="logo" to="/home">
                            <img src={logo} className={classes.logo} alt="EasyAPI" />
                        </Link>
                    </div>

                    <div id="navigation" className="nav navbar-nav navbar-main mx-auto">
                        <span className={classes.closebtn}></span>
                        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                            <ul id="main-menu" className={classes.menuprimary}>
                                {
                                    NavData.map((item, i) => (
                                        <li key={i} className={classes.menuitems} >
                                            <NavLink
                                                className="Nav_link"
                                                activeClassName={(window.location.pathname===item.Link) ? "activeRoute" : ""}
                                                // activeStyle={{ color: '#f56616' }}
                                                to={item.Link}>{item.Title}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div style={{ margin: '0px 20px' }}>
                        <div>
                            <Notification />
                        </div>
                    </div>

                    <div className="navbar-right ml-auto mr-5 mr-lg-0 d-none d-lg-block ml-lg-4">
                        <div className="menu-button">
                            <NavLink to="/login">
                                <CustomButton label="Sign In" />
                            </NavLink>
                        </div>
                    </div>

                    {/* <div className="menu-toggle-btn" id="toggle_menu_btn">
                        <Link to="" className="navbar-toggle">
                            <div className="burger-lines" onClick={() => setShowMediaIcons(!showMediaIcons)}>hh</div>
                        </Link>
                    </div> */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </header >
        </>
    )
}
export default NavbarHeader;


const useStyles = makeStyles(theme => ({
    logocontainer: {
        padding: '25px 0px 25px',
    },
    logo: {
        display: 'inline-block',
        maxHeight: '50px'
    },
    closebtn: {
        height: '32px',
        width: '32px',
        position: 'absolute',
        left: '30px',
        top: '30px',
        cursor: 'pointer',
    },
    menuprimary: {
        display: 'inline-block',
        marginBottom: '0rem'
    },
    menuitems: {
        display: 'inline-block',
        padding: '0px 10px',
        fontWeight: 600,
        position: 'relative',
    }

}));