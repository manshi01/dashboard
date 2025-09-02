import * as React from "react";
import { IconButton, Badge } from "@mui/material";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

export default function NotificationIcon({ count = 0, onClick }) {
  return (
    <IconButton color="" aria-label="notifications" onClick={onClick}>
      <Badge badgeContent={count} color="error">
        <NotificationsRoundedIcon />
      </Badge>
    </IconButton>
  );
}
