import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const signIn = createAsyncThunk(
  'signIn',
  async (body: Object, { getState }: any) => {
    // const vendorId = getState().vendorDetails.data.vendorId;
    try{
      const response = await axios.post(`http://localhost:3000/admin/api/sign_in`, body);
      return response
    }
    catch(error:any){
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





