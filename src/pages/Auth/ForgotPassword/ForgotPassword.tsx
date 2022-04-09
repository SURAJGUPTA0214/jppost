import AuthLayout from "components/Skeleton/AuthLayout";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import CustomButton from "components/Buttons/CustomButton";
import { AiOutlineExclamationCircle, FaLongArrowAltLeft } from "react-icons/all";
import { makeStyles } from '@material-ui/styles';
import clsx from "clsx";


const ForgotPassword = () => {
    const classes = useStyles();

    const onFinish = (values: any) => {
        console.log(values);
        alert(values)
    }
    const loginBtn = {
        width: '100%'
    }
    const emailBtn = {
        width: '100%',
        background: 'linear-gradient(to bottom, #e60023 0%, #c00000 100%)',
    }
    const facebookBtn = {
        width: '100%',
        background: 'linear-gradient(to bottom, #16a8fc 0%, #036ee4 100%)',

    }
    return (
        <>
            <AuthLayout>
                <>
                    <div className="text-center mb-3 py-2">
                        <AiOutlineExclamationCircle className={classes.aioutline} />
                    </div>
                    <div className="forgot_head">
                        <div className={classes.header}>Forgot Your Password ?</div>
                        <p className={classes.headertext}>No worries! Enter your resgistered email and we'll send you a link to
                            reset your password.</p>
                    </div>
                    <Form
                        onFinish={onFinish}
                        name="basic"
                        layout={"vertical"}
                    >
                        <Form.Item
                            style={{ marginBottom: "10px" }}
                            name="email"
                            rules={[
                                {
                                    type: "email",
                                    message: "Enter a valid email id"
                                },
                                {
                                    required: true,
                                    message: "Enter Email-ID"
                                }
                            ]}
                        >
                            <Input placeholder="Enter Registered Email" />
                        </Form.Item>

                        <div className="mt-3">
                            <CustomButton style={loginBtn} label="Send Email" />
                        </div>
                    </Form>
                    <div className={clsx(classes.backlogin, "mt-2")}>
                        <Link to="/login">
                            <span className={clsx(classes.loghover, "p-2")}>
                                <FaLongArrowAltLeft /> <span>Back to Login</span>
                            </span>
                        </Link>
                    </div>

                    <div className="text-center mt-3">
                        <p> OR </p>
                    </div>
                    <div>
                        <CustomButton style={emailBtn} label="Continue With Email" />
                    </div>
                    <div className="mt-3">
                        <CustomButton style={facebookBtn} label="Continue With Facebook" />
                    </div>
                </>
            </AuthLayout>
        </>
    )
}
export default ForgotPassword;

const useStyles = makeStyles(theme => ({
    aioutline: {
        fontWeight: 600,
        fontSize: '60px',
        color: '#f0a30f',
    },
    header: {
        color: '#575757',
        fontSize: '24px',
        fontWeight: 600,
        textAlign: 'center',
        marginBottom: '20px'
    },
    headertext: {
        color: '#666',
        fontSize: '12px',
    },
    backlogin: {

        textAlign: 'end',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    loghover: {
        borderRight: '8px',
        cursor: 'pointer',
        color: '#575757',
        fontSize: '16px',
        fontWeight: 600,
        textDecoration: 'none',
        borderRadius: '4px',
        padding: '4px 15px',

        '&:hover': {
            color: '#fff',
            backgroundColor: '#f56616',
            textDecoration: 'none',
        }
    }
}))