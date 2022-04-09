import { makeStyles } from '@material-ui/styles';
import { Tabs } from 'antd';
import clsx from 'clsx';
import CustomButton from 'components/Buttons/CustomButton';
import { Link } from 'react-router-dom';


const NotificationCards = () => {
    const classes = useStyles();
    const { TabPane } = Tabs;

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
            <section
                className="notification_window px-3 py-4 theme_font"
            >
                <span></span>
                <div className="">
                    <div className="card border-0">
                        <div className="card-header notification_heading bg-transparent">
                            <h1 className={classes.heading}>Notifications</h1>
                        </div>
                        <div id="aa" className="card-body">
                            <Tabs defaultActiveKey="1" >
                                <TabPane tab="All" key="1">
                                    <div className={classes.notificationitem}>
                                        <div className="d-flex align-items-start">
                                            <h3 className={clsx(classes.projectheading, "d-inline-block")}>Project 1</h3>
                                            <span style={{ marginLeft: 'auto' }} className="text-muted ml-auto notification_time">Just Now</span>
                                        </div>
                                        <p className="mb-0">Your project is ready to manage</p>
                                    </div>
                                </TabPane>
                                <TabPane tab="Unread" key="2">
                                    <div className={classes.notificationitem}>
                                        <div className="d-flex align-items-start">
                                            <h3 className={clsx(classes.projectheading, "d-inline-block")}>Project 1</h3>
                                            <span style={{ marginLeft: 'auto' }} className="text-muted ml-auto notification_time">Just Now</span>
                                        </div>
                                        <p className="mb-0">Your project is ready to manage</p>
                                    </div>
                                    <div className={classes.notificationitem}>
                                        <div className="d-flex align-items-start">
                                            <h3 className={clsx(classes.projectheading, "d-inline-block")}>Project 2</h3>
                                            <span style={{ marginLeft: 'auto' }} className="text-muted ml-auto notification_time">Just Now</span>
                                        </div>
                                        <p className="mb-0">Your project is ready to manage</p>
                                    </div>

                                </TabPane>
                                <TabPane tab="Personal" key="3">
                                    <p>3</p>

                                </TabPane>
                            </Tabs>

                            <div className="all_notification_btn text-right" style={{ textAlign: 'end' }}>
                                <Link to="/notification"> <CustomButton style={NotiBtn} label="See All" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NotificationCards;

const useStyles = makeStyles(theme => ({

    heading: {
        letterSpacing: '0.35px',
        fontWeight: 600,
        fontSize: '1.5rem'
    },
    notificationTab: {
        '&>li': {
            listStyle: 'none',
            display: 'inline-block',
            margin: '0 12px',
        }
    },
    notificationitem: {
        padding: '10px 15px',
        background: 'rgba(245, 102, 22, 0.1)',
        marginBottom: '6px',
        borderRadius: '5px',
        position: 'relative',
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '3px',
            height: '100%',
            backgroundColor: '#f56616',
            top: '0',
            left: '0',
        }
    },
    projectheading: {
        fontSize: '18px'
    }
}))