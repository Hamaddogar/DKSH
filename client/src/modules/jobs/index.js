import { useState } from 'react';
import Banner from './ui/banner';
import Filters from './ui/filters';
import { useSelector } from 'react-redux';
import JobContainer from './containers/JobContainer';

const index = () => {
    const [listView, setListView] = useState(false);
    const { settings } = useSelector((store) => store.mainReducer);

    return (
        <div>
            <Banner filterFor="job" dark={settings?.darkTheme} />

            <Filters
                dark={settings?.darkTheme}
                filterFor="job"
                view={listView}
                setView={setListView}
                title="Jobs"
                hideGridView={true}
            />

            <JobContainer listView={listView} />
        </div>
    );
};

export default index;
