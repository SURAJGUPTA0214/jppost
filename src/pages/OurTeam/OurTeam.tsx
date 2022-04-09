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
import HeroBanner from "components/HeroBanner/HeroBanner";




const OurTeam = (props: any) => {
    const classes = useStyles();

    return (
        <>
            <NavbarHeader />
            <HeroBanner />
            <section>
                <div className="container">
                    <div className="row">
                        <div className={clsx(classes.casesWrap, "d-md-flex align-items-center")}>
                            <img src="http://www.clarimanconsultants.com/images/Kartick-Saw.jpg" className={classes.img} />
                            <div className="text pl-md-5">
                                <span className="cat">Executive Director</span>
                                <h2><hr style={{color:'#006699', border:'2px solid', width:'10%', float:'left', marginBottom:'0.5em'}} />&nbsp;&nbsp;RUPA SAHA</h2>
                                <p>She is First ClassNclassName Graduate in Science. She has over 2 years of experience in the field of Accounting, Income Tax, Auditing, GST &amp; Statutory business compliances. She has served in industries like Healthcare, Trading Etc.</p>
                            </div>
						</div>

                    </div>
                </div>
            </section>
           

           
            <Footer />
        </>
    )
}
export default OurTeam;


const useStyles = makeStyles(theme => ({
    casesWrap: {
        width: '100%',
        marginBottom: '30px',
        '& .text': {
            width: '100%',
            paddingLeft:'3rem'
        },
        '& .text .cat': {
            textTransform: 'uppercase',
            color: '#004c72',
            letterSpacing: '2px',
            marginBottom: '10px',
            fontSize: '14px',
            display: 'inline-block',
        },
        '& .text h2': {
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: '1.5',
            color: 'rgba(0, 0, 0, 0.8)',
            marginBottom: '0.5rem',
            fontFamily: 'inherit',
        },
          '& .text p': {
            padding: '1em',
            lineHeight: '25px',
            marginTop: '0',
            marginBottom: '1rem',
        }
    },
    img: {
        width: '100%',
        height: '450px',
        borderRadius: '4px',
        backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    }
  

}))