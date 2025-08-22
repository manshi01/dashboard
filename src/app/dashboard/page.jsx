"use client";
import * as React from "react";
import {
  Box,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";
// import Chart from "@/components/Chart";
import ChartUserByCountry from "@/components/ChartUserByCountry";
import Deposits from "@/components/Deposits";
import Orders from "@/components/Orders";
// import DashboardLayout from "@/components/DashboardLayout";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 240 }}>
                <ChartUserByCountry />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: 240 }}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </DashboardLayout>
  );
}
