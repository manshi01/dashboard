"use client";
import { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, CssBaseline, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeRegistry from "@/components/shared-theme/ThemeRegistry";
const drawerWidth = 240;

export default function RootLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {["Dashboard", "Reports", "Settings"].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          {/* Top Navbar */}
          <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
              <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Dashboard
              </Typography>
            </Toolbar>
          </AppBar>

          {/* Sidebar */}
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
            }}
          >
            {drawer}
          </Drawer>

          {/* Main Content */}
          <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
            <Toolbar />
            {children}
          </Box>
        </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
