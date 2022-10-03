import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const settingSlice = createSlice({
  name: 'auth',
  initialState: {
    // websiteDetails: <Object>{},
    // params: <any>{
    //   client_id: 1,
    //   filters: {
    //     search_query: ''
    //   },
    //   sort_by: "name.asc",
    //   limit: 10,
    //   offset: 0
    // }
  },

  reducers: {
    // setWebsiteDetails: (state, action: PayloadAction<any>) => {
    //   state.websiteDetails = action.payload;
    // },
    // setWebsiteParams: (state, action: PayloadAction<any>) => {
    //   state.params = action.payload;
    // },
    // setWebsiteListLimit: (state, action: PayloadAction<any>) => {
    //   state.params.limit = action.payload;
    // },
    // setWebsiteListOffset: (state, action: PayloadAction<any>) => {
    //   state.params.offset = action.payload;
    // },
    // setWebsiteListFilterSearchQuery: (state, action: PayloadAction<any>) => {
    //   state.params.filters.search_query = action.payload;
    // },
  },
});

export const {
  // setWebsiteDetails,
  // setWebsiteParams,
  // setWebsiteListLimit,
  // setWebsiteListOffset,
  // setWebsiteListFilterSearchQuery
} = settingSlice.actions;

export default settingSlice.reducer;
