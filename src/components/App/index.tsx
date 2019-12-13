import React from 'react';
import Box from '@material-ui/core/Box';

import ControlledAutocompleteA from './components/ControlledAutocompleteA';

import './styles.css';

const App: React.FC = () => (
    <Box style={{ backgroundColor: '#EEEEEE', padding: '20px' }}>
        <ControlledAutocompleteA />
    </Box>
);

export default App;
