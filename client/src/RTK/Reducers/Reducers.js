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

// inventorydata 
export const inventoryDataFunction = createAsyncThunk(
  'mainSlice/inventoryDataFunction',
  async ({ token, toastPermission }) => {
    const data = await toast.promise(
      axios.post(APIS.inventory_micro, { token: token }),
      toastPermission ? { pending: 'Loading Please Wait...', success: 'Successfully Loaded', error: 'Something Went Wrong' } : { error: 'Something Went Wrong' },
      { autoClose: 1500, hideProgressBar: true }
    );
    return data.data;
  }
);

// History
export const historyGetter = createAsyncThunk(
  'mainSlice/historyGetter',
  async ({ token, toastPermission }) => {
    const data = await toast.promise(
      axios.post(APIS.sale_orders_micro, { token: token }),
      toastPermission ? { pending: 'Loading Please Wait...', success: 'Successfully Loaded', error: 'Something Went Wrong' } : { error: 'Something Went Wrong' },
      { autoClose: 1500, hideProgressBar: true }
    );
    return data.data;
  }
);

// csvOrderDealer
export const csvOrderDealer = createAsyncThunk(
  'mainSlice/csvOrderDealer',
  async ({ token, body }) => {
    const data = await toast.promise(
      axios.post(APIS.csv_order_micro, { token, body }),
      { pending: 'Loading Please Wait...', success: 'Successfully Loaded', error: 'Something Went Wrong' },
      { autoClose: 1500, hideProgressBar: true }
    );
    return data.data;
  }
);

// csvOrderDealer
export const shipFromLocation = createAsyncThunk(
  'mainSlice/shipFromLocation',
  async ({ token, locationCode }) => {
    const data = await axios.post(APIS.shipFrom, { token, locationCode })
    return data.data;
  }
);

// successPick_micro
export const successPickDetails = createAsyncThunk(
  'mainSlice/successPickDetails',
  async ({ token, pickCode }) => {
    const data = await axios.post(APIS.successPick_micro, { token, pickCode })
    return data.data;
  }
);

// pickingPageDealer























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

} = mainSlice.actions;



// ------------------All Asyn Getter Setter Reducers Exporter ------------------//

export const mainReducer = mainSlice.reducer;

