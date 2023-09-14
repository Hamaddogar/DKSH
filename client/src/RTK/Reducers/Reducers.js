import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { ACTIONS } from './actions';
import { initialState_Base } from './initial_state';
import { LoginFun, ResetFun, SignUpFun, allJobsGetter, allUsersGetter, forgotFun } from './thunk';

// asyn setter
const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: { ...initialState_Base },
    reducers: { ...ACTIONS },

    // thunk reducers Responses
    extraReducers: (builder) =>
        builder
            // allUsersGetter cases
            .addCase(allUsersGetter.pending, (state) => {
                state.loading = true;
            })
            .addCase(allUsersGetter.fulfilled, (state, { payload }) => {
                state.loading = false;
                if (payload.success) {
                    state.allDevelopers = payload.users;
                }
            })
            .addCase(allUsersGetter.rejected, (state, { error }) => {
                state.loading = false;
                Swal.fire({ icon: 'error', title: error.code, text: error.message });
            })

            // allJobsGetter cases
            .addCase(allJobsGetter.pending, (state) => {
                state.loading = true;
            })
            .addCase(allJobsGetter.fulfilled, (state, { payload }) => {
                state.loading = false;
                if (payload.success) {
                    state.allJobs = payload.list;
                }
            })
            .addCase(allJobsGetter.rejected, (state, { error }) => {
                state.loading = false;
                Swal.fire({ icon: 'error', title: error.code, text: error.message });
            })

            // LoginFun cases
            .addCase(LoginFun.fulfilled, (state, { payload }) => {
                if (payload.success) {
                    state.loadingV2 = 'responded';
                    state.settings = payload.user.settings;
                    state.currentUser = payload?.user;
                    state.loginError = false;
                } else {
                    state.loginError = payload.message;
                }
            })
            .addCase(LoginFun.rejected, (state, { error }) => {
                Swal.fire({ icon: 'error', title: error.code, text: error.message });
            })

            // SignUpFun
            .addCase(SignUpFun.fulfilled, (state, { payload }) => {
                // console.log('-signUp', payload);
                if (payload.success) {
                    state.loadingV2 = 'responded';
                    state.signUpUser = payload?.user;
                    state.currentUser = payload?.user;
                    state.settings = payload?.user?.settings;
                } else {
                    state.signUpError = payload.message;
                }
            })
            .addCase(SignUpFun.rejected, (state, { error }) => {
                Swal.fire({ icon: 'error', title: error.code, text: error.message });
            })

            // forgotFun
            .addCase(forgotFun.pending, (state) => {
                state.forgotloading = true;
            })
            .addCase(forgotFun.fulfilled, (state, { payload }) => {
                state.forgotloading = false;
                if (payload.success) {
                    state.forgotSuccess = payload.message;
                    // state.resetToken = payload.token;
                } else {
                    state.forgotError = payload.message;
                }
            })
            .addCase(forgotFun.rejected, (state, { error }) => {
                state.forgotloading = false;
                Swal.fire({ icon: 'error', title: error.code, text: error.message });
            })

            // ResetFun
            .addCase(ResetFun.pending, (state) => {
                state.resetloading = true;
            })
            .addCase(ResetFun.fulfilled, (state, { payload }) => {
                state.resetloading = false;
                if (payload.success) {
                    state.resetSuccess = payload.message;
                    // state.resetToken = false;
                    // state.openLoginBoxDesk = 'login';
                    state.loginError = false;
                    state.signUpError = false;
                    state.forgotSuccess = false;
                    state.forgotError = false;
                } else {
                    state.resetError = payload.message;
                    state.forgotSuccess = false;
                }
            })
            .addCase(ResetFun.rejected, (state, { error }) => {
                state.resetloading = false;
                state.forgotSuccess = false;
                state.forgotError = false;
                Swal.fire({ icon: 'error', title: error.code, text: error.message });
            }),
});

export const {
    LOG_IN,
    SELECTED_PROFILE,

    ACTIVE_TAB_Filter,
    PRICE_Filter,
    SERVICE_Filter,
    RATING_Filter,
    AVALIABLE_TO_WORK_Filter,
    PRO_TALLENT_Filter,
    RESET_Filter,
    SERVICE_Filter_Options,

    ACTIVE_TAB_Filter_JOB,
    PRICE_Filter_JOB,
    SERVICE_Filter_JOB,
    RATING_Filter_JOB,
    SERVICE_Filter_Options_JOB,
    RESET_Filter_JOB,

    LOGIN_BOX_HANDLE,
    LOGIN_WITH_GOOGLE_APPLE,
    RESET_TOKEN,
    THEME_UPDATOR,
    LOG_OUT,
} = mainSlice.actions;

// ------------------All Asyn Getter Setter Reducers Exporter ------------------//
export const mainReducer = mainSlice.reducer;
