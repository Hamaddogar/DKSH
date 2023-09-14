import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SERVICE_Filter_Options_JOB } from '../../../RTK/Reducers/Reducers';
import { Alert, Grid, Skeleton, Stack } from '@mui/material';
import Job from '../ui/job';

const JobContainer = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([null]);
    const {
        settings,
        allJobs,
        loading,
        priceFilterJOB,
        servicesFilterJOB,
        ratingFilterJOB,
        activeTabJOB,
    } = useSelector((store) => store.mainReducer);
    useEffect(() => {
        if (allJobs?.length > 0) {
            const finalFilterdData = allJobs.filter(
                (dev) =>
                    dev.hourlyRate >= priceFilterJOB[0] &&
                    dev.hourlyRate <= priceFilterJOB[1] &&
                    (typeof ratingFilterJOB === 'number'
                        ? dev.rating >= Number(ratingFilterJOB)
                        : dev.rating >= 5) &&
                    dev.skills.filter((item) =>
                        item
                            .toLowerCase()
                            .includes(
                                servicesFilterJOB === 'All' ? '' : servicesFilterJOB.toLowerCase()
                            )
                    )?.length > 0 &&
                    (activeTabJOB.toLowerCase() === 'all'
                        ? true
                        : dev.mainCategory.toLowerCase() === activeTabJOB.toLowerCase())
            );
            setData(finalFilterdData);
            const specializationSet = [];
            allJobs.forEach((dev) => {
                if (
                    activeTabJOB.toLowerCase() === 'all'
                        ? true
                        : dev.mainCategory.toLowerCase() === activeTabJOB.toLowerCase()
                )
                    specializationSet.push(...dev.skills);
            });
            dispatch(SERVICE_Filter_Options_JOB([...new Set(specializationSet)]));
        }
    }, [allJobs, priceFilterJOB, servicesFilterJOB, ratingFilterJOB, activeTabJOB]);
    useEffect(() => {
        // eslint-disable-next-line no-undef
        setTimeout(() => {
            // eslint-disable-next-line no-undef
            window.scrollTo(0, 0);
        }, 100);
    }, []);

    const LoadSkelton = useCallback(() => {
        return (
            <Stack spacing={1}>
                <Skeleton
                    sx={{ bgcolor: settings?.darkTheme ? 'grey.900' : 'none', fontSize: '1rem' }}
                    variant="text"
                />
                <Skeleton
                    sx={{ bgcolor: settings?.darkTheme ? 'grey.900' : 'none' }}
                    variant="circular"
                    width={40}
                    height={40}
                />
                <Skeleton
                    sx={{ bgcolor: settings?.darkTheme ? 'grey.900' : 'none' }}
                    variant="rectangular"
                    height={60}
                />
                <Skeleton
                    sx={{ bgcolor: settings?.darkTheme ? 'grey.900' : 'none' }}
                    variant="rounded"
                    height={60}
                />
            </Stack>
        );
    }, [settings?.darkTheme]);

    const mapJobs = useCallback(
        (user, index) => (
            <Grid item key={index} xs="12" sm="12" md="12" lg="12">
                {LoadSkelton()}
            </Grid>
        ),
        [LoadSkelton]
    );

    const mapJobCards = useCallback(
        (job, index) => (
            <Grid item key={job.index} xs="12">
                <Job job={job} index={index} dark={settings?.darkTheme} />
            </Grid>
        ),
        [settings?.darkTheme]
    );

    return (
        <>
            {(loading || data?.[0] === null) && ['', '', '', '', '', '', ''].map(mapJobs)}
            {!loading && data?.[0] !== null && data?.length === 0 && (
                <Grid item xs="12">
                    <Alert severity="error">No Profile Found</Alert>
                </Grid>
            )}
            {!loading && data?.[0] !== null && data?.map(mapJobCards)}
        </>
    );
};

export default JobContainer;
