import React from "react";
import { makeStyles } from '@material-ui/styles';
import marketing from "assets/images/marketing.svg";
import { TeamCardData } from "../ProfileCard/CardData";

const useStyles = makeStyles(theme => ({
    featureblock: {
        visibility: 'visible',
        animationDelay: '0s',
        animationName: 'fadeInUp',
        position: 'relative',
        zIndex: 1,
        marginBottom: '30px',
        '&:hover': {
            boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
            border: 'dashed .6px #0b2849',
            borderRadius:'20px'
        }
    },
    innerbox: {
        minHeight: '250px',
        transition: 'all 400ms ease-in-out',
        position: 'relative',
        textAlign: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 10%)',
        borderRadius: '6px',
        background: '#fff',
        '&::before': {
            transform: 'translateY(102%)',
            width: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            content: ' "" ',
            height: '100%',
            transition: 'all 500ms ease-in-out',
            background: 'linear-gradient(-135deg, #f0ac0e 0%, #f56616 100%)',
        },
         '&:hover': {
          
            borderRadius:'20px'
        }
     
    },
    icon: {
        position: 'relative',
        minHeight: '50px',
        margin: '0px auto 18px'
    }
}));

const TeamCard = () => {
    const classes = useStyles();
    return (
        <>
            {
                TeamCardData.map((item, index) => (
                    <div className="col-lg-3 col-md-3" key={index}>
                        <div
                            className={classes.featureblock}
                            data-wow-delay="0s"
                            style={{ visibility: 'visible', animationDelay: '0s', animationName: 'fadeInUp' }}
                        >
                            <div className={classes.innerbox}>
                                <div className={classes.icon}>
                                    <img style={{ width: '100%' }} className="normal mx-auto" src="https://webtoolfeed.files.wordpress.com/2011/12/1.jpg" alt="" />
                                </div>
                                <div className="text">
                                    <h4 className="card_heading">{item.name}</h4>
                                    <p>
                                        {item.work}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default TeamCard;