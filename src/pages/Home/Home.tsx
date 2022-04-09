import React from "react";
import { makeStyles } from '@material-ui/styles';
import digitalmarkentingimg from "../../assets/images/digitalmarketingimg.png";
import CustomButton from "components/Buttons/CustomButton";
import Card from "components/Cards/ProfileCard/Card";
import List from "components/List/List";
import Seoimg from "assets/images/seo-marketing-img.png";
import mobileappimg from "assets/images/erp-mobileapp-features.png";
import DemoCard from "components/Cards/DemoCard/Card";
import Footer from "components/Footer/Footer";
import NavbarHeader from "components/Header/Heading";
import { Link } from "react-router-dom";
import clsx from "clsx";
import RoundCard from "components/Cards/RoundCard/RoundCard";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Carousel from "components/Carasouel/Carousel";



const Home = () => {
    const classes = useStyles();
    const twocollist = {
        flex: '0 0 50%',
        maxWidth: '50%',
        width: '100%',
        fontWeight: 'bold'
    }
    return (
        <>
            <NavbarHeader />
            <div className="container-fluid banner_div">
                <div className="container position-relative top_100">
                    <div className="row align-items-center flex-column-reverse flex-lg-row section-padding">
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="banner_heading wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                                <h1 className={clsx(classes.headingtext, "mobileheadings")}>
                                    How schools benefit from EasyAPI <span className={classes.headingspan}>ERP Systems</span>
                                </h1>
                            </div>
                            <div
                                className="banner_text wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                    sodales dictum viverra. Nam gravida dignissim eros. Vivamus
                                    congue erat ante, volutpat dictum neque dignissim eget.
                                </p>
                            </div>
                            <div
                                className={clsx("btn-wrapper wow fadeInUp mt-5 text-md-left text-center-mobile")}
                                data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                <CustomButton label="GET STARTED" />

                                <Link className="btn signin_btn btn_transparent" to="#">
                                    <button className={classes.btntransparent}>
                                        Watch Video
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-wrapper">
                                <img className={classes.img} src={digitalmarkentingimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About section */}

            <div className="about-section section-padding pt-0" style={{ borderBottom: '1px solid #dee2e6' }}>
                <div className="container">
                    <div className="row clearfix justify-content-center pt-5">
                        <div className="col-lg-8">
                            <div className="heading-wrapper with-separator text-center">
                                <h2 style={{ fontSize: '48px' }} className={clsx(classes.headingtext, "mobileheadings")}>
                                    Let’s See <span className={classes.headingspan}>Digital Features</span>
                                </h2>
                                <p className="lead-text mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                    convallis nisl mi, non vulputate ligula sodales nec. Morbi velit
                                    sem, laoreet at vestibulum non.
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
                    <div className="row clearfix flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="image-wrapper">
                                <img src={Seoimg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div style={{ marginBottom: '30px' }}>
                                <h2 style={{ fontSize: '48px' }} className={clsx(classes.headingtext, "mobileheadings")}>
                                    We provide <span className={classes.headingspan}>tracking platform</span> for marketing
                                </h2>
                            </div>
                            <div className={classes.textwrapper}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                    sodales dictum viverra. Nam gravida dignissim eros. Vivamus
                                    congue erat ante, volutpat dictum neque dignissim eget.
                                </p>
                                <ul className="list-style-one">
                                    <List text="Nullam placerat nunc id ornare convallis." />
                                    <List text="Mauris id dui aliquam, dapibus felis vel, iaculis risus." />
                                    <List text="Integer dapibus lorem in nisl hendrerit dictum." />
                                </ul>
                            </div>
                            <div className="btn-wrapper text-md-left text-center-mobile">
                                <CustomButton label="Hire Us Now" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- ************************features section**************************** --> */}

            <div className="section-padding border-top">
                <div className="container">
                    <div className="row clearfix align-items-center">
                        <div className="col-lg-6">
                            <div className="image-wrapper">
                                <img src={mobileappimg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading-wrapper with-separator">
                                <h2 style={{ fontSize: '45px' }} className={clsx(classes.headingtext, "mobileheadings")}>
                                    App fledged with <span className={classes.headingspan}>features</span>
                                </h2>
                            </div>
                            <div className={classes.textwrapper}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                    sodales dictum viverra. Nam gravida dignissim eros. Vivamus
                                    congue erat ante, volutpat dictum neque dignissim eget.
                                </p>
                                <ul className={classes.ultwocol}>
                                    <List text="School Calendar" style={twocollist} />
                                    <List text="Attendance Report" style={twocollist} />
                                    <List text="Notice-board" style={twocollist} />
                                    <List text="Exam Report" style={twocollist} />
                                    <List text="Notifications" style={twocollist} />
                                    <List text="Library" style={twocollist} />
                                    <List text="Institution Fees" style={twocollist} />
                                    <List text="Gallery" style={twocollist} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- *********************benefits section************************* --> */}
            <div className={classes.erpsoftware}>
               
                <div className="container">
                     <h2 style={{ fontSize: '48px' }} className={clsx(classes.ourDevelopment, "mobileheadings")}>
                        Our Development Services
                    </h2>
                    <div className="row clearfix mt-5 mb-5">
                        <DemoCard />
                    </div>
                </div>
            </div>

            <div className="section-padding border-top">
                <div className="container">
                    <h2 style={{ color: '#181818', marginTop:'-15px' }} className={clsx(classes.ourDevelopment, "mobileheadings")}>
                        See What Our Client Are Saying
                    </h2>
                    <div className="row">
                        <div className="col-md-12 pb-5 mb-3 col-lg-12 gtco-testimonials">
                           <Carousel />
                        </div>
                    </div>
                </div>
            </div>
          
            <Footer />

        </>
    )
}
export default Home;

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
    img: {
        width: '100%'
    },
    textwrapper: {
        marginBottom: '30px'
    },
    ultwocol: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    erpsoftware: {
        background: '#f56616',
        overflow: 'hidden',
        position: 'relative',
        color: '#fff',
        '&::before': {
            content: "''",
            // position: "absolute",
            width: "100%",
            height: "800px",
            // background: "#f0ac0e",
            top: "-520px",
            left: "-200px",
            borderRadius: "0 0 4px 50%",
            background: "linear-gradient(to right, #f0ac0e, #f56616)",
            // background: 'linear-gradient(45deg, #f0ac0e 30%, #f56616 90%)'
        }
    },
    btntransparent: {
        background: 'transparent',
        border: '2px solid #f56616',
        color: '#f56616',
        boxShadow: 'none',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontWeight: 800,
        padding: '0px 30px',
        lineHeight: '48px',
    },
    pageheadertitle: {
        background: 'linear-gradient(to right top, #f0a90e, #f1a20d, #f29b0d, #f3940f, #f48d12, #f48713, #f48214, #f47c15, #f47715, #f57115, #f56c15, #f56616)',
        position: 'relative',
        paddingBottom: '60px'
    },
    pageinner: {
        textAlign: 'center',
        padding: '5rem 8rem',
        color: '#fff'
    },
    h1: {
        fontSize: '40px',
        fontWeight: "bold",
        color: '#fff'
    },
    leadtext: {
        fontSize: '16px',
        lineHeight: '1.6',
    },
    svg: {
        position: 'absolute',
        bottom: '0',
    },
    benefitspan: {
        fontFamily: "'Alegreya', serif",
        fontStyle: 'italic',
    },
    ourDevelopment: {
        fontSize: '48px',
        textAlign: 'center',
        marginTop: '40px',
        color: 'white',
    }
}));

