import React, { useState } from "react";
import Banner from "../../components/banner";
import Filters from "../../components/filters";
import UserList from "../../components/user-list";
import "./styles.css";
const Index = () => {
 const [listView, setListView] = useState(false);
 return (
  <>
   <Banner />
   <Filters view={listView} setView={setListView} />
   <UserList view={listView ? "List" : "Grid"} />
  </>
 );
};

export default Index;
