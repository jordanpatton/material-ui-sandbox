import React from 'react';
import Box from '@material-ui/core/Box';

import ControlledAutocomplete from './components/ControlledAutocomplete';

const App: React.FC = () => (
    <Box style={{ backgroundColor: '#EEEEEE', padding: '20px' }}>
        <ControlledAutocomplete />
    </Box>
);

export default App;
