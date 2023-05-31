import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import axios from 'axios';
const APIS = {
  all_dev: 'http://localhost:8080/user',
  all_jobs: 'http://localhost:8080/jobs',
}

// ------------------All Asyn Reducers are below ------------------//
let initialState = {
  loading: false,
  allDevelopers: [],
  selectedProfile: null,

  // filters for users
  activeTab: 'All',
  priceFilter: [0, 1000],
  servicesFilter: "",
  servicesFilterOptions: ["All", "UI Design", "UX Design"],
  ratingFilter: 0,
  availableToWorkFilter: true,
  proTallentFilter: false,

  // filters for users
  activeTabJOB: 'All',
  priceFilterJOB: [0, 1000],
  servicesFilterJOB: "",
  servicesFilterOptionsJOB: ["All", "UI Design", "UX Design"],
  ratingFilterJOB: 0,
}

// ________________ Asyn Functions for Calling __________________ //

// allDeveloperGetter
export const allDeveloperGetter = createAsyncThunk(
  'mainSlice/allDeveloperGetter',
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
    }


  },

  // thunk reducers Responses
  extraReducers: (builder) =>
    builder

      // allDeveloperGetter cases
      .addCase(allDeveloperGetter.pending, (state) => {
        state.loading = true;
      })
      .addCase(allDeveloperGetter.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload.success) {
          const data = payload.users.map(user => {
            return {
              ...user,
              commentCount: function () {
                return this.comments.length
              },
              ratingCount: function () {
                let number = this.comments.reduce((a, b) => a + b.rated, 0) / this.commentCount()
                return number.toFixed(1)
              },
              profileName: function () {
                return `${this.firstName} ${this.lastName}`
              },
            }
          })
          state.allDevelopers = data;
        }
      })
      .addCase(allDeveloperGetter.rejected, (state, { error }) => {
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







} = mainSlice.actions;

// ------------------All Asyn Getter Setter Reducers Exporter ------------------//
export const mainReducer = mainSlice.reducer;

