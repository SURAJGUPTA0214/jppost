import AuthLayout from "components/Skeleton/AuthLayout";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import CustomButton from "components/Buttons/CustomButton";
import { makeStyles } from '@material-ui/styles';




const Login = () => {
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
                            <Input placeholder="Enter Email Address" />
                        </Form.Item>
                        <Form.Item
                            style={{ marginBottom: "20px" }}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter your password"
                                },
                                { min: 6, message: 'Password must be atleast 6 digit' },
                            ]}
                        >
                            <Input.Password placeholder="Enter Password" />
                        </Form.Item>
                        <div className="text-center">
                            <Link to="/forgotpassword" className={classes.forgotpassword}>Forgot Password</Link>
                        </div>
                        <div className="mt-3">
                            <CustomButton style={loginBtn} label="Login" />
                        </div>
                    </Form>
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
export default Login;

const useStyles = makeStyles(theme => ({

    forgotpassword: {
        borderBottom: '2px solid #ebebeb',
        fontWeight: 600,
        fontSize: '16px',
        color: '#000',
        "&:hover": {
            borderBottom: '2px solid #797979',
            color: '#212529'
        }

    }

}))