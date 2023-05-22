import React from "react";
import "./styles.css";
import ProfileCard from "../profile-card";
import { Grid } from "@mui/material";
const users = ["", "", "", "", "", "", "", ""];
const Index = (props) => {
 const { view } = props;
 return (
  <Grid item container spacing={2}>
   {view === "List"
    ? users.map((user) => (
       <Grid item key={user.id} xs="12" sm="12" md="12" lg="12">
        <ProfileCard user={user} view={view} />
       </Grid>
      ))
    : users.map((user) => (
       <Grid item key={user.id} xs="12" sm="6" md="4">
        <ProfileCard user={user} view={view} />
       </Grid>
      ))}
  </Grid>
 );
};

export default Index;
