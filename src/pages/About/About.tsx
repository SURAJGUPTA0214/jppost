import Footer from "components/Footer/Footer";
import NavbarHeader from "components/Header/Heading";
import { makeStyles } from '@material-ui/styles';
import clsx from "clsx";
import CustomButton from "components/Buttons/CustomButton";
import { Link } from "react-router-dom";
import digitalmarkentingimg from "../../assets/images/digitalmarketingimg.png";
import Card from "components/Cards/ProfileCard/Card";
import List from "components/List/List";
import Seoimg from "assets/images/seo-marketing-img.png";




const About = (props: any) => {
    const classes = useStyles();

    return (
        <>
            <NavbarHeader />

            <div className="about-section section-padding pt-0" style={{ borderBottom: '1px solid #dee2e6' }}>
                <div className="container">
                    <div className="row clearfix justify-content-center pt-5">
                        <div className="col-lg-8">
                            <div className="heading-wrapper with-separator text-center">
                                <h2 style={{ fontSize: '48px' }} className={clsx(classes.headingtext, "mobileheadings")}>
                                    Our <span className={classes.headingspan}>Key Features</span>
                                </h2>
                                <p className="lead-text mt-4">
                                   Take a look at some of our key features
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix a">
                        <div className="col-md-12">
                            <div className="mt-5 mb-5"></div>
                        </div>
                        <Card />
                        <div className="col-md-12">
                            <div className="mt-5 mb-5"></div>
                        </div>
                    </div>
                 
                </div>
            </div>
        
            <section className={classes.about}>
                <div className="container">
                    <h2 className={classes.sectionTitle}>About Us</h2>
                    <div className="about-wrapper row"><div className="col-md-6 col-sm-12">
                        <div className="react-reveal about-wrapper__image" >
                            <div className={clsx(classes.imgdiv, "rounded shadow-lg gatsby-image-wrapper")} >
                                <img className={classes.img} aria-hidden="true" src="https://media.istockphoto.com/photos/man-working-online-at-home-on-a-laptop-picture-id1149033316?k=20&m=1149033316&s=612x612&w=0&h=0v6XVdSMXXzAWgnmx_YA2UkAzYkCMJFRM8NbFrgW-NE=" />
                            </div>
                        </div>
                    </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="react-reveal about-wrapper__info" >
                                <p className="about-wrapper__info-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.</p>
                                <p className="about-wrapper__info-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.</p>
                                <p className="about-wrapper__info-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default About;


const useStyles = makeStyles(theme => ({
   headingtext: {
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
    sectionTitle: {
        margin: '0 0 4.5rem',
        fontSize: '3rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        color: '#fff',
        textAlign:'center',
    },
     textwrapper: {
        marginBottom: '30px'
    },
    img: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center center',
        opacity: '1',
        transition: 'opacity 500ms ease 0s',
    },
    imgdiv: {
        position: 'relative',
        overflow: 'hidden',
        width: '350px',
        height: '350px',
        marginLeft: 'auto',
        marginRight:'auto',
    },
    about: {
        backgroundColor: '#0b2849',
        backgroundImage: 'linear-gradient(135deg,#0b2849,#0b2849)',
        color: '#fff',
        height: '100%',
        borderTop: '0',
        // -webkit-clip-path: 'polygon(0 0,100% 0,100% 80%,0 100%)',
        clipPath: 'polygon(0 0,160% 0,100% 81%,0 100%)',
        paddingBottom: '10%',
    },
  

}))