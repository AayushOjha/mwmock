import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userDetails: <any>{
      email: '',
    },
    accessToken:''
    // sort_by: <string>'created_at.desc',
    // limit: <any>10,
  },
//hello moto

  reducers: {
    setUserDetails: (state, action: PayloadAction<any>) => {
      state.userDetails = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<any>) => {
      state.userDetails.accessToken = action.payload;
    },
    // setBookingSortBy: (state, action: PayloadAction<any>) => {
      // state.sort_by = action.payload;
    // },
  },
});

export const {
  setUserDetails,
  setAccessToken
  // setBookingSortBy,
} = authSlice.actions;

export default authSlice.reducer;
