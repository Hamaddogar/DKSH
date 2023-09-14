import UserNetwork from './ui/user-network';
import { useSelector } from 'react-redux';
import NetWorkDetailsContainer from './containers/NetWorkDetailsContainer';

const index = () => {
    const { selectedProfile, settings } = useSelector((store) => store.mainReducer);

    return (
        <div>
            <UserNetwork user={selectedProfile} dark={settings?.darkTheme} />
            <NetWorkDetailsContainer />
        </div>
    );
};

export default index;
