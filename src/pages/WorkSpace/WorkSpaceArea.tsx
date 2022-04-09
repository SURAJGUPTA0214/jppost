import React from "react";
import Sidebar from "components/Dashboard/Sidebar/Sidebar";
import { makeStyles } from '@material-ui/styles';
import clsx from "clsx";
import { BsChevronLeft, FaHome, AiFillPushpin, GrAddCircle, BsSearch, FaFilter, FiChevronRight } from "react-icons/all";
import RightSidebar from "components/Dashboard/RightSidebar/RightSidebar";



const WorkSpaceArea = () => {
    const classes = useStyles();
    const [Show, setShow] = React.useState<boolean>(false);

    return (
        <>
            <div className="d-flex flex-row min-vh-100">
                <Sidebar />
                {/* <!-- ****************************main body content start***************************** --> */}
                <div className={clsx(classes.main, "flex-grow-1 d-flex flex-column p-0 min-vh-100")}>
                    <div className={clsx(classes.workspaceSubMenu, "display_active_menu")}>
                        <span className={classes.submenubtn} onClick={() => setShow(!Show)}>{(!Show) ? < BsChevronLeft /> : <FiChevronRight />}</span>
                        <div id="workspace_sub_menu">
                            <div className={classes.workspace_sidenav} style={{ marginLeft: (Show) ? "-210px" : "", transition: 'all .5s ease' }}>
                                <div className="text-center my-4 theme_font heading">
                                    <FaHome className={classes.home} />
                                    <h2 className={clsx(classes.head, "d-inline-block")}>Main Workspace</h2>
                                </div>
                                <ul className={clsx(classes.sideul, "d-flex flex-column justify-items-center sub_menu pl-4 mt-2")} >
                                    <li>
                                        <GrAddCircle /> ADD TASK
                                    </li>
                                    <li>
                                        <FaFilter /> FILTER
                                    </li>
                                    <li>
                                        <BsSearch /> SEARCH
                                    </li>
                                </ul>
                                <hr style={{ margin: ' 0 5px', opacity: "0.5" }} />
                                <ul className={clsx(classes.sideul, "d-flex flex-column justify-items-center sub_menu pl-4 mt-2")} >
                                    <li>
                                        <AiFillPushpin /> Project 1
                                    </li>
                                    <li>
                                        <AiFillPushpin /> Project 2
                                    </li>
                                    <li>
                                        <AiFillPushpin /> Project 3
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- *********************workspace side sub menu end***************************** --> */}

                    {/* Middle start */}
                    <div className={classes.workspacearea}>jnjbjb</div>
                    {/* Middle End */}

                    {/* Right Side start */}
                    <div id="workspace_right_side" className={classes.workspace_right_side}>
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </>
    )
}
export default WorkSpaceArea;

const useStyles = makeStyles(theme => ({

    main: {
        marginLeft: '67px',
        fontSize: '28px',
        padding: '0px 10px',
        backgroundColor: '#fbf9f7',
    },
    workspaceSubMenu: {
        borderRight: '1px solid rgba(0, 0, 0, 0.08)',
        padding: '0 25px',
        position: 'fixed',
        backgroundColor: '#fbf9f7',
        height: '100vh',
        display: 'block'
    },
    submenubtn: {
        fontFamily: 'fontawesome',
        position: 'absolute',
        top: '68px',
        left: '100%',
        transform: 'translateX(-50%)',
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#f56616',
        backgroundColor: '#fff',
        padding: '0px 4px',
        borderRadius: '50%',
        border: '1px solid rgba(0, 0, 0, 0.1)',
    },
    workspace_sidenav: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        width: '180px',
        zIndex: 1,
        top: '0',
        left: '0',
    },
    head: {
        fontSize: '20px'
    },
    home: {
        fontSize: '20px',
        color: '#f56616',
        marginRight: '5px'
    },
    sideul: {
        '&>li': {
            fontSize: '12px',
            margin: '5px 0',
        }
    },
    workspacearea: {
        marginLeft: '231px',
        marginRight: '280px',
        zIndex: -1,
        position: 'relative',
        transition: 'all 1s ease-in-out',
        flexGrow: 1,
    },
    workspace_right_side: {
        borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
        padding: '0 10px',
        backgroundColor: '#fff',
        position: 'fixed',
        minHeight: '100vh',
        right: '0',
        width: '280px',
    }

}))