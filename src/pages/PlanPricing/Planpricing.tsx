import Footer from "components/Footer/Footer";
import NavbarHeader from "components/Header/Heading";
import { makeStyles } from '@material-ui/styles';
import PlanCard from "components/Cards/PlanCard/PlanCard";
import PageBanner from "components/Banner/PageBanner";
import clsx from "clsx";

const PlanPricing = (props: any) => {
    const classes = useStyles();

    return (
        <>
            <NavbarHeader />
            <PageBanner pagename="Plan & pricing" leadtext="Choose our best plan with very low budget for your project" />

            {/* <!-- ****************************plan section************************ --> */}

            <div className="pricing-section price_plan_padding light-bg" style={{ background: '#fefbf3' }}>
                <div className="container">
                    <div className="row justify-content-center clearfix">
                        <div className="col-lg-9">
                            <div className="heading-wrapper text-center with-separator">
                                <h2 className={clsx(classes.headingtext, "mobileheadings")}>
                                    Select your plan and number of users
                                </h2>
                                <div className={classes.leadtext}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis finibus mi id elit gravida, quis tincidunt purus
                                        fringilla. Aenean convallis a neque non pellentesque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pricing-plans-one clearfix">
                        <PlanCard />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default PlanPricing;

const useStyles = makeStyles(theme => ({

    leadtext: {
        fontSize: '20px',
        lineHeight: '1.6',
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
}));