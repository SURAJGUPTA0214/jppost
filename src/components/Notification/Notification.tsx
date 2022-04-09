
import { BsBell } from "react-icons/all";
import { Menu, Dropdown } from 'antd';
import Notificationimage from "assets/images/notificationimage.jpg";
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";


const Notification = () => {
    const classes = useStyles();

    const menu = (
        <Menu>
            <Menu.Item>
                <div className="timeline-panel d-flex">
                    <div className="media mr-2">
                        <img alt="" width="50" src={Notificationimage} />
                    </div>
                    <div className={classes.mediabody}>
                        <p className={classes.text}>Dr sultads Send you Photo</p>
                        <small className="d-block" style={{ color: "#555" }} >29 July 2020 - 02:26 PM</small>
                    </div>
                </div>
            </Menu.Item>
            <Menu.Item>
                <div className="timeline-panel d-flex">
                    <div className="media mr-2">
                        <img alt="" width="50" src={Notificationimage} />
                    </div>
                    <div className={classes.mediabody}>
                        <p className={classes.text}>Dr sultads Send you Photo</p>
                        <small className="d-block" style={{ color: "#555" }} >29 July 2020 - 02:26 PM</small>
                    </div>
                </div>
            </Menu.Item>
            <div className="mt-3" style={{ borderTop: '1px solid grey ' }}>
                <Link to="/notification">
                    <p className={classes.allnotification}>See all Notification</p>
                </Link>
            </div>
        </Menu>
    );
    return (
        <>
            <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                <BsBell />
            </Dropdown>
        </>
    )
}
export default Notification;

const useStyles = makeStyles(theme => ({

    mediabody: {
        marginLeft: "10px"
    },
    text: {
        fontWeight: 500,
        fontSize: '16px',
        marginBottom: '5px'
    },
    allnotification: {
        color: '#f56616',
        textAlign: 'center',
        marginTop: '15px',
        fontWeight: 'bold',
    }

}))