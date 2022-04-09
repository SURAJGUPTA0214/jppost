import Headingstart from "components/Header/HeadingStart";
import { makeStyles } from '@material-ui/styles';
import clsx from "clsx";
import React from "react";
import ModalPopup from "components/Modal/ModalPopup";
import Models from "./Models";

const StartProject = () => {
    const classes = useStyles();
    const [modalUser, setModalUser] = React.useState<boolean>(false);


    return (
        <>
            <div className="d-flex flex-column min-vh-100" style={{ background: '#fbf9f7' }}>
                <Headingstart />
                <div className={clsx(classes.d3Btn, "flex-grow-1 d3_btn")}>
                    <ul>
                        <li>
                            <button id="add_btn" className="signin_btn" onClick={() => setModalUser(true)} >+</button>
                        </li>
                    </ul>
                </div>
                <ModalPopup visible={modalUser} onCancel={() => setModalUser(false)}>
                    <>
                        <Models />
                    </>
                </ModalPopup>
            </div>
        </>
    )
}
export default StartProject;

const useStyles = makeStyles(theme => ({
    d3Btn: {
        paddingTop: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&>ul>li>button': {
            position: 'relative',
            top: '-10%',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'sans-serif',
            boxShadow: '6px 3px 9px 0px rgb(240 172 80 / 80%), -5px -3px 11px 3px rgb(240 172 80 / 40%)',
            borderRadius: '50%',
            width: '70px',
            height: '70px',
            fontSize: '45px',
            border: '0',
            background: '#f0ac0e',
            color: '#fff'
        }
    }


}))