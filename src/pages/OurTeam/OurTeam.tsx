import Footer from "components/Footer/Footer";
import NavbarHeader from "components/Header/Heading";
import { makeStyles } from '@material-ui/styles';
import clsx from "clsx";
import TeamCard from "components/Cards/TeamCard/Card";




const OurTeam = (props: any) => {
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
                                        Meet Our <span className={classes.headingspan}>Crew Members</span>
                                    </h2>
                                    <p className="lead-text mt-4">
                                    These are the people that make the magic happen.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row clearfix a">
                            <div className="col-md-12">
                                <div className="mt-5 mb-5"></div>
                            </div>
                            <TeamCard />
                            <div className="col-md-12">
                                <div className="mt-5 mb-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
           

           
            <Footer />
        </>
    )
}
export default OurTeam;


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

}))