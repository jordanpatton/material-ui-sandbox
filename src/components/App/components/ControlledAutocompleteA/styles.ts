import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
    button: {
        fontSize: 13,
        width: '200px',
        textAlign: 'left',
        paddingBottom: 8,
        color: '#586069',
        fontWeight: 600,
        '&:hover, &:focus': { color: '#0366d6' },
        '& span': { width: '100%' },
        '& svg': { height: 16, width: 16 },
    },
    header: {
        borderBottom: '1px solid #e1e4e8',
        fontWeight: 600,
        padding: '8px 10px',
    },
    inputBase: {
        borderBottom: '1px solid #dfe2e5',
        padding: 10,
        width: '100%',
        '& input': {
            backgroundColor: theme.palette.common.white,
            border: '1px solid #ced4da',
            borderRadius: 4,
            fontSize: 14,
            padding: 8,
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            '&:focus': {
                borderColor: theme.palette.primary.main,
                boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            },
        },
    },
    option: {
        alignItems: 'flex-start',
        minHeight: 'auto',
        padding: 8,
        '&[aria-selected="true"]': { backgroundColor: 'transparent' },
        '&[data-focus="true"]': { backgroundColor: theme.palette.action.hover },
    },
    paper: {
        boxShadow: 'none',
        color: '#586069',
        fontSize: 13,
        margin: 0,
    },
    popper: {
        backgroundColor: '#f6f8fa',
        border: '1px solid rgba(27,31,35,.15)',
        borderRadius: 3,
        boxShadow: '0 3px 12px rgba(27,31,35,.15)',
        color: '#586069',
        fontSize: 13,
        width: 300,
        zIndex: 1,
    },
    popperDisablePortal: {
        position: 'relative',
    },
}));
