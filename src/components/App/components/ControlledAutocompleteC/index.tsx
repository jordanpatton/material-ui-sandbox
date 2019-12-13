import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { TWidget, WIDGETS } from '../../../../common/constants';

export const ControlledAutocompleteC: React.FC = () => {
    const [value, setValue] = React.useState<TWidget[]>([]);
    return (
        <Autocomplete
            disableCloseOnSelect
            disablePortal
            getOptionLabel={(o: TWidget) => o.name}
            multiple
            onChange={(_e, v: TWidget[]) => setValue(v)}
            options={WIDGETS}
            PaperComponent={({ children, ...rest }) => (
                <Paper {...rest}>
                    <Box
                        onClick={e => {
                            console.log('Box.onClick', e);
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        onMouseDown={e => { e.preventDefault(); e.stopPropagation(); }}
                        onPointerDown={e => { e.preventDefault(); e.stopPropagation(); }}
                        style={{ display: 'inline-block', verticalAlign: 'top' }}
                    >
                        <Typography style={{ fontWeight: 'bold' }}>Filters</Typography>
                        <br />
                        <Button>Filter X</Button>
                        <br />
                        <Button>Filter Y</Button>
                        <br />
                        <Button>Filter Z</Button>
                    </Box>
                    <Box style={{ borderLeft: '1px solid #EEEEEE', display: 'inline-block' }}>
                        {children}
                    </Box>
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
ControlledAutocompleteC.displayName = 'ControlledAutocompleteC';

export default ControlledAutocompleteC;
