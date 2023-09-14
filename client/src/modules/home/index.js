import { useState } from 'react';
import './index.css';
import Banner from './ui/banner';
import Filters from './ui/filters';
import { useSelector } from 'react-redux';
import UserContainer from './containers/UserContainer';

const index = () => {
    const [listView, setListView] = useState(false);
    const { settings } = useSelector((store) => store.mainReducer);

    return (
        <div>
            <Banner dark={settings?.darkTheme} />
            <Filters dark={settings?.darkTheme} view={listView} setView={setListView} />
            <UserContainer listView={listView} />
        </div>
    );
};

export default index;
