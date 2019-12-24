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
type TDateRangePickerOnChangeChanges = { [key: string]: IDateRange };

const DATE_RANGE_KEY = 'DATE_RANGE_';

export const PickerC: React.FC = () => {
    const [value, setValue] = React.useState<IDateRange[]>([
        { color: 'cyan', endDate: new Date(), key: `${DATE_RANGE_KEY}0`, startDate: new Date() },
        { color: 'magenta', endDate: new Date(), key: `${DATE_RANGE_KEY}1`, startDate: new Date() },
        { color: 'yellow', endDate: new Date(), key: `${DATE_RANGE_KEY}2`, startDate: new Date() },
        { color: 'black', endDate: new Date(), key: `${DATE_RANGE_KEY}3`, startDate: new Date() },
        { color: 'grey', endDate: new Date(), key: `${DATE_RANGE_KEY}4`, startDate: new Date() },
    ]);
    return (
        <Box>
            <Typography>Picker C (react-date-range)</Typography>
            <DateRangePicker
                onChange={(changes: TDateRangePickerOnChangeChanges) =>
                    setValue(value.map(v => ({
                        ...v,
                        ...(v.key ? changes[v.key] : {}),
                    })))
                }
                ranges={value}
            />
        </Box>
    );
}
PickerC.displayName = 'PickerC';

export default PickerC;
