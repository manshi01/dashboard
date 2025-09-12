"use client";
import * as React from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";

import {
  Menu,
  Dashboard,
  Person,
  Search,
  Work,
  FavoriteBorder,
  Message,
  FileDownload,
  Settings,
  Logout,
} from "@mui/icons-material";

const drawerWidth = 240;

export default function DashboardLayout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Sidebar menu
  const drawer = (
    <div>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ fontWeight: "bold", color: "#0077b6", textAlign: "center", width: "100%" }}
        >
          Talentmate
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Dashboard sx={{ color: "#0077b6" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Person sx={{ color: "#0077b6" }} />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Search sx={{ color: "#0077b6" }} />
          </ListItemIcon>
          <ListItemText primary="Find Job" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Work sx={{ color: "#0077b6" }} />
          </ListItemIcon>
          <ListItemText primary="Applied Jobs" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FavoriteBorder sx={{ color: "#0077b6" }} />
          </ListItemIcon>
          <ListItemText primary="Saved Jobs" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Message sx={{ color: "#0077b6" }} />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FileDownload sx={{ color: "#0077b6" }} />
          </ListItemIcon>
          <ListItemText primary="Download CV" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Settings sx={{ color: "#0077b6" }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {/* Top Navbar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left - Menu for mobile */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>

          {/* Center Menu */}
          <Box sx={{ display: "flex", gap: 4 }}>
            <Button color="inherit">HOME</Button>
            <Button color="inherit">JOBS ▾</Button>
            <Button color="inherit">PREMIUM JOBS</Button>
            <Button color="inherit">REGISTER CV</Button>
          </Box>

          {/* Right - Signout + Profile */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Button color="inherit" startIcon={<Logout />}>
              SIGNOUT
            </Button>
            <Person sx={{ fontSize: 32, color: "#0077b6" }} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Page Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#f5f5f5", p: 3, mt: 8 }}
      >
        {children}
      </Box>
    </Box>
  );
}
