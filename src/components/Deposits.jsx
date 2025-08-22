"use client";
import * as React from "react";
import { Typography, Link } from "@mui/material";

export default function Deposits() {
  return (
    <React.Fragment>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 August, 2025
      </Typography>
      <div>
        <Link color="primary" href="#">
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
