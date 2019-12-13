import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { TWidget, WIDGETS } from '../../../../common/constants';

export const ControlledAutocompleteC: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);
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
                    <div
                        onClick={e => {
                            console.log('Button.onClick', e);
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        onMouseDown={e => { e.preventDefault(); e.stopPropagation(); }}
                        onPointerDown={e => { e.preventDefault(); e.stopPropagation(); }}
                        ref={ref}
                    >
                        left
                    </div>
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
ControlledAutocompleteC.displayName = 'ControlledAutocompleteC';

export default ControlledAutocompleteC;
