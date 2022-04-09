import React from "react";
import { makeStyles } from '@material-ui/styles';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Notification from "components/Notification/Notification";
import profileimage from "assets/images/profileimage.jpg";
import { Dropdown, Menu } from "antd";
import clsx from "clsx";


const Headingstart = () => {
    const classes = useStyles();

    const menu = (
        <Menu>
            <Menu.Item>
                <p>hello</p>
            </Menu.Item>
        </Menu>
    )

    return (
        <>
            <header id="master-head" className="navbar menu-absolute menu-center scrolled" >
                <div className="container">
                    <div id="main-logo" className={classes.logocontainer}>
                        <Link className="logo" to="/home">
                            <img src={logo} className={classes.logo} alt="EasyAPI" />
                        </Link>
                    </div>
                    <div className="d-flex">
                        <div style={{ margin: '7px 20px' }}>
                            <div>
                                <Notification />
                            </div>
                        </div>

                        <div className="navbar-right ml-auto mr-5 mr-lg-0 d-none d-lg-block ml-lg-4">
                            <Dropdown overlay={menu} placement="bottomRight">
                                <div className="d-flex justify-content-center">
                                    <img className={clsx(classes.profileimg, "")} src={profileimage} width="30" alt="" />
                                    <div className={classes.profilename}>
                                        <span className="user_name">Hey, <strong>Joshua</strong></span>
                                    </div>
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Headingstart;


const useStyles = makeStyles(theme => ({
    logocontainer: {
        padding: '25px 0px 25px',
    },
    logo: {
        display: 'inline-block',
        maxHeight: '50px'
    },

    profileimg: {
        borderRadius: '50%',
        boxShadow: '0px 0px 20px 3px rgb(0 0 0 / 25%)',
        width: '40px',
        marginRight: '10px'
    },
    profilename: {
        display: 'flex',
        alignItems: 'center'
    }

}));