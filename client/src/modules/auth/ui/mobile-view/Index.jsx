/* eslint-disable no-useless-escape */
import {
    Alert,
    Autocomplete,
    Box,
    Button,
    Checkbox,
    CircularProgress,
    Dialog,
    DialogContent,
    FormControlLabel,
    Grid,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import FormSam from '../FormSam';
import { ArrowBack, Close } from '@mui/icons-material';
import Images from '../../../../assets/images';
import { ErrorText, dummyLink, dummyLink2 } from '../Helpers';
import { countryList } from '../../../../utils/HELPER';
import React from 'react';

const { logoWhite, frame, google, apple, hirer, provider, arrowright, msgBGM, hiddenPassword } =
    Images;

const Index = ({
    informationSaver,
    shifter,
    handleTogglePasswordVisibility,
    handleBack,
    handleClose,
    handleLogin,
    handleSignUp,
    handleOpenList,
    handleLoginReset,
    handleNextAction,
    handleForgotReset,
    handleAutocompleteChange,
    handleLoginGoogleApple,

    activeStep,
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

    showPassword,
    information,
    open,
    value,
    descriptionElementRef,

    register,
    handleSubmit,
    errors,
}) => {
    return (
        <div>
            <Dialog
                fullWidth={!loadingV2}
                fullScreen={!loadingV2}
                maxWidth={'md'}
                open={Boolean(openLoginBoxDesk)}
                onClose={handleClose}
                scroll={'body'}
                sx={
                    loadingV2
                        ? { '& .MuiPaper-root': { borderRadius: '30px' } }
                        : {
                              '& .MuiPaper-root': {
                                  borderRadius: '0px',
                                  maxHeight: 'calc(100% - 85px)',
                                  backgroundColor: activeStep === 'banner' ? '#8077F6' : '#FFFFFF',
                              },
                              '& .MuiDialog-container:after': {
                                  verticalAlign: 'top',
                              },
                          }
                }
            >
                <Box ref={descriptionElementRef} tabIndex={-1}>
                    <Close
                        sx={{ position: 'absolute', top: 30, right: 20, color: '#F2F3F3' }}
                        onClick={handleClose}
                    />
                    {activeStep !== 'banner' && !loadingV2 && (
                        <Box
                            sx={{
                                backgroundColor: '#8077F6',
                                textAlign: 'center',
                                py: 3.3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomRightRadius: '20px',
                                borderBottomLeftRadius: '20px',
                            }}
                        >
                            <ArrowBack
                                sx={{ position: 'absolute', left: 5, color: '#F2F3F3' }}
                                onClick={handleBack}
                            />
                            <Box component="img" src={logoWhite} alt="logo" width="100px" />
                        </Box>
                    )}
                    {!loadingV2 && (
                        <Grid container alignItems="flex-top" justifyContent="space-between">
                            <Grid item xs={12} sx={{}}>
                                <Box>
                                    <DialogContent>
                                        {activeStep === 'login' && (
                                            <>
                                                <Typography
                                                    sx={{
                                                        mt: '20px',
                                                        fontSize: '20px',
                                                        fontWeight: 600,
                                                        maxWidth: '190px',
                                                    }}
                                                >
                                                    Login
                                                </Typography>
                                                {loginError && (
                                                    <Alert
                                                        sx={{
                                                            mt: '20px',
                                                            '& .MuiPaper-root': {
                                                                borderRadius: '10px',
                                                            },
                                                        }}
                                                        severity="error"
                                                    >
                                                        {loginError}!
                                                    </Alert>
                                                )}
                                                <Box
                                                    component="form"
                                                    id="loginForm"
                                                    onSubmit={handleSubmit(handleLogin)}
                                                    noValidate
                                                    sx={{ mt: 1 }}
                                                >
                                                    <TextField
                                                        sx={{
                                                            mt: '20px',
                                                            '& fieldset': {
                                                                background:
                                                                    'rgb(135, 143, 154,.08)',
                                                                borderRadius: '12px',
                                                                borderColor: '#EDF0F3',
                                                                minHeight: '44px',
                                                            },
                                                            '& label': {
                                                                fontSize: '15px',
                                                                top: '2px',
                                                            },
                                                            '& input': {
                                                                borderRadius: '12px !important',
                                                                color: '#878F9A !important',
                                                                padding: '11px 14px',
                                                            },
                                                        }}
                                                        margin="normal"
                                                        fullWidth
                                                        id="email"
                                                        label="Email Address"
                                                        name="email"
                                                        size="small"
                                                        {...register('email', {
                                                            required: true,
                                                            pattern:
                                                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                        })}
                                                        error={errors.email}
                                                    />
                                                    {errors.email && (
                                                        <>
                                                            {errors.email.type === 'pattern'
                                                                ? ErrorText(
                                                                      'Enter a valid pattern!'
                                                                  )
                                                                : ErrorText('Field is Required!')}
                                                        </>
                                                    )}
                                                    <TextField
                                                        sx={{
                                                            mt: '20px',
                                                            '& fieldset': {
                                                                background:
                                                                    'rgb(135, 143, 154,.08)',
                                                                borderRadius: '12px',
                                                                borderColor: '#EDF0F3',
                                                                minHeight: '44px',
                                                            },
                                                            '& label': {
                                                                fontSize: '15px',
                                                                top: '2px',
                                                            },
                                                            '& input': {
                                                                borderRadius: '12px !important',
                                                                color: '#878F9A !important',
                                                                padding: '11px 14px',
                                                            },
                                                        }}
                                                        margin="normal"
                                                        fullWidth
                                                        name="password"
                                                        label="Password"
                                                        type={showPassword ? 'text' : 'password'}
                                                        id="password"
                                                        size="small"
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <Box
                                                                        component="img"
                                                                        sx={{
                                                                            width: '24px',
                                                                            cursor: 'pointer',
                                                                        }}
                                                                        src={hiddenPassword}
                                                                        alt="icon"
                                                                        onClick={
                                                                            handleTogglePasswordVisibility
                                                                        }
                                                                    />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                        {...register('password', {
                                                            required: true,
                                                            minLength: 6,
                                                        })}
                                                        error={errors.password}
                                                    />
                                                    {errors.password && (
                                                        <>
                                                            {errors.password.type === 'minLength'
                                                                ? ErrorText(
                                                                      'Minimum Length 3 characters!'
                                                                  )
                                                                : ErrorText('Field is Required!')}
                                                        </>
                                                    )}
                                                    <FormControlLabel
                                                        mt={'24px'}
                                                        control={
                                                            <Checkbox
                                                                {...register('KeepMe')}
                                                                disableRipple
                                                                color="primary"
                                                            />
                                                        }
                                                        label="Keep me logged in"
                                                        fontSize="14px"
                                                        sx={{
                                                            '& .MuiFormControlLabel-label': {
                                                                fontSize: '12px',
                                                                lineHeight: '20px',
                                                                color: '#5D6974 !important',
                                                            },
                                                        }}
                                                    />
                                                    <Box mt="42px">
                                                        <Button
                                                            type="submit"
                                                            size="smal"
                                                            variant="contained"
                                                            sx={{
                                                                textTransform: 'capitalize',
                                                                borderRadius: '12px',
                                                                backgroundColor: '#8077F6',
                                                                fontSize: '11px',
                                                                padding: '9px 26px',
                                                            }}
                                                            disableElevation
                                                        >
                                                            Login
                                                        </Button>
                                                    </Box>

                                                    <Stack
                                                        mt="42px"
                                                        direction="row"
                                                        alignItems="center"
                                                        spacing={2.3}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                fontSize: '12px',
                                                                color: '#5D6974',
                                                            }}
                                                        >
                                                            Or login with
                                                        </Typography>
                                                        <Button
                                                            onClick={() =>
                                                                handleLoginGoogleApple('google')
                                                            }
                                                            size="smal"
                                                            variant="outlined"
                                                            sx={{
                                                                textTransform: 'capitalize',
                                                                borderRadius: '8px',
                                                                border: '1px solid #768193',
                                                                padding: '10px',
                                                                minWidth: '0px',
                                                            }}
                                                        >
                                                            <Box
                                                                component="img"
                                                                src={google}
                                                                alt={google}
                                                                sx={{ width: '19px' }}
                                                            />
                                                        </Button>
                                                        <Button
                                                            onClick={() =>
                                                                handleLoginGoogleApple('apple')
                                                            }
                                                            size="smal"
                                                            variant="outlined"
                                                            sx={{
                                                                textTransform: 'capitalize',
                                                                borderRadius: '8px',
                                                                border: '1px solid #768193',
                                                                padding: '10px',
                                                                minWidth: '0px',
                                                            }}
                                                        >
                                                            <Box
                                                                component="img"
                                                                src={apple}
                                                                alt={apple}
                                                                sx={{ width: '19px' }}
                                                            />
                                                        </Button>
                                                    </Stack>
                                                    <Grid
                                                        container
                                                        mt={'40px'}
                                                        spacing={2}
                                                        sx={{
                                                            fontSize: '12px',
                                                            color: '#5D6974',
                                                        }}
                                                    >
                                                        <Grid item xs={12}>
                                                            <span
                                                                style={dummyLink}
                                                                onClick={handleLoginReset}
                                                            >
                                                                Forgot password?
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            {"Don't have an account?"}
                                                            <span
                                                                onClick={shifter('signup')}
                                                                style={dummyLink}
                                                            >
                                                                {' Sign Up'}
                                                            </span>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </>
                                        )}
                                        {activeStep === 'reset' && (
                                            <>
                                                <Typography
                                                    sx={{
                                                        fontSize: '20px',
                                                        fontWeight: 600,
                                                        maxWidth: '190px',
                                                    }}
                                                >
                                                    Reset Password
                                                </Typography>
                                                {(forgotError || resetError) && (
                                                    <Alert
                                                        sx={{
                                                            mt: '20px',
                                                            '& .MuiPaper-root': {
                                                                borderRadius: '10px',
                                                            },
                                                        }}
                                                        severity="error"
                                                    >
                                                        {forgotError || resetError}!
                                                    </Alert>
                                                )}
                                                {(forgotSuccess || resetSuccess) && (
                                                    <Alert
                                                        sx={{
                                                            mt: '20px',
                                                            '& .MuiPaper-root': {
                                                                borderRadius: '10px',
                                                            },
                                                        }}
                                                        severity="success"
                                                    >
                                                        {forgotSuccess || resetSuccess}!
                                                    </Alert>
                                                )}
                                                {!resetToken && (
                                                    <Box
                                                        component="form"
                                                        id="forgotrestForm"
                                                        noValidate
                                                        onSubmit={handleSubmit(handleForgotReset)}
                                                        sx={{ mt: 1 }}
                                                    >
                                                        <TextField
                                                            sx={{
                                                                mt: '20px',
                                                                '& fieldset': {
                                                                    background:
                                                                        'rgb(135, 143, 154,.08)',
                                                                    borderRadius: '12px',
                                                                    borderColor: '#EDF0F3',
                                                                    minHeight: '44px',
                                                                },
                                                                '& label': {
                                                                    fontSize: '15px',
                                                                    top: '2px',
                                                                },
                                                                '& input': {
                                                                    borderRadius: '12px !important',
                                                                    color: '#878F9A !important',
                                                                    padding: '11px 14px',
                                                                },
                                                            }}
                                                            margin="normal"
                                                            fullWidth
                                                            id="email"
                                                            label="Email Address"
                                                            name="email"
                                                            size="small"
                                                            {...register('email', {
                                                                required: true,
                                                                pattern:
                                                                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                            })}
                                                            error={errors.email}
                                                        />
                                                        {errors.email && (
                                                            <>
                                                                {errors.email.type === 'pattern'
                                                                    ? ErrorText(
                                                                          'Enter a valid pattern!'
                                                                      )
                                                                    : ErrorText(
                                                                          'Field is Required!'
                                                                      )}
                                                            </>
                                                        )}
                                                        <Box mt="50px">
                                                            <Button
                                                                disabled={resetSuccess}
                                                                mt={'42px'}
                                                                type="submit"
                                                                size="smal"
                                                                variant="contained"
                                                                sx={{
                                                                    textTransform: 'capitalize',
                                                                    borderRadius: '12px',
                                                                    backgroundColor: '#8077F6',
                                                                    fontSize: '11px',
                                                                    padding: '9px 26px',
                                                                }}
                                                                disableElevation
                                                            >
                                                                Request Reset
                                                            </Button>
                                                        </Box>
                                                        <Box mt="50px">
                                                            <Box
                                                                sx={{
                                                                    fontSize: '12px',
                                                                    color: '#5D6974',
                                                                }}
                                                            >
                                                                Already have an Account?
                                                                <span
                                                                    onClick={shifter('login')}
                                                                    style={dummyLink}
                                                                >
                                                                    {' Login'}
                                                                </span>
                                                            </Box>
                                                            <Box
                                                                mt={2}
                                                                sx={{
                                                                    fontSize: '12px',
                                                                    color: '#5D6974',
                                                                }}
                                                            >
                                                                {"Don't have an account?"}
                                                                <span
                                                                    onClick={shifter('signup')}
                                                                    style={dummyLink}
                                                                >
                                                                    {' Sign Up'}
                                                                </span>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                )}
                                                {resetToken && <FormSam />}
                                            </>
                                        )}
                                        {activeStep === 'signup-init' && (
                                            <>
                                                <Typography
                                                    mt="20px"
                                                    sx={{ fontSize: '17px', fontWeight: 600 }}
                                                >
                                                    Sign up as a client or service provider.
                                                </Typography>
                                                <Box>
                                                    <Stack
                                                        mt={'30px'}
                                                        p={1}
                                                        direction="row"
                                                        alignItems="center"
                                                        justifyContent={'space-between'}
                                                        border={
                                                            information.as_a === 'client'
                                                                ? '1px solid #8077F6'
                                                                : '1px solid #EDF0F3'
                                                        }
                                                        borderRadius={'14px'}
                                                        sx={{ background: '#FBFBFC' }}
                                                        onClick={informationSaver(
                                                            'as_a',
                                                            'client',
                                                            'step',
                                                            'details'
                                                        )}
                                                    >
                                                        <Stack direction="row" alignItems="center">
                                                            <Box
                                                                component="img"
                                                                src={hirer}
                                                                alt="toHire"
                                                            />
                                                            <Typography fontSize="13px">
                                                                I’m a client, hiring for a project
                                                            </Typography>
                                                        </Stack>
                                                        <Box
                                                            component="img"
                                                            src={arrowright}
                                                            alt="toHire"
                                                        />
                                                    </Stack>

                                                    <Stack
                                                        mt={'30px'}
                                                        p={1}
                                                        direction="row"
                                                        alignItems="center"
                                                        justifyContent={'space-between'}
                                                        border={
                                                            information.as_a === 'freelancer'
                                                                ? '1px solid #8077F6'
                                                                : '1px solid #EDF0F3'
                                                        }
                                                        borderRadius={'14px'}
                                                        sx={{ background: '#FBFBFC' }}
                                                        onClick={informationSaver(
                                                            'as_a',
                                                            'freelancer',
                                                            'step',
                                                            'details'
                                                        )}
                                                    >
                                                        <Stack direction="row" alignItems="center">
                                                            <Box
                                                                component="img"
                                                                src={provider}
                                                                alt="freelancer"
                                                            />
                                                            <Typography fontSize="13px">
                                                                I’m a service provider, looking for
                                                                work
                                                            </Typography>
                                                        </Stack>
                                                        <Box
                                                            component="img"
                                                            src={arrowright}
                                                            alt="toHire"
                                                        />
                                                    </Stack>
                                                </Box>
                                                <Grid
                                                    container
                                                    mt={4}
                                                    spacing={1.5}
                                                    sx={{ fontSize: '13px', color: '#717C86' }}
                                                >
                                                    <Grid item xs={12}>
                                                        Already have an account?
                                                        <span
                                                            onClick={shifter('login')}
                                                            style={dummyLink}
                                                        >
                                                            {' Login'}
                                                        </span>
                                                    </Grid>
                                                </Grid>
                                            </>
                                        )}
                                        {activeStep === 'signup-details' && (
                                            <>
                                                <Typography
                                                    sx={{ fontSize: '20px', fontWeight: 600 }}
                                                >
                                                    {information?.as_a === 'client'
                                                        ? ' Sign up to hire talent.'
                                                        : 'Sign up to find work'}
                                                </Typography>
                                                {signUpError && (
                                                    <Alert
                                                        sx={{
                                                            mt: '20px',
                                                            '& .MuiPaper-root': {
                                                                borderRadius: '10px',
                                                            },
                                                        }}
                                                        severity="error"
                                                    >
                                                        {signUpError}!
                                                    </Alert>
                                                )}
                                                <Box
                                                    mt="35px"
                                                    component="form"
                                                    id="signUpForm"
                                                    noValidate
                                                    onSubmit={handleSubmit(handleSignUp)}
                                                    sx={{ mt: 3 }}
                                                >
                                                    <Grid container columnSpacing={2}>
                                                        <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                sx={{
                                                                    mt: '20px',
                                                                    '& fieldset': {
                                                                        background:
                                                                            'rgb(135, 143, 154,.08)',
                                                                        borderRadius: '12px',
                                                                        borderColor: '#EDF0F3',
                                                                        minHeight: '44px',
                                                                    },
                                                                    '& label': {
                                                                        fontSize: '15px',
                                                                        top: '2px',
                                                                    },
                                                                    '& input': {
                                                                        borderRadius:
                                                                            '12px !important',
                                                                        color: '#878F9A !important',
                                                                        padding: '11px 14px',
                                                                    },
                                                                }}
                                                                size="small"
                                                                name="firstName"
                                                                fullWidth
                                                                id="firstName"
                                                                label="First Name"
                                                                {...register('firstName', {
                                                                    required: true,
                                                                    minLength: 3,
                                                                })}
                                                                error={errors.firstName}
                                                            />
                                                            {errors.firstName && (
                                                                <>
                                                                    {errors.firstName.type ===
                                                                    'minLength'
                                                                        ? ErrorText(
                                                                              'Minimum Length 3 characters!'
                                                                          )
                                                                        : ErrorText(
                                                                              'Field is Required!'
                                                                          )}
                                                                </>
                                                            )}
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                sx={{
                                                                    mt: '20px',
                                                                    '& fieldset': {
                                                                        background:
                                                                            'rgb(135, 143, 154,.08)',
                                                                        borderRadius: '12px',
                                                                        borderColor: '#EDF0F3',
                                                                        minHeight: '44px',
                                                                    },
                                                                    '& label': {
                                                                        fontSize: '15px',
                                                                        top: '2px',
                                                                    },
                                                                    '& input': {
                                                                        borderRadius:
                                                                            '12px !important',
                                                                        color: '#878F9A !important',
                                                                        padding: '11px 14px',
                                                                    },
                                                                }}
                                                                size="small"
                                                                fullWidth
                                                                id="lastName"
                                                                label="Last Name"
                                                                name="lastName"
                                                                {...register('lastName', {
                                                                    required: true,
                                                                    minLength: 3,
                                                                })}
                                                                error={errors.lastName}
                                                            />
                                                            {errors.lastName && (
                                                                <>
                                                                    {errors.lastName.type ===
                                                                    'minLength'
                                                                        ? ErrorText(
                                                                              'Minimum Length 3 characters!'
                                                                          )
                                                                        : ErrorText(
                                                                              'Field is Required!'
                                                                          )}
                                                                </>
                                                            )}
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                sx={{
                                                                    mt: '20px',
                                                                    '& fieldset': {
                                                                        background:
                                                                            'rgb(135, 143, 154,.08)',
                                                                        borderRadius: '12px',
                                                                        borderColor: '#EDF0F3',
                                                                        minHeight: '44px',
                                                                    },
                                                                    '& label': {
                                                                        fontSize: '15px',
                                                                        top: '2px',
                                                                    },
                                                                    '& input': {
                                                                        borderRadius:
                                                                            '12px !important',
                                                                        color: '#878F9A !important',
                                                                        padding: '11px 14px',
                                                                    },
                                                                }}
                                                                size="small"
                                                                fullWidth
                                                                id="email"
                                                                label="Email Address"
                                                                name="email"
                                                                {...register('email', {
                                                                    required: true,
                                                                    pattern:
                                                                        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                                })}
                                                                error={errors.email}
                                                            />
                                                            {errors.email && (
                                                                <>
                                                                    {errors.email.type === 'pattern'
                                                                        ? ErrorText(
                                                                              'Enter a valid pattern!'
                                                                          )
                                                                        : ErrorText(
                                                                              'Field is Required!'
                                                                          )}
                                                                </>
                                                            )}
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                sx={{
                                                                    mt: '20px',
                                                                    '& fieldset': {
                                                                        background:
                                                                            'rgb(135, 143, 154,.08)',
                                                                        borderRadius: '12px',
                                                                        borderColor: '#EDF0F3',
                                                                        minHeight: '44px',
                                                                    },
                                                                    '& label': {
                                                                        fontSize: '15px',
                                                                        top: '2px',
                                                                    },
                                                                    '& input': {
                                                                        borderRadius:
                                                                            '12px !important',
                                                                        color: '#878F9A !important',
                                                                        padding: '11px 14px',
                                                                    },
                                                                }}
                                                                size="small"
                                                                fullWidth
                                                                id="contact"
                                                                label="Contact Number"
                                                                name="contactNo"
                                                                {...register('contactNo', {
                                                                    required: true,
                                                                    minLength: 5,
                                                                })}
                                                                error={errors.contactNo}
                                                            />
                                                            {errors.contactNo && (
                                                                <>
                                                                    {errors.contactNo.type ===
                                                                    'minLength'
                                                                        ? ErrorText(
                                                                              'Minimum Length 5 Digits!'
                                                                          )
                                                                        : ErrorText(
                                                                              'Field is Required!'
                                                                          )}
                                                                </>
                                                            )}
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                sx={{
                                                                    mt: '20px',
                                                                    '& fieldset': {
                                                                        background:
                                                                            'rgb(135, 143, 154,.08)',
                                                                        borderRadius: '12px',
                                                                        borderColor: '#EDF0F3',
                                                                        minHeight: '44px',
                                                                    },
                                                                    '& label': {
                                                                        fontSize: '15px',
                                                                        top: '2px',
                                                                    },
                                                                    '& input': {
                                                                        borderRadius:
                                                                            '12px !important',
                                                                        color: '#878F9A !important',
                                                                        padding: '11px 14px',
                                                                    },
                                                                }}
                                                                size="small"
                                                                fullWidth
                                                                name="password"
                                                                label="Password"
                                                                type={
                                                                    showPassword
                                                                        ? 'text'
                                                                        : 'password'
                                                                }
                                                                id="password"
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <Box
                                                                                component="img"
                                                                                sx={{
                                                                                    width: '24px',
                                                                                    cursor: 'pointer',
                                                                                }}
                                                                                src={hiddenPassword}
                                                                                alt="icon"
                                                                                onClick={
                                                                                    handleTogglePasswordVisibility
                                                                                }
                                                                            />
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                                {...register('password', {
                                                                    required: true,
                                                                    minLength: 6,
                                                                })}
                                                                error={errors.password}
                                                            />
                                                            {errors.password && (
                                                                <>
                                                                    {errors.password.type ===
                                                                    'minLength'
                                                                        ? ErrorText(
                                                                              'Minimum Length 6 characters!'
                                                                          )
                                                                        : ErrorText(
                                                                              'Field is Required!'
                                                                          )}
                                                                </>
                                                            )}
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <Autocomplete
                                                                id="country-selector"
                                                                open={open}
                                                                sx={{
                                                                    mt: '20px',
                                                                    '& .MuiOutlinedInput-root': {
                                                                        minHeight: '45px',
                                                                    },
                                                                    '& fieldset': {
                                                                        background:
                                                                            'rgb(135, 143, 154,.08)',
                                                                        borderRadius: '12px',
                                                                        borderColor: '#EDF0F3',
                                                                        minHeight: '44px',
                                                                    },
                                                                    '& label': {
                                                                        fontSize: '15px',
                                                                        top: '2px',
                                                                    },
                                                                    '& input': {
                                                                        borderRadius:
                                                                            '12px !important',
                                                                        color: '#878F9A !important',
                                                                    },
                                                                }}
                                                                size="small"
                                                                onOpen={handleOpenList(true)}
                                                                onClose={handleOpenList(false)}
                                                                getOptionLabel={(option) => option}
                                                                options={countryList}
                                                                value={value}
                                                                loading={open}
                                                                onChange={handleAutocompleteChange}
                                                                renderInput={(params) => (
                                                                    <TextField
                                                                        {...params}
                                                                        label="Select a country"
                                                                        InputProps={{
                                                                            ...params.InputProps,
                                                                            // endAdornment: (
                                                                            //     <React.Fragment>
                                                                            //         {countryList?.length ? (
                                                                            //             <CircularProgress
                                                                            //                 color="inherit"
                                                                            //                 size={
                                                                            //                     20
                                                                            //                 }
                                                                            //             />
                                                                            //         ) : null}
                                                                            //         {
                                                                            //             params
                                                                            //                 .InputProps
                                                                            //                 .endAdornment
                                                                            //         }
                                                                            //     </React.Fragment>
                                                                            // ),
                                                                        }}
                                                                        {...register('country', {
                                                                            required: true,
                                                                        })}
                                                                        error={errors.country}
                                                                    />
                                                                )}
                                                            />
                                                            {errors.country && (
                                                                <>
                                                                    {ErrorText(
                                                                        'Please Select Country'
                                                                    )}
                                                                </>
                                                            )}
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Stack
                                                                mt="24px"
                                                                direction="row"
                                                                alignItems={'flex-start'}
                                                                justifyContent={'flex-start'}
                                                            >
                                                                <Checkbox
                                                                    error={errors.tcs}
                                                                    color="primary"
                                                                    {...register('tcs', {
                                                                        required: true,
                                                                    })}
                                                                />
                                                                <Typography
                                                                    mt={1}
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        cursor: 'pointer',
                                                                    }}
                                                                >
                                                                    Yes, I understand and agree to
                                                                    the{' '}
                                                                    <span
                                                                        onClick={shifter('login')}
                                                                        style={dummyLink2}
                                                                    >
                                                                        DKSH Terms of Service
                                                                    </span>
                                                                    , including the{' '}
                                                                    <span
                                                                        onClick={shifter('login')}
                                                                        style={dummyLink2}
                                                                    >
                                                                        User Agreement
                                                                    </span>{' '}
                                                                    and{' '}
                                                                    <span
                                                                        onClick={shifter('login')}
                                                                        style={dummyLink2}
                                                                    >
                                                                        Privacy Policy
                                                                    </span>
                                                                    .
                                                                </Typography>
                                                            </Stack>
                                                            {errors.tcs && (
                                                                <>{ErrorText('Please Check')}</>
                                                            )}
                                                        </Grid>
                                                    </Grid>
                                                    <Box mt="42px">
                                                        <Button
                                                            type="submit"
                                                            size="smal"
                                                            variant="contained"
                                                            sx={{
                                                                textTransform: 'capitalize',
                                                                borderRadius: '12px',
                                                                backgroundColor: '#8077F6',
                                                                fontSize: '11px',
                                                                padding: '9px 26px',
                                                            }}
                                                            disableElevation
                                                        >
                                                            Sign Up
                                                        </Button>
                                                    </Box>
                                                    <Stack
                                                        mt="42px"
                                                        direction="row"
                                                        alignItems="center"
                                                        spacing={2.3}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                fontSize: '12px',
                                                                color: '#5D6974',
                                                            }}
                                                        >
                                                            Or Sign Up with
                                                        </Typography>
                                                        <Button
                                                            onClick={() =>
                                                                handleLoginGoogleApple('google')
                                                            }
                                                            size="smal"
                                                            variant="outlined"
                                                            sx={{
                                                                textTransform: 'capitalize',
                                                                borderRadius: '8px',
                                                                border: '1px solid #768193',
                                                                padding: '10px',
                                                                minWidth: '0px',
                                                            }}
                                                        >
                                                            <Box
                                                                component="img"
                                                                src={google}
                                                                alt={google}
                                                                sx={{ width: '19px' }}
                                                            />
                                                        </Button>
                                                        <Button
                                                            onClick={() =>
                                                                handleLoginGoogleApple('apple')
                                                            }
                                                            size="smal"
                                                            variant="outlined"
                                                            sx={{
                                                                textTransform: 'capitalize',
                                                                borderRadius: '8px',
                                                                border: '1px solid #768193',
                                                                padding: '10px',
                                                                minWidth: '0px',
                                                            }}
                                                        >
                                                            <Box
                                                                component="img"
                                                                src={apple}
                                                                alt={apple}
                                                                sx={{ width: '19px' }}
                                                            />
                                                        </Button>
                                                    </Stack>
                                                </Box>
                                                <Box
                                                    mb={5}
                                                    mt={'40px'}
                                                    sx={{ fontSize: '12px', color: '#5D6974' }}
                                                >
                                                    Already have an account?
                                                    <span
                                                        onClick={shifter('login')}
                                                        style={dummyLink}
                                                    >
                                                        {' Login'}
                                                    </span>
                                                </Box>
                                            </>
                                        )}
                                    </DialogContent>
                                </Box>
                            </Grid>
                            {/* Action Screen */}
                            {activeStep === 'banner' && (
                                <Grid
                                    item
                                    xs={12}
                                    sx={{ backgroundColor: '#8077F6', color: '#F2F1FE' }}
                                >
                                    <DialogContent>
                                        <Stack pt={2}>
                                            <Box>
                                                <Box component="img" src={logoWhite} alt="logo" />
                                                <Typography
                                                    my={3}
                                                    sx={{ fontSize: '20px', fontWeight: 600 }}
                                                >
                                                    DKSH is the leading Market Expansion Services
                                                    provider.
                                                </Typography>
                                            </Box>
                                            <Box my={3} sx={{ textAlign: 'center' }}>
                                                <Box
                                                    component="img"
                                                    src={frame}
                                                    alt="logo"
                                                    sx={{ width: '100%', maxWidth: '400px' }}
                                                />
                                            </Box>
                                            <Stack
                                                mt={2}
                                                justifyContent="center"
                                                alignItems="center"
                                                spacing={2}
                                            >
                                                <Button
                                                    onClick={handleNextAction('login')}
                                                    type="submit"
                                                    size="smal"
                                                    variant="outlied"
                                                    sx={{
                                                        textTransform: 'capitalize',
                                                        borderRadius: '12px',
                                                        color: '#FFFFFF',
                                                        border: '1px solid #FFFFFF',
                                                        fontSize: '12px',
                                                        padding: '10px 78px',
                                                    }}
                                                >
                                                    Login
                                                </Button>
                                                <Button
                                                    onClick={handleNextAction('signup')}
                                                    size="smal"
                                                    variant="outlied"
                                                    sx={{
                                                        textTransform: 'capitalize',
                                                        borderRadius: '12px',
                                                        color: '#FFFFFF',
                                                        border: '1px solid #FFFFFF',
                                                        fontSize: '12px',
                                                        padding: '10px 70px',
                                                    }}
                                                >
                                                    Sign Up
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </DialogContent>
                                </Grid>
                            )}
                        </Grid>
                    )}
                    {loadingV2 && (
                        <Box
                            sx={{
                                backgroundImage: `url(${msgBGM})`,
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center center',
                                // width: '80vw',
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '250px',
                                padding: '20px 0px 30px 0px',
                            }}
                        >
                            {loadingV2 === 'loading' && <CircularProgress />}
                            {loadingV2 === 'responded' && (
                                <Grid container py={2} px={2} justifyContent={'space-between'}>
                                    <Grid item xs={12}>
                                        <Typography
                                            mt={2}
                                            sx={{
                                                fontSize: '18px',
                                                fontWeight: 600,
                                                maxWidth: '500px',
                                                textAlign: 'center',
                                                marginX: 'auto',
                                            }}
                                        >
                                            Congratulations{' '}
                                            {currentUser?.fullName || signUpUser?.fullName}! <br />
                                            {openLoginBoxDesk === 'login'
                                                ? 'Login Successful'
                                                : 'Your account has been created'}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography
                                            mt={2}
                                            sx={{
                                                fontSize: '13px',
                                                maxWidth: '500px',
                                                textAlign: 'center',
                                                marginX: 'auto',
                                            }}
                                        >
                                            {currentUser?.role === 'client'
                                                ? ' Please provide us few more details about you. This will enable us to recommend you the best talent.'
                                                : 'Please provide us few more details about you. This will enable us to recommend you the best jobs.'}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack
                                            mt={5}
                                            justifyContent="center"
                                            alignItems="center"
                                            spacing={2}
                                        >
                                            <Button
                                                onClick={() => {}}
                                                type="submit"
                                                size="smal"
                                                variant="contained"
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    borderRadius: '12px',
                                                    backgroundColor: '#8077F6',
                                                    fontSize: '12px',
                                                    padding: '9px 26px',
                                                }}
                                            >
                                                Update Profile
                                            </Button>
                                            <Button
                                                onClick={handleClose}
                                                size="smal"
                                                variant="outlined"
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    borderRadius: '12px',
                                                    color: '#000000',
                                                    border: '1px solid #98A1AE',
                                                    fontSize: '12px',
                                                    padding: '9px 29px',
                                                }}
                                            >
                                                Update later
                                            </Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            )}
                        </Box>
                    )}
                </Box>
            </Dialog>
        </div>
    );
};

export default Index;
