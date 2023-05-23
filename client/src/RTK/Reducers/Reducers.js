import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import axios from 'axios';
import { userData } from './fakeData';
// import { APIS } from '../../utils/table';

const APIS = {
  all_dev: 'http://localhost:8080/developers',
}


// ------------------All Asyn Reducers are below ------------------//
let initialState = {
  loading: false,
  allDevelopers: userData,
  selectedProfile: null,
  // filters
  activeTab: 'All',
  priceFilter: [0, 1000],
  servicesFilter: "All",
  ratingFilter: "5",
  availableToWorkFilter: true,
  proTallentFilter: false,


}

// ________________ Asyn Functions for Calling __________________ //

// saleOrderNoFilter
export const allDeveloperGetter = createAsyncThunk(
  'mainSlice/allDeveloperGetter',
  async () => {
    const data = await axios.get(APIS.all_dev)
    return data.data;
  }
);










// asyn setter
const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    LOG_OUT: (state) => {
    },
    LOG_IN: (state, { payload }) => {
      state.isAuthorised = true;
      state.accessToken = payload;
    },
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
    },
    RESET_Filter: (state, { payload }) => {
      state.activeTab = 'All';
      state.priceFilter = [0, 1000];
      state.servicesFilter = "All";
      state.ratingFilter = "5";
      state.availableToWorkFilter = true;
      state.proTallentFilter = false;
    },


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
        console.log('=======', payload);
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

          state.allDevelopers = data

        }
      })
      .addCase(allDeveloperGetter.rejected, (state, { error }) => {
        state.loading = false;
        Swal.fire({ icon: 'error', title: error.code, text: error.message })
      })


  // pickingPageDealer





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
  RESET_Filter


} = mainSlice.actions;



// ------------------All Asyn Getter Setter Reducers Exporter ------------------//

export const mainReducer = mainSlice.reducer;

