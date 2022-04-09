import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import CustomButton from 'components/Buttons/CustomButton';
import List from 'components/List/List';
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/all"


const Footer = () => {
    const classes = useStyles();
    return (
        <>
            {/* <!-- *************************footer************************* --> */}
            <footer className="site-footer">
                <div className="container">
                    <div className="main-footer section-padding">
                        <div className="row text-md-left text-center-mobile">
                            <div className="col-lg-3 footer_section_dividor">
                                <div className="widget">
                                    <div className={classes.widgetTitle}>
                                        <h3 className={classes.widgetHeading}>
                                            About EasyAPI
                                        </h3>
                                    </div>
                                    <div className="text-widget">
                                        <div className={classes.contactInfo}>
                                            <ul className="mobile-address">
                                                <List className="email-field" text="Support@sacredthemes.net" />
                                                <List className="phone-field" text="+1 (234) 567-9801" />
                                                <List className="address-field" text=" 49 Uniqe Square D, New York, NY 10003, USA" />
                                            </ul>
                                        </div>
                                        <div className={clsx(classes.socialmedia, "footer-mobile-social")}>
                                            <div className={classes.socialdiv}>
                                                <FiFacebook />
                                            </div>
                                            <div className={classes.socialdiv}>
                                                <FiTwitter />
                                            </div>
                                            <div className={classes.socialdiv}>
                                                <FiLinkedin />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 footer_section_dividor">
                                <div className="widget">
                                    <div className={classes.widgetTitle}>
                                        <h3 className={classes.widgetHeading}>
                                            Useful Links
                                        </h3>
                                    </div>
                                    <div className="text-widget">
                                        <div className="footer-nav">
                                            <ul>
                                                <List className="footernavlist" text="Safety" />
                                                <List className="footernavlist" text="Cookie Policy" />
                                                <List className="footernavlist" text="Contact Us" />
                                                <List className="footernavlist" text="Privacy Policy" />
                                                <List className="footernavlist" text="Terms of Service" />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 footer_section_dividor">
                                <div className="widget">
                                    <div className={classes.widgetTitle}>
                                        <h3 className={classes.widgetHeading}>
                                            Useful Links
                                        </h3>
                                    </div>
                                    <div className="text-widget">
                                        <div className="footer-nav">
                                            <ul>
                                                <List className="footernavlist" text="Trust & Safety" />
                                                <List className="footernavlist" text="Cookie Policy" />
                                                <List className="footernavlist" text="Contact Us" />
                                                <List className="footernavlist" text="Privacy Policy" />
                                                <List className="footernavlist" text="Terms of Service" />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 footer_section_dividor">
                                <div className="widget">
                                    <div className={classes.widgetTitle}>
                                        <h3 className={classes.widgetHeading}>
                                            Support
                                        </h3>
                                    </div>
                                    <div className="text-widget">
                                        <div className="footer-nav">
                                            <ul>
                                                <List className="footernavlist" text="Documentation" />
                                                <List className="footernavlist" text="FAQ" />
                                                <List className="footernavlist" text="Press" />
                                                <List className="footernavlist" text="Community" />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="widget">
                                    <div className={classes.widgetTitle}>
                                        <h3 className={classes.widgetHeading}>
                                            Stay Updated
                                        </h3>
                                    </div>
                                    <div className="text-widget">
                                        <div className="newsletter-form">
                                            <p>Subscribe to our newsletter for regular updates</p>
                                            <form className="text-lg-left" method="post">
                                                <div style={{ marginBottom: '1rem' }}>
                                                    <input type="email" className="form-control custom_form_control" id="EmailInout"
                                                        placeholder="Enter email address" />
                                                </div>
                                                <CustomButton label="Subscribe Now!" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;


const useStyles = makeStyles(theme => ({
    widgetTitle: {
        marginBottom: '25px'
    },
    widgetHeading: {
        letterSpacing: '0',
        fontSize: '20px',
        transition: 'all 400ms ease -in -out',
        fontFamily: "'Source Sans Pro', sans - serif'",
        fontWeight: 'bold',
        marginBottom: '18px',
        color: '#f56616',
    },
    contactInfo: {
        marginBottom: '30px',
        textAlign: 'left'
    },
    socialmedia: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    socialdiv: {
        // lineHeight: '40px',
        width: '48px',
        height: '48px',
        display: 'block',
        fontSize: '24px',
        borderRadius: '6px',
        textAlign: 'center',
        border: '1px solid #c0b8b861',
        position: 'relative',
        overflow: 'hidden',
        marginRight: '5px'
    }

}));