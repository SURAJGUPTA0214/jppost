import React from "react";
import clsx from "clsx";
import Sidebar from "components/Dashboard/Sidebar/Sidebar";
import { makeStyles } from '@material-ui/styles';
import { BiDownArrowCircle, BiUpArrowCircle, BiTask } from "react-icons/all";
import { TaskData } from "./TaskData";
import CopyRight from "components/CopyRight/CopyRight";



const Task = () => {
    const classes = useStyles();
    const [expand, setexpand] = React.useState<number>(-1)

    return (
        <>
            <div className="d-flex flex-row min-vh-100">
                <Sidebar />
                <div className={clsx(classes.main, "flex-grow-1 d-flex flex-column p-0 min-vh-100")}>
                    <div className="task_area flex-grow-1 bg-white">
                        <div className="d-flex flex-column h-100 px-5 py-3">
                            <div className="row task_content">
                                <div className="col-12 task_header my-4 d-flex align-items-center">
                                    <h2 className={clsx(classes.header, "d-inline-block text-uppercase mb-0")}>Task Details</h2>
                                    <span className={clsx(classes.muted, "text-muted theme_font ml-2")}> (WEEK WISE) </span>
                                </div>
                                <div className={clsx(classes.intero, "col-12 py-4 mb-3 intro_section ml-4")}>
                                    <p className="mb-0 theme_font" style={{ fontSize: '22px' }}>
                                        <span className="theme_color" style={{ fontWeight: 500 }}>Hello</span>,
                                        Patsy
                                    </p>
                                    <p className="text-muted them mb-0" style={{ fontSize: "19px" }}>
                                        You Have
                                        <span className="theme_color" style={{ fontWeight: 500 }}> 3 Projects </span>
                                        This Week
                                    </p>
                                </div>

                                <div className="col-12">
                                    <div className="accordian">
                                        {
                                            TaskData.map((taskitem, index) => (
                                                <div key={index}>
                                                    <div onClick={() => {
                                                        if (index === expand)
                                                            setexpand(-1)
                                                        else
                                                            setexpand(index)
                                                    }}
                                                    >
                                                        <h5 className={classes.projectname}>
                                                            {
                                                                (expand !== index) ? <BiDownArrowCircle className="m-2" /> : <BiUpArrowCircle className="m-2" />
                                                            }
                                                            {taskitem.heading} ({taskitem.Details.length})
                                                        </h5>
                                                    </div>
                                                    {
                                                        (expand === index) &&
                                                        <div>
                                                            {
                                                                taskitem.Details.map((nesteditem, i) => (
                                                                    <ul className="m-0" key={i}>
                                                                        <li className={clsx(classes.accordianlist, "my-2")}>
                                                                            <p className={clsx(classes.projectheading, "mb-0")}>
                                                                                <BiTask className="m-2" />{nesteditem.projectName}
                                                                            </p>
                                                                            <p className={clsx(classes.projectdetails, "mb-0")}>
                                                                                {nesteditem.projectDetails}
                                                                            </p>
                                                                        </li>
                                                                    </ul>
                                                                ))
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CopyRight />
                </div>
            </div>

        </>
    )
}
export default Task;

const useStyles = makeStyles(theme => ({
    main: {
        marginLeft: '67px',
        fontSize: '28px',
        padding: '0px 10px',
        backgroundColor: '#fbf9f7',
    },
    intero: {
        position: 'relative',
        '&::before': {
            content: "''",
            position: "absolute",
            height: "70%",
            width: "3px",
            background: "#f56616",
            top: "50%",
            left: "5px",
            transform: "translateY(-50%)",
        }
    },
    header: {
        fontSize: '26px',
        color: '#575757',
        fontWeight: 'normal',
    },
    muted: {
        fontSize: '18px',
    },
    accordianlist: {
        padding: '10px 20px',
        border: '1px solid rgba(0, 0, 0, 0.15)',
    },
    projectname: {
        cursor: 'pointer',
    },
    projectheading: {
        fontSize: '18px'
    },
    projectdetails: {
        color: '#575757',
        padding: '0 30px 0 32px',
        fontSize: '16px'
    }
}))