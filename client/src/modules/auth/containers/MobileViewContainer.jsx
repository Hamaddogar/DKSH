import React, { useEffect, useRef, useState } from 'react';
import MobileView from '../ui/mobile-view/Index';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import { useForm } from 'react-hook-form';
import { LOGIN_BOX_HANDLE, LOGIN_WITH_GOOGLE_APPLE } from '../../../RTK/Reducers/Reducers';
import { LoginFun, SignUpFun, forgotFun } from '../../../RTK/Reducers/thunk';
import { getCountryData } from '../../../utils/HELPER';
import firebase from '../firebase';

const MobileViewContainer = () => {
    const dispatch = useDispatch();

    const {
        signUpUser,
        openLoginBoxDesk,
        loadingV2,
        currentUser,
        loginError,
        signUpError,
        resetSuccess,
        forgotSuccess,
        resetError,
        forgotError,
        resetToken,
    } = useSelector((store) => store.mainReducer);
    const [information, setinformation] = useState({ step: 'init', as_a: 'none' });
    const [showPassword, setShowPassword] = useState(false);
    const matches = useMediaQuery('(min-width:768px)');
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue: setValueRHF,
    } = useForm();
    const [history, setHistory] = useState([]);
    const [activeStep, setActiveStep] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        if (history[history.length - 1] !== activeStep) setHistory((pv) => [...pv, activeStep]);
    }, [activeStep]);

    useEffect(() => {
        if (openLoginBoxDesk && openLoginBoxDesk === 'login') setActiveStep('login');
        else if (openLoginBoxDesk && openLoginBoxDesk === 'banner') setActiveStep('banner');
        else if (openLoginBoxDesk && openLoginBoxDesk === 'reset') setActiveStep('reset');
        else if (openLoginBoxDesk && openLoginBoxDesk === 'signup' && information?.step === 'init')
            setActiveStep('signup-init');
        else if (
            openLoginBoxDesk &&
            openLoginBoxDesk === 'signup' &&
            information?.step === 'details'
        )
            setActiveStep('signup-details');
        // else if (resetToken) setActiveStep('reset')
    }, [openLoginBoxDesk, information?.step, resetToken]);

    const informationSaver = (key, value, nextStep, nextStepTo) => (e) =>
        nextStep && nextStepTo
            ? setinformation((pv) => ({ ...pv, [key]: value, [nextStep]: nextStepTo }))
            : setinformation((pv) => ({ ...pv, [key]: value }));
    const shifter = (mvt) => (e) => dispatch(LOGIN_BOX_HANDLE(mvt));
    const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);
    const handleBack = () => {
        if (history.length > 1) {
            history.pop();
            const previousStep = history[history.length - 1];
            switch (previousStep) {
                case 'login':
                    dispatch(LOGIN_BOX_HANDLE('login'));
                    break;

                case 'banner':
                    dispatch(LOGIN_BOX_HANDLE('banner'));
                    break;

                case 'reset':
                    dispatch(LOGIN_BOX_HANDLE('reset'));
                    break;

                case 'signup-init':
                    setinformation((pv) => ({ ...pv, step: 'init' }));
                    dispatch(LOGIN_BOX_HANDLE('signup'));
                    break;

                case 'signup-details':
                    setinformation((pv) => ({ ...pv, step: 'details' }));
                    dispatch(LOGIN_BOX_HANDLE('signup'));
                    break;

                default:
                    // Handle default case here
                    break;
            }
        } else {
            handleClose();
        }
    };

    const handleClose = () => {
        dispatch(LOGIN_BOX_HANDLE(false));
        setinformation({ step: 'init', as_a: 'none' });
        setShowPassword(false);
        setHistory([]);
        setActiveStep('');
    };
    // handle Submits Functions

    const handleLogin = (data) => {
        dispatch(
            LoginFun({
                email: data.email,
                password: data.password,
            })
        );
    };

    const handleSignUp = (data) => {
        dispatch(
            SignUpFun({
                firstName: data.firstName,
                role: information.as_a,
                lastName: data.lastName,
                contactNo: data.contactNo,
                country: data.country,
                email: data.email,
                password: data.password,
            })
        );
    };

    const handleForgotReset = (data) => {
        dispatch(
            forgotFun({
                email: data.email,
            })
        );
    };

    // login
    const handleLoginGoogleApple = async (loginWith) => {
        if (loginWith === 'google') {
            const provider = new firebase.auth.GoogleAuthProvider();
            const res = await firebase.auth().signInWithPopup(provider);
            if (res.user) {
                const { user } = res;
                const nameParts = user.displayName.split(' ');
                const firstName = nameParts[0];
                const lastName = nameParts.slice(1).join(' ');
                dispatch(
                    LOGIN_WITH_GOOGLE_APPLE({
                        _id: user.uid,
                        firstName: firstName,
                        role: information.as_a,
                        lastName: lastName,
                        contactNo: 'null',
                        country: 'null',
                        loginID: user.email,
                        fullName: user.displayName,
                        avatar: user.photoURL,
                        local: false,
                    })
                );
            }
        }
    };

    const handleAutocompleteChange = (event, newValue) => setValue(newValue);
    // Mobile View
    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (openLoginBoxDesk && !matches) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
        // eslint-disable-next-line
    }, [openLoginBoxDesk]);

    useEffect(() => {
        if (!value) {
            (async () => {
                const res = await getCountryData();
                if (res?.success) {
                    setValue(res?.countryName);
                    setValueRHF('country', res?.countryName);
                }
            })();
        }
    }, []);

    const handleLoginReset = () => dispatch(LOGIN_BOX_HANDLE('reset'));

    const handleOpenList = (control) => (event) => setOpen(control);

    const handleNextAction = (nextAction) => (event) => dispatch(LOGIN_BOX_HANDLE(nextAction));

    return (
        <MobileView
            informationSaver={informationSaver}
            shifter={shifter}
            handleTogglePasswordVisibility={handleTogglePasswordVisibility}
            handleBack={handleBack}
            handleClose={handleClose}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            handleOpenList={handleOpenList}
            handleLoginReset={handleLoginReset}
            handleNextAction={handleNextAction}
            handleForgotReset={handleForgotReset}
            handleAutocompleteChange={handleAutocompleteChange}
            handleLoginGoogleApple={handleLoginGoogleApple}
            activeStep={activeStep}
            signUpUser={signUpUser}
            openLoginBoxDesk={openLoginBoxDesk}
            loadingV2={loadingV2}
            currentUser={currentUser}
            loginError={loginError}
            signUpError={signUpError}
            resetSuccess={resetSuccess}
            forgotSuccess={forgotSuccess}
            resetError={resetError}
            forgotError={forgotError}
            resetToken={resetToken}
            showPassword={showPassword}
            information={information}
            open={open}
            value={value}
            descriptionElementRef={descriptionElementRef}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
        />
    );
};

export default MobileViewContainer;
