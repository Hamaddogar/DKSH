
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import axios from 'axios';
import { dummy } from '../../utils/HELPER';
import { APIS } from '../../utils/endPoints';

// ------------------All Asyn Reducers are below ------------------//
let initialState = {
  loading: false,
  allDevelopers: [],
  allJobs: [],
  settings: {},
  selectedProfile: dummy,
  loadingV2: false,
  currentUser: null,
  signUpUser: null,
  loginError: false,
  signUpError: false,
  forgotSuccess: false,
  forgotError: false,
  resetSuccess: false,
  resetError: false,
  resetToken: false,

  // filters for users
  activeTab: 'All',
  priceFilter: [0, 1000],
  servicesFilter: "All",
  servicesFilterOptions: ["All", "UI Design", "UX Design"],
  ratingFilter: 0,
  availableToWorkFilter: true,
  proTallentFilter: false,

  // filters for users
  activeTabJOB: 'All',
  priceFilterJOB: [0, 1000],
  servicesFilterJOB: "All",
  servicesFilterOptionsJOB: ["All", "UI Design", "UX Design"],
  ratingFilterJOB: 0,

  // 
  openLoginBoxDesk: false,
}

// ________________ Asyn Functions for Calling __________________ //

// allUsersGetter
export const allUsersGetter = createAsyncThunk(
  'mainSlice/allUsersGetter',
  async () => {
    const data = await axios.get(APIS.all_dev)
    return data.data;
  }
);

// allJobsGetter
export const allJobsGetter = createAsyncThunk(
  'mainSlice/allJobsGetter',
  async () => {
    const data = await axios.get(APIS.all_jobs)
    return data.data;
  }
);

// LoginFun
export const LoginFun = createAsyncThunk(
  'mainSlice/LoginFun',
  async ({ email, password }) => {
    const data = await axios.post(APIS.login, { email, password })
    return data.data;
  }
);


// SignUpFun
export const SignUpFun = createAsyncThunk(
  'mainSlice/SignUpFun',
  async ({ firstName, role, lastName, contactNo, country, email, password, avatar }) => {
    const data = await axios.post(APIS.signup, { firstName, role, lastName, contactNo, country, email, password, avatar })
    return data.data;
  }
);


// forgotFun
export const forgotFun = createAsyncThunk(
  'mainSlice/forgotFun',
  async ({ email }) => {
    const data = await axios.post(APIS.forgot, { email })
    return data.data;
  }
);

// ResetFun
export const ResetFun = createAsyncThunk(
  'mainSlice/ResetFun',
  async ({ password, token }) => {
    const data = await axios.post(APIS.resetpassword, { password, token })
    return data.data;
  }
);


// asyn setter
const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    SELECTED_PROFILE: (state, { payload }) => {
      state.selectedProfile = payload;
    },
    ACTIVE_TAB_Filter: (state, { payload }) => {
      state.activeTab = payload;
    },
    PRICE_Filter: (state, { payload }) => {
      state.priceFilter = payload;
    },
    SERVICE_Filter: (state, { payload }) => {
      state.servicesFilter = payload;
    },
    RATING_Filter: (state, { payload }) => {
      state.ratingFilter = payload;
    },
    AVALIABLE_TO_WORK_Filter: (state, { payload }) => {
      state.availableToWorkFilter = payload;
    },
    PRO_TALLENT_Filter: (state, { payload }) => {
      state.proTallentFilter = payload;
    }, SERVICE_Filter_Options: (state, { payload }) => {
      state.servicesFilterOptions = payload;
    }, RESET_Filter: (state, { payload }) => {
      state.activeTab = 'All';
      state.priceFilter = [0, 1000];
      state.servicesFilter = "";
      state.ratingFilter = 0;
      state.availableToWorkFilter = true;
      state.proTallentFilter = false;
    },



    ACTIVE_TAB_Filter_JOB: (state, { payload }) => {
      state.activeTabJOB = payload;
    }, PRICE_Filter_JOB: (state, { payload }) => {
      state.priceFilterJOB = payload;
    }, SERVICE_Filter_JOB: (state, { payload }) => {
      state.servicesFilterJOB = payload;
    }, RATING_Filter_JOB: (state, { payload }) => {
      state.ratingFilterJOB = payload;
    }, SERVICE_Filter_Options_JOB: (state, { payload }) => {
      state.servicesFilterOptionsJOB = payload;
    }, RESET_Filter_JOB: (state, { payload }) => {
      state.activeTabJOB = 'All';
      state.priceFilterJOB = [0, 1000];
      state.servicesFilterJOB = "";
      state.ratingFilterJOB = 0;
    },

    LOGIN_BOX_HANDLE: (state, { payload }) => {
      if (payload) {
        state.openLoginBoxDesk = payload;
      } else {
        state.openLoginBoxDesk = payload;
        state.loadingV2 = payload;
        state.loginError = false;
        state.signUpError = false;
        state.forgotSuccess = false;
        state.forgotError = false;
        state.resetError = false;
        state.resetSuccess = false;
      }
    },
    LOGIN_WITH_GOOGLE_APPLE: (state, { payload }) => {
      state.currentUser = payload;
      state.loadingV2 = 'responded';
    },

    RESET_TOKEN: (state, { payload }) => {
      state.resetToken = payload;
      if (payload) {
        state.openLoginBoxDesk = 'reset'
      }
    },

    THEME_UPDATOR: (state, { payload }) => {
      state.settings.darkTheme = payload;
    },


    LOG_OUT: (state, { payload }) => {
      state.openLoginBoxDesk = null;
      state.loadingV2 = null;
      state.loginError = false;
      state.signUpError = false;
      state.forgotSuccess = false;
      state.forgotError = false;
      state.resetError = false;
      state.resetSuccess = false;
      state.currentUser = null;
      state.signUpUser = null;
      state.settings = {};

    },
  },

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
        Swal.fire({ icon: 'error', title: error.code, text: error.message })
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
        Swal.fire({ icon: 'error', title: error.code, text: error.message })
      })


      // LoginFun cases 
      .addCase(LoginFun.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.loadingV2 = 'responded';
          state.settings = payload.user.settings;
          state.currentUser = payload?.user;
          state.loginError = false;
        } else {
          state.loginError = payload.message
        }
      })
      .addCase(LoginFun.rejected, (state, { error }) => {
        Swal.fire({ icon: 'error', title: error.code, text: error.message })
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
          state.signUpError = payload.message
        }
      })
      .addCase(SignUpFun.rejected, (state, { error }) => {
        Swal.fire({ icon: 'error', title: error.code, text: error.message })
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
          state.forgotError = payload.message
        }
      })
      .addCase(forgotFun.rejected, (state, { error }) => {
        state.forgotloading = false;
        Swal.fire({ icon: 'error', title: error.code, text: error.message })
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
          state.resetError = payload.message
          state.forgotSuccess = false;
        }
      })
      .addCase(ResetFun.rejected, (state, { error }) => {
        state.resetloading = false;
        state.forgotSuccess = false;
        state.forgotError = false;
        Swal.fire({ icon: 'error', title: error.code, text: error.message })
      })

})





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

