import Footer from "components/Footer/Footer";
import NavbarHeader from "components/Header/Heading";
import { makeStyles } from '@material-ui/styles';
import { Form, Input } from "antd";
import CustomButton from "components/Buttons/CustomButton";
import clsx from "clsx";
import { FaPhoneAlt, MdMail } from "react-icons/all";
import PageBanner from "components/Banner/PageBanner";


const ContactUs = (props: any) => {
    const classes = useStyles();
    const { TextArea } = Input;
    const onFinish = (values: any) => {
        console.log(values);
        alert(values)
    }

    return (
        <>
            <NavbarHeader />
            <PageBanner pagename="Contact Us" leadtext=" Contact us with your queries to get easy solutions from our experts." />

            {/* <!-- ****************************contact section************************ --> */}
            <div className="about-section section-padding" style={{ background: "#fbf9f7" }} >
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-md-6 col-lg-12">
                                    <div className={classes.contactinfoBox} data-wow-delay="0.8s"  >
                                        <div className="contact-wrapper">
                                            <div className="icon d-flex align-items-center contact_call_card mb-4" >
                                                <FaPhoneAlt className={classes.svgImage} />
                                                <h4 className={clsx(classes.cardheading, "ml-3")}>Call Us</h4>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    We attend call from Mon-Fri, 09:00 am to 09S:00 pm
                                                </p>
                                                <p>
                                                    <a className={clsx(classes.link, "btn link-btn border-0 theme_color")} href="tel:1234567890" >(123) 456 7890</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12">
                                    <div className={classes.contactinfoBox} data-wow-delay="1s"  >
                                        <div className="contact-wrapper">
                                            <div className="icon d-flex align-items-center contact_call_card mb-4" >
                                                <MdMail style={{ fontSize: '30px', marginRight: '10px' }} />
                                                <h4 className={clsx(classes.cardheading, "ml-3 mb-0")}>Send Email</h4>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    Our support team will get back to in 48-h during
                                                    standard business hours.
                                                </p>
                                                <p>
                                                    <a className={clsx(classes.link, "btn link-btn border-0 theme_color")} href="mailto:example@gmail.com" >example@gmail.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className={classes.contactFormSection}>
                                <div className="heading-wrapper with-separator">
                                    <span className={classes.headingTitle}>GET IN TOUCH</span>
                                    <h2 className={classes.headingtext}><span className={classes.headingspan}>Connect</span> with us</h2>
                                </div>
                                <div className="text-wrapper">
                                    <p>
                                        Please contact us using the details below. For more
                                        information about our services, please visit the
                                        corresponding page on our web.
                                    </p>
                                </div>
                                <div className="contact-form">

                                    <Form
                                        onFinish={onFinish}
                                        name="basic"
                                        layout={"vertical"}
                                    >
                                        <div className="demo d-flex" >
                                            <div className="form-group col-md-6">
                                                <Form.Item
                                                    style={{ marginRight: "10px" }}
                                                    name="firstname"
                                                    rules={[
                                                        {
                                                            type: "string",
                                                            message: "Enter First Name"
                                                        },
                                                        {
                                                            required: true,
                                                            message: "Enter First Name"
                                                        }
                                                    ]}
                                                >
                                                    <Input placeholder="First Name" />
                                                </Form.Item>
                                            </div>
                                            <div className="form-group col-md-6">

                                                <Form.Item
                                                    style={{ marginLeft: "10px" }}
                                                    name="lastname"
                                                    rules={[
                                                        {
                                                            type: "string",
                                                            message: "Enter Last Name"
                                                        },
                                                        {
                                                            required: true,
                                                            message: "Enter Last Name"
                                                        }
                                                    ]}
                                                >
                                                    <Input placeholder="Last Name" />
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    type: "email",
                                                    message: "Enter Email Address"
                                                },
                                                {
                                                    required: true,
                                                    message: "Enter Email Address"
                                                }
                                            ]}
                                        >
                                            <Input placeholder="Email Address" />
                                        </Form.Item>

                                        <Form.Item
                                            name="how can i help you"
                                            rules={[
                                                {
                                                    type: "string",
                                                    message: "Enter how can i help you"
                                                },
                                                {
                                                    required: true,
                                                    message: "This fiels is required"
                                                }
                                            ]}
                                        >
                                            <Input placeholder="How can i help you" />
                                        </Form.Item>

                                        <Form.Item
                                            style={{ marginBottom: "10px" }}
                                            name="how can i help you"
                                            rules={[
                                                {
                                                    type: "string",
                                                    message: " Tell me more about your query"
                                                },
                                                {
                                                    required: true,
                                                    message: "This field is required"
                                                }
                                            ]}
                                        >
                                            <TextArea rows={3} placeholder="Tell me more about your query" />
                                        </Form.Item>
                                        <CustomButton label="Send Message" />
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div>
                         
                            <iframe width="100%" height="450"
                                style={{ border: '0px' }}
                                src="https://www.google.com/maps/embed/v1/place?q=22.616257,88.384443&amp;key=AIzaSyBhuhdUUzs992lLPYvF9_bU7KTQTv3bHU4">
                                
                                </iframe>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default ContactUs;

const useStyles = makeStyles(theme => ({

    contactinfoBox: {
        boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 10%)',
        padding: '30px',
        border: '1px solid var(--light-gray)',
        transition: 'all 300ms ease',
        borderRadius: '6px',
        marginBottom: '30px',
        background: '#fff'
    },
    contactFormSection: {
        padding: '3rem',
        background: '#fff',
        boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 10%)',
        borderRadius: '6px',
    },
    headingTitle: {
        texTransform: "uppercase",
        fontWeight: 700,
        fontSize: "18px",
        letterSpacing: "1px",
        fontFamily: "'Source Sans Pro', sans-serif",
        fontStyle: "normal",
        color: '#f56616'
    },
    headingtext: {
        fontSize: '48px',
        fontWeight: 'bold',
        letterSpacing: '-1px',
        marginBottom: '18px',
        '&::after': {
            height: '6px',
            width: '60px',
            content: '""',
            display: 'block',
            marginTop: '18px',
            background: 'linear-gradient(to right, #f0ac0e 0%, #f56616 100%)',
        }
    },
    headingspan: {
        color: '#f56616',
        fontfamily: "'Alegreya', 'serif'",
        fontStyle: 'italic',
    },
    cardheading: {
        fontSize: '26px',
        fontWeight: 'bold',
        backgroundSize: 'contain',
        color: ' #f0ac0e',
    },
    svgImage: {
        fontSize: '30px',
        marginRight: '10px'
    },
    link: {
        padding: '0',
        fontSize: '18px',
        fontWeight: 600,
        outline: 'none',
        boxShadow: 'none',
        borderBottom: '2px solid var(--light-gray)',
        borderRadius: '0px',
        color: '#f46815',
        '&:hover': {
            color: ' #f0ac0e',
        }
    }

}));