import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import CustomButton from 'components/Buttons/CustomButton';
import Sidebar from 'components/Dashboard/Sidebar/Sidebar';
import React from 'react';
import { BiEnvelope, BiTrash, FaShare, BsBell } from 'react-icons/all';

import { NotificationData } from "./NotificationData"


const NotificationPage = () => {
    const classes = useStyles();

    const NotiBtn = {
        lineHeight: 'normal',
        boxShadow: '-1px 1px 14px 0px rgb(240 172 80 / 40%)',
        fontWeight: '600',
        fonSize: '14px',
        padding: '5px 15px',
        backgroundColor: '#f56616',
        color: '#fff',
        borderRadius: '2px',
        textTransform: 'capitalize',
        backgroundImage: 'none',
        margin: '0px 5px'
    }

    return (
        <>
            <div className="d-flex flex-row min-vh-100">
                <Sidebar />
                <div className={clsx(classes.main, "flex-grow-1 d-flex flex-column p-0 min-vh-100")}>
                    <div className="notification_area flex-grow-1 bg-white">
                        <div className={clsx(classes.pageheader, "mb-5 page_header")}>
                            <div className="col-12 d-flex align-items-center p-4">
                                <h1 className={clsx(classes.headerH1, "mb-0 text-uppercase ml-4")}>Notifications</h1>
                            </div>
                        </div>


                        <div className="d-flex flex-column px-5 mr-4 ml-5 py-3 mb-5">
                            <div className="notification_page_header row" style={{ backgroundColor: " rgba(0, 0, 0, 0.05)" }} >
                                <div className="col-12 d-flex align-items-center justify-content-between py-4">
                                    <div className="d-flex">
                                        <BsBell className={classes.notiBell} />
                                        <h1 className={clsx(classes.allnotitext, "mb-0")}>All Notifications</h1>
                                    </div>
                                    <div>
                                        <CustomButton style={NotiBtn} label="Delete Marked" />
                                        <CustomButton style={NotiBtn} label="Delete All" />
                                    </div>
                                </div>
                            </div>

                            {NotificationData.map((notificationItems, index) => (
                                <React.Fragment key={index}>
                                    <div className="row notification_section">
                                        <div className={clsx(classes.notiItem, "col-12 d-flex p-4 mb-1 item unread_notification")} style={{ background: (notificationItems.readstatus) ? "#eee" : "" }}>
                                            <form className="ml-4" action="/action_page.php">
                                                <div className="notification_checkbox d-flex align-items-center m-2">
                                                    <input
                                                        type="checkbox"
                                                        className=""
                                                        id="notifi_1"
                                                        name="example1"
                                                    />
                                                </div>
                                            </form>
                                            <div className="flex-grow-1 ml-4 notification_content">
                                                <div className="d-flex align-items-center mb-2">
                                                    <p className={clsx(classes.notiMessage, "d-inline-block mb-0")}>{notificationItems.message}</p>
                                                    <span className={clsx(classes.notiTime, " text-muted unread_notification_msg ")} >{notificationItems.time}</span >
                                                    {(notificationItems.readstatus) && <CustomButton style={NotiBtn} label="New" />}
                                                </div>
                                                <p className={clsx(classes.notiContent, "mb-0")}>
                                                    {notificationItems.contentmessage}
                                                </p>
                                            </div>
                                            <div className="notification_icon d-flex align-items-center">

                                                <BiEnvelope className={clsx(classes.envalop, "mx-2")} />
                                                <BiTrash className={clsx(classes.trash, "mx-2")} />
                                                <FaShare className={clsx(classes.share, "mx-2")} />
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NotificationPage;

const useStyles = makeStyles(theme => ({
    main: {
        marginLeft: '67px',
        fontSize: '28px',
        padding: '0px 10px',
        backgroundColor: '#fbf9f7',
    },
    pageheader: {
        position: 'relative',
        boxShadow: '1px 1px 10px rgb(0 0 0 / 25%)',
        backgroundColor: '#f56616',
        '&::after': {
            content: "''",
            position: "absolute",
            left: "-30px",
            top: "-30px",
            width: "60px",
            height: "60px",
            backgroundColor: "#fff",
            transform: "rotate( 45deg )",
            boxShadow: "1px 0 20px rgb(0 0 0 / 25%), inset -1px 0 6px rgb(0 0 0 / 25%)",
        }
    },
    headerH1: {
        color: "#fff",
        fontSize: "28px",
        fontWeight: 600,
        letterSpacing: "0.5px",
        fontFamily: "'Lato'",
    },
    allnotitext: {
        fontSize: "22px",
        color: "#f56616",
        fontWeight: 600,
        fontFamily: "'Lato', sans-serif",
        letterSpacing: "0.2px",
    },
    notiBell: {
        fontSize: '22px',
        marginRight: '10px',
    },
    notiItem: {
        border: '1px solid rgba(0, 0, 0, 0.1)',
    },
    notiMessage: {
        fontSize: '18px',
        fontWeight: 600,
    },
    notiTime: {
        fontSize: '16px',
        textTransform: 'capitalize',
        marginLeft: '10px',
    },
    notiContent: {
        fontSize: '14px',
        maxWidth: '1100px',
        color: '#575757',
    },
    envalop: {
        fontSize: '18px',
        color: '#f56616'
    },
    trash: {
        fontSize: '18px',
        color: '#de3847'
    },
    share: {
        fontSize: '18px',
        color: '#007bff'
    }
}))