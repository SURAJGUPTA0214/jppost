
import { Tabs } from 'antd';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { RightSidebarData } from "./RightSidebarData";
import { Collapse } from 'antd';
import { BiTask, MdPermDeviceInformation, RiTeamLine, SiAutotask } from 'react-icons/all';
import { Link } from 'react-router-dom';



const RightSidebar = () => {
    const classes = useStyles();
    const { TabPane } = Tabs;
    const { Panel } = Collapse;
    return (
        <>

            <div className={clsx(classes.card_body, "pt-0")}>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Details" key="1">
                        <div className="px-0 py-2 my-2">
                            <form className="search_msg mb-3" action="">
                                <input type="text" className="form-control" placeholder="Search" />
                            </form>

                            <Collapse accordion defaultActiveKey={['1']}>
                                <Panel showArrow={false} header={<><MdPermDeviceInformation className={classes.collapsesvg} /> <span className={classes.collapseheader}>{RightSidebarData.infoname}</span></>} className={classes.infoname} key="1">
                                    <p>{RightSidebarData.text} </p>
                                </Panel>

                                <Panel showArrow={false} header={<> <RiTeamLine className={classes.collapsesvg} />  <span className={classes.collapseheader}>{RightSidebarData.Team}</span></>} key="2">
                                    <div className={classes.listgroup}>
                                        {
                                            RightSidebarData.teamdata.map((teammember, i) => (
                                                <Link to="" key={i} className="d-flex text-decoration-none mb-2 py-2"
                                                    style={{ backgroundColor: "rgba(245, 102, 22, 0.03)" }}>
                                                    <div className="d-flex align-items-center w-100">
                                                        <figure className="chat_avatar mr-3 mb-0 mr-1" style={{ width: "40px" }}>
                                                            <img src={teammember.profileimg} style={{ borderRadius: "6px" }} alt="" />
                                                        </figure>
                                                        <div className="user_details position-relative flex-grow-1" style={{ padding: "5px" }}>
                                                            <h4 className={classes.profilename}>
                                                                {teammember.name}
                                                            </h4>
                                                            <small className="text-muted">{teammember.email}</small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </Panel>
                                <Panel showArrow={false} header={<> <BiTask className={classes.collapsesvg} /> <span className={classes.collapseheader}> {RightSidebarData.taskstatus}</span> </>} key="3">
                                    {RightSidebarData.taskststusdata.map((taskdata, ind) => (
                                        <div key={ind}>
                                            <h6>{taskdata.task1}</h6>
                                            <h6>{taskdata.task2}</h6>
                                            <h6>{taskdata.task3}</h6>
                                        </div>
                                    ))}
                                </Panel>
                                <Panel showArrow={false} header={<> <SiAutotask className={classes.collapsesvg} /> <span className={classes.collapseheader}>{RightSidebarData.reportname}</span> </>} key="4">
                                    <p>{RightSidebarData.Reportdetails}</p>
                                </Panel>
                            </Collapse>
                        </div>
                    </TabPane>

                    <TabPane tab="Activity" key="2">
                        <div className={classes.notificationitem}>
                            <div className="d-flex align-items-start">
                                <h3 className={clsx(classes.projectheading, "d-inline-block")}>Project 1</h3>
                                <span style={{ marginLeft: 'auto' }} className="text-muted ml-auto notification_time">Just Now</span>
                            </div>
                            <p className="mb-0">Your project is ready to manage</p>
                        </div>
                    </TabPane>

                </Tabs>

            </div>
        </>
    )
}
export default RightSidebar;

const useStyles = makeStyles(theme => ({

    card_body: {
        flex: "1 1 auto",
        minHeight: "1px",
        padding: "1.25rem",
    },
    info: {
        fontSize: '14px',
        color: '#181818',
        fontWeight: 600,
        padding: '8px 15px',
        width: '100%',
    },
    listgroup: {
        display: 'flex',
        flexDirection: 'column'
    },
    profilename: {
        color: '#181818',
        fontSize: '14px',
    },
    infoname: {
        '&>.ant-collapse-header:before': {
            content: "\f00b",
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
    },
    collapsesvg: {
        color: '#f56616',
        fontSize: '18px',
        marginRight: '10px'
    },
    collapseheader: {
        color: '#181818',
        fontWeight: 600,
        fontSize: '16px',
    }
}))