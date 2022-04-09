import List from "components/List/List";
import { Democard } from "../ProfileCard/CardData";
import { makeStyles } from '@material-ui/styles';


const DemoCard = () => {
    const classes = useStyles();

    return (
        <>
            {
                Democard.map((item, index) => (

                    <div className="col-lg-3 col-md-3 col-sm-12" key={index}>
                        <div className="features-block theme-two wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                            <div className={classes.benefitcard}>
                                <div className="mb-3">
                                    {item?.icon}
                                </div>
                                <h4 className={classes.heading}>{ item?.heading}</h4>
                            </div>
                        </div>
                    </div>

                ))
            }

        </>
    )
}
export default DemoCard;

const useStyles = makeStyles(theme => ({
    benefitcard: {
        background: 'rgba(254, 251, 243, 0.08)',
        transition: 'all 400ms ease-in-out',
        padding: '40px 30px',
        borderRadius: '6px',
        cursor: 'pointer',
        marginBottom: '20px',
        textAlign:'center',
        '&:hover': {
            background: 'rgba(254, 251, 243, 0.15)',
            boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 20%)',
        }
    },
    heading: {
        fontSize: '20px',
        fontWeight: 700,
        color:'#fff',
    }
   

}));