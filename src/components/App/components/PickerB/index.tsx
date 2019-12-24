import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface IDateRange {
    autoFocus?: boolean;
    color?: string;
    disabled?: boolean;
    endDate?: Date;
    key?: string;
    showDateDisplay?: boolean;
    startDate?: Date;
}
type TDateRangePickerOnChangeValue = { [key: string]: IDateRange };

const DATE_RANGE_KEY = 'DEFAULT_DATE_RANGE';

export const PickerB: React.FC = () => {
    const [value, setValue] = React.useState<IDateRange>({
        endDate: new Date(),
        key: DATE_RANGE_KEY,
        startDate: new Date(),
    });
    return (
        <Box>
            <Typography>Picker B (react-date-range)</Typography>
            <DateRangePicker
                onChange={(v: TDateRangePickerOnChangeValue) => setValue(v[DATE_RANGE_KEY])}
                ranges={[value]}
            />
        </Box>
    );
}
PickerB.displayName = 'PickerB';

export default PickerB;
