import { makeStyles } from '@material-ui/styles';

interface PageBannerType {
    pagename?: string;
    leadtext?: string;
}
const PageBanner = ({ pagename, leadtext }: PageBannerType) => {
    const classes = useStyles();

    return (
        <>
            <div className="inner-page-header style-dark pb-0" style={{ background: '#fbf9f7' }} >
                <div className={classes.pageheadertitle}>
                    <div className="container">
                        <div className={classes.pageinner}>
                            <div className="heading-wrapper mb-0">
                                <h1 className={classes.h1}>{pagename}</h1>
                                <div className={classes.leadtext}>
                                    <p>
                                        {leadtext}
                                    </p>
                                </div>
                            </div>
                            <ul className={classes.stbreadcumb}>
                                <li style={{ marginLeft: '30px' }} className={classes.stli}><a className={classes.stlianc} href="index.html">Home</a></li>
                                <li className={classes.stli}><span className={classes.stlispan}>{pagename}</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="page_header_style">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={classes.svg}>
                            <path
                                fill="#fbf9f7"
                                fillOpacity="1"
                                d="M0,256L120,266.7C240,277,480,299,720,282.7C960,267,1200,213,1320,186.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageBanner;

const useStyles = makeStyles(theme => ({

    pageheadertitle: {
        background: 'linear-gradient(to right top, #f0a90e, #f1a20d, #f29b0d, #f3940f, #f48d12, #f48713, #f48214, #f47c15, #f47715, #f57115, #f56c15, #f56616)',
        position: 'relative',
        paddingBottom: '60px'
    },
    pageinner: {
        textAlign: 'center',
        padding: '35px 0px',
        color: '#fff'
    },
    h1: {
        fontSize: '40px',
        fontWeight: 600,
        color: '#fff',
    },
    leadtext: {
        fontSize: '20px',
        lineHeight: '1.6',
    },
    stbreadcumb: {
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: '17px',
        margin: '0px auto 0px',
        display: 'table',
        borderRadius: '4px',
        background: 'rgba(0,0,0,0.08)',
        padding: '10px 30px',
    },
    stli: {
        display: 'inline-block',
        padding: '0px 0px',
    },
    stlianc: {
        padding: '0px 5px',
        color: '#fff',
        textDecoration: 'none',
        '&::after': {
            content: '"/"',
            margin: '0px 10px',
        }
    },
    stlispan: {
        padding: '0px 5px',
        opacity: '0.6',
    },
    svg: {
        position: 'absolute',
        bottom: '0',
    },
}))