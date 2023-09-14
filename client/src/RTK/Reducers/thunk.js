import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIS } from '../../utils/endPoints';
import axios from 'axios';

// ________________ Asyn Functions for Calling __________________ //

// allUsersGetter
export const allUsersGetter = createAsyncThunk('mainSlice/allUsersGetter', async () => {
    const data = await axios.get(APIS.all_dev);
    return data.data;
});

// allJobsGetter
export const allJobsGetter = createAsyncThunk('mainSlice/allJobsGetter', async () => {
    const data = await axios.get(APIS.all_jobs);
    return data.data;
});

// LoginFun
export const LoginFun = createAsyncThunk('mainSlice/LoginFun', async ({ email, password }) => {
    const data = await axios.post(APIS.login, { email, password });
    return data.data;
});

// SignUpFun
export const SignUpFun = createAsyncThunk(
    'mainSlice/SignUpFun',
    async ({ firstName, role, lastName, contactNo, country, email, password, avatar }) => {
        const data = await axios.post(APIS.signup, {
            firstName,
            role,
            lastName,
            contactNo,
            country,
            email,
            password,
            avatar,
        });
        return data.data;
    }
);

// forgotFun
export const forgotFun = createAsyncThunk('mainSlice/forgotFun', async ({ email }) => {
    const data = await axios.post(APIS.forgot, { email });
    return data.data;
});

// ResetFun
export const ResetFun = createAsyncThunk('mainSlice/ResetFun', async ({ password, token }) => {
    const data = await axios.post(APIS.resetpassword, { password, token });
    return data.data;
});
