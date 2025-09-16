"use client";
import * as React from "react";
import Link from "next/link";
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

  // Sidebar menu items with links
  const sidebarMenu = [
    { text: "Dashboard", icon: <Dashboard sx={{ color: "#0077b6" }} />, href: "/dashboard" },
    { text: "My Profile", icon: <Person sx={{ color: "#0077b6" }} />, href: "/profile" },
    { text: "Find Job", icon: <Search sx={{ color: "#0077b6" }} />, href: "/jobs" },
    { text: "Applied Jobs", icon: <Work sx={{ color: "#0077b6" }} />, href: "/applied-jobs" },
    { text: "Saved Jobs", icon: <FavoriteBorder sx={{ color: "#0077b6" }} />, href: "/saved-jobs" },
    { text: "Messages", icon: <Message sx={{ color: "#0077b6" }} />, href: "/messages" },
    { text: "Download CV", icon: <FileDownload sx={{ color: "#0077b6" }} />, href: "/download-cv" },
    { text: "Settings", icon: <Settings sx={{ color: "#0077b6" }} />, href: "/settings" },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          sx={{ fontWeight: "bold", color: "#0077b6", textAlign: "center", width: "100%" }}
        >
          Talentmate
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {sidebarMenu.map((item) => (
          <Link href={item.href} key={item.text} passHref legacyBehavior>
            <ListItem button component="a">
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
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
            <Link href="/" passHref legacyBehavior>
              <Button component="a" color="inherit">HOME</Button>
            </Link>
            <Link href="/jobs" passHref legacyBehavior>
              <Button component="a" color="inherit">JOBS ▾</Button>
            </Link>
            <Link href="/premium-jobs" passHref legacyBehavior>
              <Button component="a" color="inherit">PREMIUM JOBS</Button>
            </Link>
            <Link href="/register-cv" passHref legacyBehavior>
              <Button component="a" color="inherit">REGISTER CV</Button>
            </Link>
          </Box>

          {/* Right - Signout + Profile */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Link href="/logout" passHref legacyBehavior>
              <Button component="a" color="inherit" startIcon={<Logout />}>
                SIGNOUT
              </Button>
            </Link>
            <Link href="/profile" passHref legacyBehavior>
              <IconButton>
                <Person sx={{ fontSize: 32, color: "#0077b6" }} />
              </IconButton>
            </Link>
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
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#f5f5f5", p: 3, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
}
