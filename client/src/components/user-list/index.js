import React, { useContext } from "react";
import "./styles.css";
import ProfileCard from "../profile-card";
import { Grid, Skeleton, Stack } from "@mui/material";
import { useSelector } from 'react-redux';
import ThemeContext from "../../context/ThemeContext";
const users = ["", "", "", "", "", "", "", ""];

const Index = (props) => {
   const { view } = props;
   const { dark } = useContext(ThemeContext);
   const { allDevelopers, loading } = useSelector(store => store.mainReducer)

   console.log("----allDevelopers---", allDevelopers);

   const LoadSkelton = () => {
      return <Stack spacing={1}>
         <Skeleton sx={{ bgcolor: dark ? 'grey.900' : "none", fontSize: '1rem' }} variant="text" />
         <Skeleton sx={{ bgcolor: dark ? 'grey.900' : "none" }} variant="circular" width={40} height={40} />
         <Skeleton sx={{ bgcolor: dark ? 'grey.900' : "none" }} variant="rectangular" height={60} />
         <Skeleton sx={{ bgcolor: dark ? 'grey.900' : "none" }} variant="rounded" height={60} />
      </Stack>
   }

   return (
      <Grid item container spacing={2}>
         {
            loading && (view === "List"
               ? users.map((user) => (
                  <Grid item key={user} xs="12" sm="12" md="12" lg="12">
                     {LoadSkelton()}
                  </Grid>
               ))
               : users.map((user) => (
                  <Grid item key={user} xs="12" sm="6" md="4">
                     {LoadSkelton()}
                  </Grid>
               )))
         }
         {
            !loading && (view === "List"
               ? allDevelopers?.map((user) => (
                  <Grid item key={user.id} xs="12" sm="12" md="12" lg="12">
                     <ProfileCard user={user} view={view} />
                  </Grid>
               ))
               : allDevelopers?.map((user) => (
                  <Grid item key={user.id} xs="12" sm="6" md="4">
                     <ProfileCard user={user} view={view} />
                  </Grid>
               )))
         }

      </Grid>
   );
};

export default Index;
