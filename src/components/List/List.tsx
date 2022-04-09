
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';


interface ListType {
    text?: string;
    style?: object;
    className?: string;
}
const List = ({ text, style, className }: ListType) => {
    const classes = useStyles();
    const liststyle = {
        marginBottom: '12px',
        position: 'relative' as 'relative',
        paddingLeft: '30px',
        ...style
    }
    return (
        <>
            <li style={liststyle} className={clsx(classes.list, className)}> {text} </li>
        </>
    )
}
export default List;

const useStyles = makeStyles(theme => ({
    list: {
        '&::before': {
            content: '""',
            width: '3px',
            height: '10px',
            background: '#f56616',
            position: 'absolute',
            top: '9px',
            left: '0',
        },
        '&::after': {
            content: '""',
            left: '5px',
            width: '10px',
            height: '10px',
            background: '#f56616',
            position: 'absolute',
            top: '9px',
        }
    },

}));