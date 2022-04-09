
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import CustomButton from 'components/Buttons/CustomButton';
import { NavLink } from 'react-router-dom';

interface AuthLayoutType {
    children: JSX.Element;
}
const AuthLayout = ({ children }: AuthLayoutType) => {
    const classes = useStyles();

    const CustomButtonStyle = {
        color: '#485974',
        background: '#fff'
    }
    const CustomButtonauth = {
        color: '#fff',
        background: '#f0a30e'
    }
    const activenav = {
        color: '#000',
        background: '#fff',
        padding: '10px 12px 10px 0px',
        borderRadius: '10px 0px 0px 10px',
        marginRight: '-10px',

    }

    return (
        <>
            <div className="box-wrapper">
                <div id="main-wrapper" className="page-wrapper">
                    <div className="dc-signin theme-two position-relative">
                        <div className={classes.bgadjust}></div>
                        <div className={classes.signinwrapper}>
                            <div className={clsx(classes.interobox, "inner-auth-mobile")}>
                                <div className={classes.interocontent}>
                                    <img src="images/logo_white.svg" className="logo" alt="EasyAPI" />
                                    <div className={classes.headingwrapper}>
                                        <h2 className={classes.headingtext}>Welcome to <span className={classes.headingspan}>EasyAPI</span></h2>
                                    </div>
                                    <div className={classes.headingwrapper}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales dictum
                                            viverra. Aenean sodales dictum viverra.</p>
                                    </div>
                                    <div className={classes.headingwrapper}>
                                        <CustomButton style={CustomButtonStyle} label="Discover More" />
                                    </div>
                                </div>
                                <div className={classes.stBtn}>
                                    {
                                        (window.location.pathname !== "/forgotpassword") &&
                                        <ul className={clsx(classes.navtab, "mobile-auth-tab")} role="tablist">
                                            <li className={clsx(classes.navitem, "nav-item")}>
                                                <NavLink style={{ color: 'white' }} to="/login" activeClassName="activeRoute" activeStyle={activenav}>Login &nbsp; &nbsp; &nbsp;</NavLink>
                                            </li>
                                            <li className={clsx(classes.navitem, "nav-item")}>
                                                <NavLink style={{ color: 'white' }} to="/register" activeClassName="activeRoute" activeStyle={activenav}>Register &nbsp;</NavLink>
                                            </li>
                                        </ul>
                                    }
                                </div>
                            </div>
                            <div className={clsx(classes.stBtn, "auth-buttons")}>

                                <NavLink to="/login" > <CustomButton style={CustomButtonauth} label="Login" /> </NavLink>
                                <NavLink to="/register" ><CustomButton style={CustomButtonauth} label="Register" /></NavLink>
                            </div>
                            <div className={clsx(classes.formBox, "auth-mobile-full")}>
                                <div className="demo" style={{ width: '100%' }}>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AuthLayout;


const useStyles = makeStyles(theme => ({

    bgadjust: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        background: '#fbf9f7',
        opacity: '0.5',
    },
    signinwrapper: {
        maxWidth: '1024px',
        display: 'flex',
        padding: '0px',
        width: '100%',
        margin: '30px auto',
        boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 10%)',
        transition: 'all 400ms ease-in-out',
        overflow: 'hidden',
        minHeight: '570px',
        zIndex: 1,
        background: '#fff',
        borderRadius: '8px'
    },
    interobox: {
        flex: '0 0 60%',
        maxWidth: '60%',
        padding: '150px 50px 50px',
        position: 'relative',
        background: 'linear-gradient(-135deg, #f0ac0e 0%, #f56616 100%)',
    },
    interocontent: {
        color: '#fff'
    },
    headingwrapper: {
        marginBottom: '30px'
    },
    headingtext: {
        color: '#fff',
        fontWeight: 'bold'
    },
    headingspan: {
        fontFamily: "'Alegreya', serif",
        fontStyle: 'italic',
    },
    stBtn: {
        position: 'absolute',
        top: '0',
        right: '0',
        padding: '0px 0px 0px',
        marginBottom: '15px',
    },
    navtab: {
        border: 'none',
        display: 'block',
        paddingTop: '30px',
        flexWrap: 'wrap',
        paddingLeft: '0',
        marginBottom: '0',
        listStyle: 'none',
    },
    formBox: {
        flex: '0 0 40%',
        maxWidth: '40%',
        width: '100%',
        padding: '50px 50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navitem: {
        padding: '10px',
        borderRadius: '10px 0px 0px 10px',
        // background: 'white',
        fontWeight: 700,
        marginTop: '5px'
    }

}))