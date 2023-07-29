import React, { useState } from "react";
import Banner from "../../components/banner";
import Filters from "../../components/filters";
import UserList from "../../components/user-list";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { SERVICE_Filter_Options } from "../../RTK/Reducers/Reducers";
import { commentCount, ratingCount } from "../../utils/HELPER";
const Index = () => {
    const dispatch = useDispatch();
    const [listView, setListView] = useState(false);
    const [data, setData] = React.useState([null]);
    const { settings, allDevelopers, loading, priceFilter, servicesFilter, ratingFilter, availableToWorkFilter, proTallentFilter, activeTab } = useSelector(store => store.mainReducer)
    React.useEffect(() => {
        if (allDevelopers?.length > 0) {
            const filterdData = allDevelopers.filter(dev =>
                (dev.availableToWork === availableToWorkFilter) &&
                (dev.proTallent === proTallentFilter)
            )
            const finalFilterdData = filterdData.filter(dev =>
                (dev.hourlyRate >= priceFilter[0] && dev.hourlyRate <= priceFilter[1]) &&
                (typeof (ratingFilter) === 'number' ? ratingCount(dev?.comments, commentCount(dev?.comments)) >= Number(ratingFilter) : ratingCount(dev?.comments, commentCount(dev?.comments)) >= 5) &&
                ((dev.specialization.filter(item => item.toLowerCase().includes(servicesFilter === "All" ? "" : servicesFilter.toLowerCase())))?.length > 0) &&
                (activeTab.toLowerCase() === "all" ? true : dev.mainCategory.toLowerCase() === activeTab.toLowerCase())
            )
            setData(finalFilterdData);
            const specializationSet = [];
            allDevelopers.forEach(dev => {
                if (activeTab.toLowerCase() === "all" ? true : dev.mainCategory.toLowerCase() === activeTab.toLowerCase()) specializationSet.push(...dev.specialization)
            });
            dispatch(SERVICE_Filter_Options([...new Set(specializationSet)]));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allDevelopers, priceFilter, servicesFilter, ratingFilter, availableToWorkFilter, proTallentFilter, activeTab])
    React.useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 100);
    }, [])

    return (
        <>
            <Banner dark={(settings?.darkTheme)} />
            <Filters dark={(settings?.darkTheme)} view={listView} setView={setListView} />
            <UserList
                view={listView ? "List" : "Grid"}
                allDevelopersList={data}
                loading={loading}
                dark={(settings?.darkTheme)}
            />
        </>
    );
};

export default Index;
