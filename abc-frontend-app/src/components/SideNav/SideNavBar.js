import * as React from 'react';
import { useState, useRef } from 'react';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import NavList from './NavList';
import StyledAvatar from './StyledAvatar';
import MainContent from '../layout/MainContent';
import ApplicationBar from '../layout/ApplicationBar';
import { Link } from 'react-router-dom';
import { Dimensions } from '../../util/AppConstants';

const drawerWidthOpen = 240;
const paddingIconButton = 10;
const marginIconButton = 14;
const iconFontSize = 20;
const drawerWidthClose =
    (paddingIconButton + marginIconButton) * 2 + iconFontSize;

export default function SideNavbar() {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const refFocus = useRef();

    function toogleOpen() {
        setOpen(!open);
    }

    function toogleOpenSearch() {
        setOpen(false);
        setTimeout(() => {
            refFocus.current.focus();
        }, 500);
    }

    const drawerContent = (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '30px',
                    width: 'auto',
                    backgroundColor: 'transparent',
                    margin: '0px 14px',
                    padding: '18px 0px 8px',
                    borderBottom: '1px solid lightgray',
                    alignItems: 'flex-end',
                }}
            >
                <Box
                    sx={{
                        flexShrink: 0,
                        display: open ? 'none' : { xs: 'none', sm: 'initial' },
                        marginBottom: '9px',
                    }}
                >
                </Box>
                <Typography
                    variant="h1"
                    noWrap={true}
                    gutterBottom
                    sx={{
                        display: { xs: 'none', sm: 'initial' },
                        fontSize: '18px',
                        fontWeight: 600,
                        color: 'lightgray',
                        width: '154px',
                        marginLeft: open ? '0px' : '8px',
                        paddingBottom: '3px',
                    }}
                >
                    Foodligence
        </Typography>

                <Button
                    onClick={toogleOpen}
                    sx={{
                        minWidth: 'initial',
                        padding: '10px',
                        color: 'gray',
                        borderRadius: '8px',
                        backgroundColor: open ? 'transparent' : 'transparent',
                        '&:hover': {
                            backgroundColor: '#26284687',
                        },
                    }}
                >
                    <MenuIcon
                        sx={{ fontSize: '20px', color: open ? 'lightgray' : 'lightGray' }}
                    ></MenuIcon>
                </Button>
            </Box>

            <List dense={true}>
                {NavList.map((key, index) => (
                    <div key={key.desc}>
                        <Tooltip
                            title={open ? key.desc : ''}
                            placement={'right'}
                            componentsProps={{
                                tooltip: {
                                    sx: {
                                        backgroundColor: 'gray',
                                        color: 'white',
                                        marginLeft: '22px !important',
                                        boxShadow: '0px 0px 22px -2px rgba(0,0,0,0.20)',
                                    },
                                },
                            }}
                        >
                            <Link to={key.link}>
                            <ListItemButton
                                sx={{
                                    margin: '6px 14px',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    '&:hover': {
                                        backgroundColor: '#26284687',
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: '46px' }}>
                                    <Badge
                                        badgeContent={key.badge}
                                        color="secondary"
                                        variant="dot"
                                    >
                                        <key.icon sx={{ fontSize: '20px', color: 'lightgray' }} />
                                    </Badge>
                                </ListItemIcon>

                                <ListItemText
                                    primary={key.desc}
                                    primaryTypographyProps={{
                                        variant: 'body2',
                                    }}
                                    sx={{
                                        display: 'inline',
                                        margin: '0px',
                                        overflowX: 'hidden',
                                        color: 'lightgray',
                                        whiteSpace: 'nowrap',
                                        minWidth: '126px',
                                    }}
                                />
                                {key.badge !== 0 ? (
                                    <Chip
                                        label={key.badge}
                                        color={'secondary'}
                                        size="small"
                                        sx={{ height: 'auto' }}
                                    />
                                ) : (
                                        <></>
                                    )}
                            </ListItemButton>
                            </Link>
                        </Tooltip>
                    </div>
                ))}
                <Divider variant="middle" light={true} />
            </List>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    alignContents: 'center',
                    margin: '14px 14px',
                    padding: '12px 4px',
                    borderTop: '1px solid lightgray',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        marginRight: '18px',
                        paddingLeft: '0px',
                        alignItems: 'center',
                        alignContent: 'center',
                    }}
                >
                    <StyledAvatar />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography
                        component="span"
                        variant="body2"
                        sx={{
                            fontFamily: 'inherit',
                            display: 'block',
                            whiteSpace: 'nowrap',
                            lineHeight: 'inherit',
                            fontWeight: 500,
                            color: 'lightgray',
                        }}
                    >
                        Trewon Weerasoriya
          </Typography>
                    <Typography
                        component="span"
                        variant="body2"
                        sx={{
                            display: 'block',
                            whiteSpace: 'nowrap',
                            lineHeight: 'inherit',
                            color: 'lightgray',
                        }}
                    >
                        Warehouse manager
          </Typography>
                </Box>
                <IconButton contained sx={{ color: 'lightGray' }}>
                    <ExitToAppIcon />
                </IconButton>
            </Box>
        </>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                open={open}
                sx={{
                    width: open
                        ? { xs: '0px', sm: drawerWidthClose }
                        : { xs: drawerWidthClose, sm: drawerWidthOpen },
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: open
                            ? theme.transitions.duration.leavingScreen
                            : theme.transitions.duration.enteringScreen,
                    }),
                    '& .MuiDrawer-paper': {
                        justifyContent: 'space-between',
                        overflowX: 'hidden',
                        width: open
                            ? { xs: '0px', sm: drawerWidthClose }
                            : { xs: drawerWidthClose, sm: drawerWidthOpen },
                        borderRight: '0px',
                        borderRadius: '0px 2px 2px 0px',
                        boxShadow: theme.shadows[8],
                        backgroundColor: open ? '#11101D' : '#11101D',
                        transition: theme.transitions.create('width', {
                            easing: theme.transitions.easing.sharp,
                            duration: open
                                ? theme.transitions.duration.leavingScreen
                                : theme.transitions.duration.enteringScreen,
                        }),
                    },
                }}
            >
                {drawerContent}
            </Drawer>
            <Box
                component="main"
                style={{ width: `calc(100% - ${Dimensions.drawerWidth}px)` }}

            >
                <ApplicationBar />
                <MainContent />
            </Box>
        </Box>
    );
}
