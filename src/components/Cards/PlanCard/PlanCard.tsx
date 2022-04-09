import List from "components/List/List";
import { PlanCardData } from "../ProfileCard/CardData";
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import CustomButton from "components/Buttons/CustomButton";


const PlanCard = () => {
    const classes = useStyles()
    const css = {
        background: '#485974'
    }

    return (
        <>
            {
                PlanCardData.map((item, index) => (
                    <div key={index} className="col-lg-4 col-12">
                        <div className={clsx(classes.pricecard, (index === 1) && "extrapricecard")}>
                            <div className={clsx(classes.cardheader, (index === 1) && "extraheader")}>
                                <h3 className={classes.cardheading} style={{ color: (index === 1) ? "white" : "" }}>{item.heading}</h3>
                                <div className="plan-cost-wrapper">
                                    <div className={classes.plancost}>
                                        <span className={classes.plancostprefix}>$</span>{item.price}
                                    </div>
                                    <div className={classes.planvalidity}>per month</div>
                                </div>
                            </div>
                            <div className={classes.cardbody}>
                                <div className="desc" style={{ marginTop: (index === 1) ? "25px" : "" }}>
                                    <p> {item.description} </p>
                                </div>
                                <ul className={classes.pricefeature}>
                                    {
                                        item.advantages.map((nestedlist, i) => (
                                            <div key={i}>
                                                <List className={nestedlist.list1.mark} text={nestedlist.list1.text} />
                                                <List className={nestedlist.list2.mark} text={nestedlist.list2.text} />
                                                <List className={nestedlist.list3.mark} text={nestedlist.list3.text} />
                                                <List className={nestedlist.list4.mark} text={nestedlist.list4.text} />
                                                <List className={nestedlist.list5.mark} text={nestedlist.list5.text} />
                                                <List className={nestedlist.list6.mark} text={nestedlist.list6.text} />
                                            </div>
                                        ))
                                    }
                                </ul>
                                <CustomButton style={(index !== 1) && css} label="Purchase Now" />
                                <div style={{ marginTop: (index === 1) ? "25px" : "" }}> </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default PlanCard;


const useStyles = makeStyles(theme => ({
    pricecard: {
        background: '#fff',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 10%)',
        marginTop: '30px',
    },
    cardheader: {
        background: 'transparent',
        padding: '40px 30px 30px',
        border: 'none',
        borderRadius: '8px',
    },
    cardheading: {
        fontFamily: "'Source Sans Pro', sans-serif'",
        fontSize: "36px",
        fontWeight: 'bold',
        letterSpacing: "-0.6px",
        marginBottom: "30px",
        color: "#f56616",
    },
    plancost: {
        fontSize: '60px',
        fontWeight: 700,
        fontFamily: '"Source Sans Pro", sans-serif',
        letterSpacing: '-1px',
        lineHeight: '0.8',
        marginBottom: '5px',
    },
    plancostprefix: {
        display: 'inline',
        fontSize: '36px',
        lineHeight: 'inherit',
        verticalAlign: 'super',
        fontWeight: 900,
    },
    planvalidity: {
        margin: '0',
        textTransform: 'uppercase',
        letterSpacing: '0px',
        fontSize: '16px',
    },
    cardbody: {
        padding: '0px 30px 50px',
        flex: '1 1 auto',
        minHeight: '1px',
    },
    pricefeature: {
        fontSize: '18px',
        fontWeight: 600,
        fontFamily: '"Source Sans Pro", sans-serif',
        color: '#111',
        margin: '45px 0px',
    }
}))