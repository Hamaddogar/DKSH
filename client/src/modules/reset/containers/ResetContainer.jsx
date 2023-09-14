import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RESET_TOKEN } from '../../../RTK/Reducers/Reducers';

const ResetContainer = () => {
    const { token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            dispatch(RESET_TOKEN(token));
            navigate('/');
        }
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <></>
    );
};

export default ResetContainer;
