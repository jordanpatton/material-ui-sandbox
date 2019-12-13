import React from 'react';
import Box from '@material-ui/core/Box';

import ControlledAutocompleteA from './components/ControlledAutocompleteA';
import ControlledAutocompleteB from './components/ControlledAutocompleteB';
import ControlledAutocompleteC from './components/ControlledAutocompleteC';

import './styles.css';

export const windowOnClick: EventListener = e => {
    // console.log('window.onClick', e);
};

export class App extends React.Component {
    public componentDidMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener('click', windowOnClick);
        }
    }

    public componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('click', windowOnClick);
        }
    }

    public render() {
        return (
            <>
                <Box style={{ backgroundColor: '#EEEEEE', padding: '20px' }}>
                    <ControlledAutocompleteA />
                </Box>
                <Box style={{ backgroundColor: '#EEEEEE', padding: '20px' }}>
                    <ControlledAutocompleteB />
                </Box>
                <Box style={{ backgroundColor: '#EEEEEE', padding: '20px' }}>
                    <ControlledAutocompleteC />
                </Box>
            </>
        );
    }
}

export default App;
