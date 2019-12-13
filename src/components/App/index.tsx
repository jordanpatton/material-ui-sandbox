import React from 'react';
import Box from '@material-ui/core/Box';

import ControlledAutocompleteA from './components/ControlledAutocompleteA';
import ControlledAutocompleteB from './components/ControlledAutocompleteB';

import './styles.css';

const App: React.FC = () => (
    <>
        <Box style={{ backgroundColor: '#EEEEEE', padding: '20px' }}>
            <ControlledAutocompleteA />
        </Box>
        <Box style={{ backgroundColor: '#EEEEEE', padding: '20px' }}>
            <ControlledAutocompleteB />
        </Box>
    </>
);

export default App;
