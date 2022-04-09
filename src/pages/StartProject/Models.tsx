import React from "react";
import { Form, Input, Radio } from "antd";
import CustomButton, { SubmitButton } from "components/Buttons/CustomButton";
import clsx from "clsx";
import { makeStyles } from '@material-ui/styles';
import { ImUsers, FaUserAlt, MdWork, BsTrashFill } from "react-icons/all";



const Models = () => {
    const classes = useStyles();
    const [Modalstate, setModalstate] = React.useState<number>(1);
    const [Radiovalue, setRadiovalue] = React.useState<number>(1);
    const [TeamData, setTeamData] = React.useState([
        {
            email: '',
            type: 'admin',
        }
    ])
    const [data, setdata] = React.useState([
        {
            title: '',
            about: '',
        }
    ])
    const onFinishone = () => {
        setModalstate(Modalstate + 1)
    }
    const onFinishtwo = () => {
        setModalstate(Modalstate + 1)
    }
    const onFinishthree = () => {
        setModalstate(Modalstate + 1)
    }
    const onFinishFour = () => {
        alert("Thank u");
        window.location.href = "/startproject";
    }

    const handleCancel = () => {
        window.location.href = "/startproject";
    }
    // Modal 3
    const addTeam = (e: any) => {
        e.preventDefault();
        console.log("fired")
        setTeamData([...TeamData, { email: '', type: '' }]);
    }
    const setdynamicTeamdata = (value: string, index: number, type: any) => {
        console.log(value, index, type);
        let items = [...TeamData];
        let item = { ...items[index], [type]: value };

        items[index] = item;
        console.log(items);
        setTeamData(items);
    }
    const deleteTeam = (id: number) => {
        console.log(id)
        let array = [...TeamData];
        array.splice(id, 1);
        setTeamData(array);
    }

    // Modal 4
    const additem = (e: any) => {
        e.preventDefault();
        console.log("fired")
        setdata([...data, { title: '', about: '' }]);
    }
    const setdynamicdata = (value: string, index: number, type: any) => {
        console.log(value, index, type);
        let items = [...data];
        let item = { ...items[index], [type]: value };

        items[index] = item;
        console.log(items);
        setdata(items);
    }
    const deleteEnviroment = (id: number) => {
        console.log(id)
        let array = [...data];
        array.splice(id, 1);
        setdata(array);
    }
    return (
        <>
            {(Modalstate === 1) &&
                <div id="modal_page1" className="modal_form">
                    <h2 className={clsx(classes.modalheading, "modal_heading mb-5 position-relative")}>Create Your Project</h2>
                    <Form
                        onFinish={onFinishone}
                        name="basic"
                        layout={"vertical"}
                    >
                        <Form.Item
                            name="projectname"
                            rules={[
                                {
                                    type: "string",
                                    message: "Enter Project Name"
                                },
                                {
                                    required: true,
                                    message: "Enter Project Name"
                                }
                            ]}
                        >
                            <Input placeholder="Enter Project Name" />
                        </Form.Item>
                        <Form.Item
                            name="about"
                        >
                            <Input.TextArea rows={3} placeholder="About your project (optional)" />
                        </Form.Item>

                        <Form.Item>
                            <Radio.Group onChange={(e) => setRadiovalue(e.target.value)} value={Radiovalue}>
                                <Radio value={1}>Main</Radio>
                                <Radio value={2}>Private</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <div className={classes.btnDiv}>
                            <SubmitButton label="Cancel" onClick={handleCancel} />
                            <SubmitButton style={{ background: '#f4c062' }} label="Next Step" />
                        </div>
                    </Form>

                </div>
            }
            {
                (Modalstate === 2) &&
                <div id="modal_page2" className="modal_form">
                    <h2 className={clsx(classes.modalheading, "modal_heading mb-5 position-relative")}> Your Project Type</h2>

                    <Form
                        onFinish={onFinishtwo}
                        name="basic"
                        layout={"vertical"}
                    >
                        <h4 className={classes.choose}>Choose One Type</h4>
                        <Form.Item
                            name="type"
                            rules={[
                                {
                                    required: true,
                                    message: "Please Choose any one"
                                }
                            ]}
                        >
                            <Radio.Group style={{ width: '100%' }} className="typeradiogroup">
                                <Radio.Button className="modalradio" value="a"><FaUserAlt className={classes.btnsvg} />Personal</Radio.Button>
                                <Radio.Button className="modalradio" value="b"><ImUsers className={classes.btnsvg} />Group</Radio.Button>
                                <Radio.Button className="modalradio" value="c"><MdWork className={classes.btnsvg} />Work</Radio.Button>
                            </Radio.Group>
                        </Form.Item>

                        <div className={classes.btnDiv}>
                            <SubmitButton label="Cancel" onClick={handleCancel} />
                            <SubmitButton style={{ background: '#f4c062' }} label="Next Step" />
                        </div>
                    </Form>
                </div>

            }

            {(Modalstate === 3) &&
                <div id="modal_page3" className="modal_form">
                    <div className="w-100 d-flex justify-content-around">
                        <h2 className={clsx(classes.modalheading, "modal_heading mb-5 position-relative")}> Your Team</h2>
                        <div><CustomButton label="Add Member" onClick={addTeam} /></div>
                    </div>

                    <Form
                        onFinish={onFinishthree}
                        name="basic"
                        layout={"vertical"}
                    >
                        {TeamData.map((newTeamData, i) => (
                            <div>
                                <Form.Item>
                                    <input type="email" className="ant-input" name="" placeholder="Give team email" required
                                        value={newTeamData.email} onChange={(e) => setdynamicTeamdata(e.target.value, i, 'email')}
                                    />
                                </Form.Item>

                                <Form.Item style={{ marginBottom: '12px' }}>
                                    <Radio.Group onChange={(e) => setdynamicTeamdata(e.target.value, i, 'type')} value={newTeamData.type}>
                                        <Radio value="admin">Admin</Radio>
                                        <Radio value="user">User</Radio>
                                    </Radio.Group>
                                </Form.Item>
                                {(i > 0) &&
                                    <div className={clsx(classes.deleteDiv, " mb-3")} >
                                        <div onClick={() => deleteTeam(i)}>
                                            <span className="text-muted">Delete Current Team</span>
                                            <BsTrashFill />
                                        </div>
                                    </div>
                                }

                            </div>
                        ))}

                        <div className={classes.btnDiv}>
                            <SubmitButton label="Cancel" onClick={handleCancel} />
                            <SubmitButton style={{ background: '#f4c062' }} label="Next Step" />
                        </div>
                    </Form>
                </div>
            }



            {(Modalstate === 4) &&
                <div id="modal_page3" className="modal_form">
                    <div className="w-100 d-flex justify-content-around">
                        <h2 className={clsx(classes.modalheading, "modal_heading mb-5 position-relative")}> Enviroment</h2>
                        <div><CustomButton label="Add More" onClick={additem} /></div>
                    </div>

                    <Form
                        onFinish={onFinishFour}
                        name="basic"
                        layout={"vertical"}
                    >
                        {data.map((newdata, i) => (
                            <div>
                                <Form.Item>
                                    <input className="ant-input" name="" placeholder="Give a title" required
                                        value={newdata.title} onChange={(e) => setdynamicdata(e.target.value, i, 'title')}
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <textarea className="ant-input" name="" rows={3} placeholder="About your project (optional)" required
                                        value={newdata.about} onChange={(e) => setdynamicdata(e.target.value, i, 'about')} />
                                </Form.Item>
                                {(i > 0) &&
                                    <div className={clsx(classes.deleteDiv, " mb-5")} >
                                        <div onClick={() => deleteEnviroment(i)}>
                                            <span className="text-muted">Delete This Environment</span>
                                            <BsTrashFill />
                                        </div>
                                    </div>
                                }

                            </div>
                        ))}

                        <div className={classes.btnDiv}>
                            <SubmitButton label="Cancel" onClick={handleCancel} />
                            <SubmitButton style={{ background: '#f4c062' }} label="Finish" />
                        </div>
                    </Form>
                </div>
            }
        </>
    )
}
export default Models;

const useStyles = makeStyles(theme => ({

    modalheading: {
        fontSize: '32px',
        '&:before': {
            content: "''",
            position: "absolute",
            width: "35px",
            height: "9px",
            background: "#f56616",
            bottom: "-10px",
            left: "3px",
        },
        '&:after': {
            content: "''",
            position: "absolute",
            width: "100px",
            height: "3px",
            background: "#f56616",
            bottom: "-7px",
            left: "3px",
        }
    },
    choose: {
        fontSize: "18px",
        color: "#575757",
        marginBottom: "10px",
        paddingLeft: "10px",
        fontFamily: "'Source Sans Pro', sans-serif",
    },
    btnDiv: {
        textAlign: 'right',
    },
    btnsvg: {
        margin: '0 5px 5px 0'
    },
    deleteDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontSize: '16px',
        cursor: 'pointer',
        '&>div>svg': {
            color: 'red',
            fontSize: '16px',
            marginLeft: '8px'
        }
    }
}))