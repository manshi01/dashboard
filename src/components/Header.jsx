import * as React from 'react';
import Stack from '@mui/material/Stack';
import NotificationIcon from './NotificationsRoundIcon';

import CustomDatePicker from "./CustomDatePicker";
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import MenuButton from './MenuButton';
// import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import Search from './Search';

export default function Header() {
  return (
    
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
        <CustomDatePicker />
        <MenuButton showBadge aria-label="Open notifications">
        {/* <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem" }}> */}
      <NotificationIcon count={5} onClick={() => alert("Open notifications")} />
    {/* </div> */}
        </MenuButton>
        {/* <ColorModeIconDropdown /> */}
      </Stack>
    </Stack>
  );
}
