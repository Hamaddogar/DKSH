import React, { useState } from "react";
import Banner from "../../components/banner";
import Filters from "../../components/filters";
import UserList from "../../components/user-list";
import "./styles.css";
import { useSelector } from "react-redux";
const Index = () => {
    const [listView, setListView] = useState(false);
    const [data, setData] = React.useState([]);
    const { allDevelopers, loading } = useSelector(store => store.mainReducer)

    React.useEffect(() => {
        setData(allDevelopers)
    }, [allDevelopers])



    return (
        <>
            <Banner />
            <Filters view={listView} setData={setData} setView={setListView} />
            <UserList
                view={listView ? "List" : "Grid"}
                allDevelopersList={data}
                loading={loading}
            />
        </>
    );
};

export default Index;
