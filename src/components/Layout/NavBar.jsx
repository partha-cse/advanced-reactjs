import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

import { useTheme } from '../../hooks';

const pages = [
    { label: 'Products', link: 'products' },
    { label: 'Orders', link: 'orders' },
    { label: 'Products Bad', link: 'products_bad' },
];

const styles = {
    navLink: {
        underline: 'none',
        textDecoration: 'none',
        fontWeight: 700,
        color: 'white',
    },
};

function NavBar() {
    const darktheme = useTheme();
    const themeColor = darktheme ? '#121212' : '#1976d2';

    return (
        <AppBar position="static" style={{ backgroundColor: themeColor }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ mr: 1 }} />
                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        {pages.map((page) => (
                            <NavLink key={page.label} style={styles.navLink} to={`/${page.link}`}>
                                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                    {page.label}
                                </Button>
                            </NavLink>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
