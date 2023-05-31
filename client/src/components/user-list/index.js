import React, { useContext } from "react";
import "./styles.css";
import ProfileCard from "../profile-card";
import { Alert, Grid, Skeleton, Stack } from "@mui/material";
import ThemeContext from "../../context/ThemeContext";
const users = ["", "", "", "", "", "", "", ""];
const Index = ({ allDevelopersList, loading, view }) => {
   const { dark } = useContext(ThemeContext);

   const LoadSkelton = React.useCallback(() => {
      return (
         <Stack spacing={1}>
            <Skeleton
               sx={{ bgcolor: dark ? 'grey.900' : 'none', fontSize: '1rem' }}
               variant="text"
            />
            <Skeleton
               sx={{ bgcolor: dark ? 'grey.900' : 'none' }}
               variant="circular"
               width={40}
               height={40}
            />
            <Skeleton
               sx={{ bgcolor: dark ? 'grey.900' : 'none' }}
               variant="rectangular"
               height={60}
            />
            <Skeleton
               sx={{ bgcolor: dark ? 'grey.900' : 'none' }}
               variant="rounded"
               height={60}
            />
         </Stack>
      );
   }, [dark]);

   const mapUsers = React.useCallback(
      (user) => (
         <Grid item key={user} xs="12" sm="12" md="12" lg="12">
            {LoadSkelton()}
         </Grid>
      ),
      [LoadSkelton]
   );

   const mapProfileCards = React.useCallback(
      (user) => (
         <Grid item key={user.id} xs="12" sm="6" md="4">
            <ProfileCard user={user} view={view} />
         </Grid>
      ),
      [view]
   );

   return (
      <Grid item container spacing={2}>
         {(loading || allDevelopersList[0] === null) && (view === 'List'
            ? users.map(mapUsers)
            : users.map(mapUsers))}
         {!loading && allDevelopersList.length === 0 && (
            <Grid item xs="12">
               <Alert severity="error">No Profile Found</Alert>
            </Grid>
         )}
         {!loading &&
            (view === 'List'
               ? allDevelopersList[0] !== null &&
               allDevelopersList?.map(mapProfileCards)
               : allDevelopersList[0] !== null &&
               allDevelopersList?.map(mapProfileCards))}
      </Grid>
   );
};


export default Index;
