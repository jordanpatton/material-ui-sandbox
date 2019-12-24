import React from 'react';
import LuxonUtils from '@date-io/luxon';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export const PickerA: React.FC = () => {
    const [value, setValue] = React.useState<Date | undefined>(new Date());
    return (
        <MuiPickersUtilsProvider utils={LuxonUtils}>
            <Box>
                <Typography>Picker A (@material-ui/pickers)</Typography>
                <DatePicker
                    disableToolbar
                    variant="inline"
                    label="Only calendar"
                    helperText="No year selection"
                    value={value}
                    onChange={(v: Date) => setValue(v)}
                />
            </Box>
        </MuiPickersUtilsProvider>
    );
}
PickerA.displayName = 'PickerA';

export default PickerA;
