import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Link } from 'react-router-dom';


const CopyRight = () => {
    const classes = useStyles();
    return (
        <>
            <div className={clsx(classes.end_footer_bg, "container-fluid ")}>
                <div className={classes.copyrightBar}>
                    <div className="copyright-text text-center text-white">
                        © Copyright HTML 2020. Made with
                        <span className="fas fa-heart" style={{ fontFamily: "fontawesome" }}></span>
                        by
                        <Link className="text-decoration-none text-white" to="" target="_blank"><strong>XYZ</strong></Link>.
                    </div>
                    <div className="copyright-text text-center d-flex justify-content-center">
                        <div className="privacy pr-3">
                            <Link className="text-white" to="">Privacy Policy</Link>
                        </div>
                        <div className="support pl-3">
                            <Link className="text-white" to="help.html">Support</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CopyRight;

const useStyles = makeStyles(theme => ({
    end_footer_bg: {
        backgroundColor: '#f56616',
        zIndex: 1000,
    },
    copyrightBar: {
        padding: '8px 0px',
        fontSize: '12px',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    }

}))