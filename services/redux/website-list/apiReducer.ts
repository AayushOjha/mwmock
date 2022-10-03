import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const delay = async (ms: any) => {
  return new Promise(resolve => setTimeout(resolve, ms))

}

export const getAllWebsites = createAsyncThunk(
  'websiteList',
  async (params: any) => {
    try {
      const response = await axios.get(`admin/api/websites`, { params: params });
      await delay(1000);
      // console.log({ response })
      return response
    }
    catch (error: any) {
      return error.response
    }
  },
);

export const createNewWebsites = createAsyncThunk(
  'websiteList',
  async (body: any) => {
    try {
      const response = await axios.post(`admin/api/websites?client_id=1`, body);
      await delay(1000);
      // console.log({ response })
      return response
    }
    catch (error: any) {
      return error.response
    }
  },
);


export const setPinWebsite = createAsyncThunk(
  'pinWebsite',
  async (websiteId: any) => {
    // console.log('pin website api call ', websiteId)
    try {
      const response = await axios.post(`admin/api/websites/${websiteId}/pin/?client_id=1`);
      await delay(1000);
      // console.log('pin website api call res', { response })
      return response
    }
    catch (error: any) {
      return error.response
    }

  },
);


export const setUnPinWebsite = createAsyncThunk(
  'unPinWebsite',
  async (websiteId: any) => {
    // console.log('unpin website api call ', websiteId)
    try {
      const response = await axios.post(`admin/api/websites/${websiteId}/unpin/?client_id=1`);
      await delay(1000);
      // console.log('pin website api call res', { response })
      return response
    }
    catch (error: any) {
      return error.response
    }

  },
);




// export const fetchBookingDetails = createAsyncThunk(
//   'fetchBookingDetails',
//   async (params:any, {getState}:any) => {
//     const vendorId = getState().vendorDetails.data.vendorId;
//     const pnr = params["query_params"]["params"]["pnr"]
//     //console.log(pnr,"4234242")
//     const response = await axios.get(`vendors/api/v/${vendorId}/bookings/${pnr}`);
//     return response
//   },
// );





