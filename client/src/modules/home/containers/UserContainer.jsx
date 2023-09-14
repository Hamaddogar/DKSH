import { useState, useEffect } from 'react';
import UserList from '../ui/user-list';
import { useDispatch, useSelector } from 'react-redux';
import { commentCount, ratingCount } from '../../../utils/HELPER';
import { SERVICE_Filter_Options } from '../../../RTK/Reducers/Reducers';

const UserContainer = ({ listView }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState([null]);
    const {
        settings,
        allDevelopers,
        loading,
        priceFilter,
        servicesFilter,
        ratingFilter,
        availableToWorkFilter,
        proTallentFilter,
        activeTab,
    } = useSelector((store) => store.mainReducer);

    useEffect(() => {
        if (allDevelopers?.length > 0) {
            const filterdData = allDevelopers.filter(
                (dev) =>
                    dev.availableToWork === availableToWorkFilter &&
                    dev.proTallent === proTallentFilter
            );
            const finalFilterdData = filterdData.filter(
                (dev) =>
                    dev.hourlyRate >= priceFilter[0] &&
                    dev.hourlyRate <= priceFilter[1] &&
                    (typeof ratingFilter === 'number'
                        ? ratingCount(dev?.comments, commentCount(dev?.comments)) >=
                          Number(ratingFilter)
                        : ratingCount(dev?.comments, commentCount(dev?.comments)) >= 5) &&
                    dev.specialization.filter((item) =>
                        item
                            .toLowerCase()
                            .includes(servicesFilter === 'All' ? '' : servicesFilter.toLowerCase())
                    )?.length > 0 &&
                    (activeTab.toLowerCase() === 'all'
                        ? true
                        : dev.mainCategory.toLowerCase() === activeTab.toLowerCase())
            );
            setData(finalFilterdData);
            const specializationSet = [];
            allDevelopers.forEach((dev) => {
                if (
                    activeTab.toLowerCase() === 'all'
                        ? true
                        : dev.mainCategory.toLowerCase() === activeTab.toLowerCase()
                )
                    specializationSet.push(...dev.specialization);
            });
            dispatch(SERVICE_Filter_Options([...new Set(specializationSet)]));
        }
    }, [
        allDevelopers,
        priceFilter,
        servicesFilter,
        ratingFilter,
        availableToWorkFilter,
        proTallentFilter,
        activeTab,
    ]);
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, []);

    return (
        <UserList
            view={listView ? 'List' : 'Grid'}
            allDevelopersList={data}
            loading={loading}
            dark={settings?.darkTheme}
        />
    );
};

export default UserContainer;
