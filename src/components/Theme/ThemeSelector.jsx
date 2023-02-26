import React from 'react';
import Fab from '@mui/material/Fab';

import { useTheme, useThemeUpdate } from '../../hooks';

function ThemeSelector() {
    const darktheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeColor = darktheme ? '#1976d2' : '#121212';

    return (
        <Fab
            size="small"
            aria-label="add"
            onClick={toggleTheme}
            style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: themeColor }}
        />
    );
}

export default ThemeSelector;
