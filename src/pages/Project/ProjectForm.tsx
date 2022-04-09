
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Form, Input, Select } from "antd";
import { Tabs, Tooltip } from 'antd';
import clsx from 'clsx';
import { AiFillPlusCircle, BsTrashFill } from 'react-icons/all';
import { SubmitButton } from 'components/Buttons/CustomButton';




const ProjectForm = () => {
    const classes = useStyles();
    const { Option } = Select;
    const { TabPane } = Tabs;

    const [Projectdata, setProjectdata] = React.useState([
        {
            title: '',
            subject: '',
            project: '',
        }
    ])

    // Dynamically Increase fields

    const setdynamicprojectdata = (value: string, index: number, type: any) => {
        console.log(value, index, type);
        let items = [...Projectdata];
        let item = { ...Projectdata[index], [type]: value };

        items[index] = item;
        console.log(items);
        setProjectdata(items);
    }

    const addprojectfield = (e: any) => {
        e.preventDefault();
        console.log("fired")
        setProjectdata([...Projectdata, { title: '', subject: '', project: '' }]);
    }
    const deleteproject = (id: number) => {
        console.log(id)
        let array = [...Projectdata];
        array.splice(id, 1);
        setProjectdata(array);
    }


    const onFinish = (values: any) => {
        console.log(values)
    }


    return (
        <>
            <div className={classes.linkform}>
                <Form
                    onFinish={onFinish}
                    name="basic"
                    layout={"vertical"}
                >
                    <Form.Item
                        name="projecttitle"
                        rules={[
                            {
                                required: true,
                                message: "Enter Project Title"
                            }
                        ]}
                    >
                        <Input placeholder="Project Title" className="projectinput" />
                    </Form.Item>
                    <Form.Item
                        name="about"
                    >
                        <Input.TextArea rows={3} className="projectinput" placeholder="About your project (optional)" />
                    </Form.Item>

                    <hr />
                    <Form.Item
                        name="link"
                        rules={[
                            {
                                type: "url",
                                message: "Enter a valid link"
                            },
                            {
                                required: true,
                                message: "Enter Link"
                            }
                        ]}
                    >
                        <Input placeholder="Type your link here" className="projectinput" />
                    </Form.Item>

                    <div className="d-flex">
                        <Form.Item
                            name="enviroment"
                        >
                            <Select
                                className="projectinput"
                                style={{ width: '150px', border: '1px solid red' }}
                                placeholder="enviroment"
                            >
                                <Option value="enviroment1">Option 1</Option>
                                <Option value="enviroment2">Option 2</Option>
                                <Option value="enviroment3">Option 3</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="type"
                            style={{ marginLeft: '30px' }}
                        >
                            <Select
                                className="projectinput"
                                style={{ width: 150, border: '1px solid red' }}
                                placeholder="type"
                            >
                                <Option value="type1">Option 1</Option>
                                <Option value="type2">Option 2</Option>
                                <Option value="type3">Option 3</Option>
                            </Select>
                        </Form.Item>
                    </div>

                    <div className="tabarea">
                        <Tabs defaultActiveKey="1" >
                            <TabPane tab="Tab 1" key="1">
                                <div className={clsx(classes.tabOne, " mb-3")}>
                                    <Tooltip placement="top" title={<p>Add Project</p>}>
                                        <span>
                                            <AiFillPlusCircle onClick={addprojectfield} />
                                        </span>
                                    </Tooltip>
                                    {
                                        Projectdata.map((newdata, i) => (
                                            <div className={classes.dymamicdiv} key={i}>
                                                <Form.Item>
                                                    <input className="ant-input" name="" placeholder="Title" required
                                                        value={newdata.title} onChange={(e) => setdynamicprojectdata(e.target.value, i, 'title')}
                                                    />
                                                </Form.Item>
                                                <Form.Item>
                                                    <input className="ant-input" name="" placeholder="Project" required
                                                        value={newdata.subject} onChange={(e) => setdynamicprojectdata(e.target.value, i, 'subject')}
                                                    />
                                                </Form.Item>
                                                <Form.Item>
                                                    <input className="ant-input" name="" placeholder="Subject" required
                                                        value={newdata.project} onChange={(e) => setdynamicprojectdata(e.target.value, i, 'project')}
                                                    />
                                                </Form.Item>
                                                <Tooltip placement="right" title={<p>Delete project</p>}>
                                                    <BsTrashFill onClick={() => deleteproject(i)} style={{ visibility: (i === 0) ? 'hidden' : "visible", fontSize: '18px', cursor: "pointer" }} />
                                                </Tooltip>
                                            </div>
                                        ))
                                    }
                                </div>

                            </TabPane>

                            <TabPane tab="Tab 2" key="2">
                                <p className="mb-0">
                                    Consectetur adipiscing elit. Fusce gravida lacus lorem,
                                    sit amet fermentum diam aliquet quis. Duis sit amet
                                    fermentum nulla. viverra nisl, id di ac. Nam mollis nunc
                                    vitae ipsum vehicula, eu congue augue auctor.id dictum
                                    nulla interdum ac.
                                </p>
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className={classes.btnDiv}>
                        <SubmitButton style={{ background: '#f56616' }} label="Finish" />
                    </div>

                </Form>

            </div>

        </>
    )
}
export default ProjectForm;

const useStyles = makeStyles(theme => ({

    linkform: {
        margin: '20px 45px'
    },
    tabOne: {
        textAlign: 'right',
        '&>span>svg': {
            color: '#f0ac0e',
            fontSize: '25px',
            marginBottom: '20px',
            cursor: 'pointer',
        }
    },
    dymamicdiv: {
        display: 'flex',
        justifyContent: 'space-around',
        '&>div': {
            width: '31%'
        },
        '&>svg': {
            marginTop: '15px',
            color: 'red',
        }
    },
    btnDiv: {
        textAlign: 'right',
    },

}))