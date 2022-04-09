import clsx from "clsx";
import Sidebar from "components/Dashboard/Sidebar/Sidebar";
import { makeStyles } from '@material-ui/styles';
import { ImUsers, BiEnvelope } from "react-icons/all";
import { MessageData } from "./MessageData"


const Message = () => {
    const classes = useStyles();

    return (
        <>
            <div className="d-flex flex-row min-vh-100">
                <Sidebar />
                <div className={clsx(classes.main, "flex-grow-1 d-flex flex-column p-0 min-vh-100")}>
                    <div className="message_area flex-grow-1">
                        <div className="message_content d-flex flex-column h-100 p-5">
                            <div className="row h-100 px-3">
                                <div className="chat_heads col-4 col-xl-3 bg-white py-4">
                                    <div className="d-flex align-items-center justify-content-between message_header">
                                        <h2 className={clsx(classes.inbox, "d-inline-block mb-0")}>Inbox</h2>
                                        <div>
                                            <ImUsers className={classes.svg} />
                                            <BiEnvelope className={classes.svg} />
                                        </div>
                                    </div>
                                    <form className="search_msg" action="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search Message"
                                        />
                                    </form>
                                    <ul className={clsx(classes.chatList, "chat_list mb-0")}>
                                        {
                                            MessageData.map((items, index) => (
                                                <li key={index}>
                                                    <div className="d-flex align-items-center">
                                                        <figure className="chat_avatar mr-3 mb-0">
                                                            <img
                                                                alt=""
                                                                src={items.image}
                                                                className="rounded-circle"
                                                            />
                                                        </figure>
                                                        <div className="users-list-body overflow-hidden">
                                                            <h5 className={clsx(classes.inbox, "text-capitalize")}>{items.name}</h5>
                                                            <p>{items.text}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Message;

const useStyles = makeStyles(theme => ({
    main: {
        marginLeft: '67px',
        fontSize: '28px',
        padding: '0px 10px',
        backgroundColor: '#fbf9f7',
    },
    svg: {
        padding: '4px 6px',
        backgroundColor: 'rgba(245, 102, 22, 0.8)',
        borderRadius: '5px',
        color: '#fff',
        marginLeft: '5px',
    },
    inbox: {
        fontSize: '20px',
        color: '#181818',
    },
    chatList: {
        maxHeight: 'calc(100vh - 236px)',
        overflow: 'auto',
        '&>li': {
            margin: '25px 0',
            cursor: 'pointer'
        },
        '&>li>div>figure': {
            color: '#fff',
            textAlign: 'center',
            width: '42px',
            marginRight: '10px'
        },
        '&>li>div>div>p': {
            fontSize: '14px',
            color: '#575757',
            marginBottom: '0',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontFamily: "'Source Sans Pro', sans - serif",
        }
    }

}))