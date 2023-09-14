import './index.css';
import DesktopViewContainer from './containers/DesktopViewContainer';
import { useMediaQuery } from '@mui/material';
import MobileViewContainer from './containers/MobileViewContainer';

const index = () => {
    const matches = useMediaQuery('(min-width:768px)');
    return <div>{matches ? <DesktopViewContainer /> : <MobileViewContainer />}</div>;
};

export default index;
