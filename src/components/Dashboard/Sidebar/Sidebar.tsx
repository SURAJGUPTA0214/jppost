import React from "react";
import logo from "assets/images/logo.png";
import clsx from "clsx";
import { makeStyles } from '@material-ui/styles';
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData"
import { ImUserPlus } from "react-icons/im";
import ModalPopup from "components/Modal/ModalPopup";
import { FaUserCircle, AiOutlineMail, BiLink } from "react-icons/all";
import CustomButton from "components/Buttons/CustomButton";
import NotificationCards from "components/Notification/NotificationCards";
import profileimage from "assets/images/profileimage.jpg";



const Sidebar = () => {
    const classes = useStyles();
    const [modalNoticification, setModalNoticification] = React.useState<boolean>(false);
    const [modalUser, setModalUser] = React.useState<boolean>(false);


    return (
        <>
            {/* <!-- **************************side bar start******************************** --> */}
            <div className={clsx(classes.sidenav, "sidenav d-flex flex-column")}>
                <div id="main-logo" className="logo-container p-0">
                    <Link className={clsx(classes.logo, "")} to="">
                        <img src={logo} className="logo-dark" alt="EasyAPI" />
                    </Link>
                </div>

                <ul className="d-flex flex-column justify-items-center flex-grow-1 side_menu_ul" >
                    {
                        SidebarData.map((items, index) => (
                            <React.Fragment key={index}>
                                {
                                    (items.name !== "notification") ?
                                        <NavLink exact={(index === 0) ? true : false} activeClassName="sidebaractiveRoute" to={items.link} style={{ marginTop: (index === 3) ? "auto" : "" }}>
                                            <li id="link_menu" className={classes.list} >
                                                {items.icon}
                                            </li>
                                        </NavLink>
                                        :
                                        <li id="link_menu" onClick={() => setModalUser(true)} className={classes.list}  >
                                            {items.icon}
                                        </li>
                                        
                                }

                            </React.Fragment>
                        ))
                    }
                    <li id="link_menu" className={classes.list} onClick={() => setModalNoticification(true)} >
                        <ImUserPlus />
                    </li>
                    <li className="d-flex justify-content-center">
                        <Link to="/startproject">
                            <img className={clsx(classes.profileimg, "")} src={profileimage} width="30" alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <!--************************** sidebar end************************************* --> */}
            <ModalPopup visible={modalNoticification} onCancel={() => setModalNoticification(false)}>
                <>
                    <div className="invite_header d-flex align-items-center mb-4 pb-2">
                        <FaUserCircle className={classes.usersvg} />
                        <h2 className={clsx(classes.poopupHeader, "invite_hadder d-inline-block mb-0")}>Add New Member</h2>
                    </div>
                    <div className="invite_content">
                        <div className="copy_link my-4">
                            <BiLink className={classes.svg} />
                            <h4 className={clsx(classes.h4, "d-inline-block theme_font mb-3")}>Invitaion Link</h4>
                            <div className="d-flex align-items-center">
                                <input className={clsx(classes.inputClass, "invite_link theme_font flex-grow-1")}
                                    type="text"
                                    value="https://Project_invite_link"
                                />
                                <CustomButton label="Copy" />
                            </div>
                        </div>
                        <hr style={{ marginTop: '26px' }} />
                        <div className="email_invite my-4">
                            <AiOutlineMail className={classes.svg} />
                            <h4 className={clsx(classes.h4, "d-inline-block theme_font mb-3")}>Email Invitation</h4>
                            <div className="d-flex align-items-center">
                                <input className={clsx(classes.inputClass, "theme_font flex-grow-1")} type="text" placeholder="Invitaion Email" />
                                <CustomButton label="Invite" />
                            </div>
                        </div>
                    </div>
                </>
            </ModalPopup>

            <ModalPopup style={{ margin: '0', marginLeft: '80px' }} visible={modalUser} onCancel={() => setModalUser(false)}>
                <>
                    <NotificationCards />
                </>
            </ModalPopup>


        </>
    )
}
export default Sidebar;

const useStyles = makeStyles(theme => ({
    sidenav: {
        height: '100vh',
        width: '67px',
        position: 'fixed',
        zIndex: 2,
        top: '0',
        left: '0',
        backgroundColor: '#fff',
        boxShadow: '2px 0 15px -4px rgb(0 0 0 / 20%)',
    },
    logo: {
        padding: '6px 8px 6px 16px',
        display: 'block'
    },

    list: {
        position: 'relative',
        textAlign: 'center',
        margin: '12px 0',
        fontSize: '20px',
        color: '#575757',
        transition: 'filter 0.2s ease-in-out',
    },
    usersvg: {
        color: 'rgba(245, 102, 22, 0.7)',
        marginRight: '10px',
        fontSize: '26px'
    },
    poopupHeader: {
        color: '#181818',
        fontSize: '24px',
    },
    inputClass: {
        marginRight: '15px',
        padding: '5px 10px',
        color: '#575757',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid rgba(0, 0, 0, 0.3)',
        outline: '0',
    },
    svg: {
        color: '#575757',
        fontSize: '18px',
        marginBottom: '5px',
        marginRight: '10px'
    },
    h4: {
        fontSize: '18px'
    },
    profileimg: {
        borderRadius: '50%',
        boxShadow: '0px 0px 20px 3px rgb(0 0 0 / 25%)',
        width: '40px',
        marginRight: '10px'
    },

}))