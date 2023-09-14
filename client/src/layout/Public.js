/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';

const Public = ({ children }) => {
    const matches = useMediaQuery('(max-width:768px)');
    const { settings, currentUser } = useSelector((store) => store.mainReducer);
    const [dark, setDark] = React.useState(false);
    useEffect(() => {
        if ('darkTheme' in settings && currentUser) setDark(settings.darkTheme);
        else setDark(false);
    }, [settings, currentUser]);

    return (
        <>
            <div className={dark ? 'home-container dark-bg' : 'home-container'}>
                <Header dark={dark} />
                {children}
                <Outlet />
            </div>
            {matches && <Footer dark={dark} />}
        </>
    );
};

export default Public;
