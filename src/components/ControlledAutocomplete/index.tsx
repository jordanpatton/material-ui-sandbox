import React from 'react';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Popper from '@material-ui/core/Popper';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { TWidget, WIDGETS } from './constants';
import { useStyles } from './styles';

export const ControlledAutocomplete: React.FC = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [value, setValue] = React.useState<TWidget[]>([]);
    const [pendingValue, setPendingValue] = React.useState<TWidget[]>([]);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setPendingValue(value);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setValue(pendingValue);
        if (anchorEl) { anchorEl.focus(); }
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                aria-describedby={!!anchorEl ? 'some-id' : undefined}
                className={classes.button}
                disableRipple
                onClick={handleClick}
                variant="contained"
            >
                {value.length ? value.map((v: TWidget) => v.description).join(', ') : 'Select Widgets...'}
            </Button>
            <Popper
                anchorEl={anchorEl}
                className={classes.popper}
                id={!!anchorEl ? 'some-id' : undefined}
                open={!!anchorEl}
                placement="bottom-start"
            >
                <div className={classes.header}>Non-Interactive Zone</div>
                <Autocomplete
                    classes={{
                        option: classes.option,
                        paper: classes.paper,
                        popperDisablePortal: classes.popperDisablePortal,
                    }}
                    disableCloseOnSelect
                    disablePortal
                    getOptionLabel={(option: TWidget) => option.name}
                    multiple
                    noOptionsText="No labels"
                    onChange={(_event, newValue) => setPendingValue(newValue)}
                    onClose={handleClose}
                    open={!!anchorEl}
                    options={WIDGETS}
                    renderInput={renderInputParams => (
                        <InputBase
                            autoFocus
                            className={classes.inputBase}
                            inputProps={renderInputParams.inputProps}
                            ref={renderInputParams.InputProps.ref}
                        />
                    )}
                    renderOption={(o: TWidget, { selected }) => (
                        <>{o.description}{selected ? ' (selected)' : null}</>
                    )}
                    renderTags={() => null}
                    value={pendingValue}
                />
            </Popper>
        </>
    );
}

export default ControlledAutocomplete;
