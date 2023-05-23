import React, { useState } from "react";
import Banner from "../../components/banner";
import Filters from "../../components/filters";
import UserList from "../../components/user-list";
import "./styles.css";
import { useSelector } from "react-redux";
const Index = () => {
    const [listView, setListView] = useState(false);
    const [data, setData] = React.useState([]);
    const { allDevelopers, loading, priceFilter, servicesFilter, ratingFilter, availableToWorkFilter, proTallentFilter, activeTab } = useSelector(store => store.mainReducer)

    React.useEffect(() => {
        if (allDevelopers.length > 0) {
            const filterdData = allDevelopers.filter(dev =>
                (dev.availableToWork === availableToWorkFilter) &&
                (dev.proTallent === proTallentFilter)
            )
            const finalFilterdData = filterdData.filter(dev =>
                (dev.hourlyRate >= priceFilter[0] && dev.hourlyRate <= priceFilter[1]) &&
                (typeof (ratingFilter) === 'number' ? dev.ratingCount() >= Number(ratingFilter) : dev.ratingCount() >= 5) &&
                ((dev.specialization.filter(item => item.toLowerCase().includes(servicesFilter === "All" ? "" : servicesFilter.toLowerCase()))).length > 0) &&
                (activeTab.toLowerCase() === "all" ? true : dev.category.toLowerCase() === activeTab.toLowerCase())
            )
            setData(finalFilterdData)
        }
        else { setData([]) }

    }, [allDevelopers, priceFilter, servicesFilter, ratingFilter, availableToWorkFilter, proTallentFilter, activeTab])


    return (
        <>
            <Banner />
            <Filters view={listView} setView={setListView} />
            <UserList
                view={listView ? "List" : "Grid"}
                allDevelopersList={data}
                loading={loading}
            />
        </>
    );
};

export default Index;
