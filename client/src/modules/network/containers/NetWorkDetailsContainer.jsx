import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NetWorkDetails from '../ui/network-details';
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const navigate = useNavigate();
    const { selectedProfile, settings } = useSelector((store) => store.mainReducer);

    useEffect(() => {
        if (selectedProfile === null) {
            navigate('/');
        }
    }, []);

    return <NetWorkDetails settings={settings} selectedProfile={selectedProfile} />;
};

export default Index;
