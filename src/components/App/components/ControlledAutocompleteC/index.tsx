import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { TWidget, WIDGETS } from '../../../../common/constants';

export const ControlledAutocompleteA: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(true);
    const [value, setValue] = React.useState<TWidget[]>([]);

    return (
        <Autocomplete
            disableCloseOnSelect
            disablePortal
            getOptionLabel={(o: TWidget) => o.name}
            multiple
            onChange={(_e, v: TWidget[]) => setValue(v)}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            options={WIDGETS}
            PaperComponent={({ children, ...rest }) => (
                <Paper {...rest}>
                    <Box onClick={e => { e.preventDefault(); e.stopPropagation(); }}>
                        left
                    </Box>
                    {children}
                </Paper>
            )}
            renderInput={renderInputParams => (
                <TextField
                    {...renderInputParams}
                    inputProps={{ ...renderInputParams.inputProps, autoComplete: 'disabled' }}
                    variant="outlined"
                />
            )}
            renderOption={(o: TWidget, { selected }) => (
                <>{o.description}{selected ? ' (selected)' : null}</>
            )}
            value={value}
        />
    );
}

export default ControlledAutocompleteA;
