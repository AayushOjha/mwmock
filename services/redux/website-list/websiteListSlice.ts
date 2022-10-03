import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    websiteDetails: <Object>{},
    params: <any>{
      client_id: 1,
      // filters: {
      //   // search_query: '',
      //   // states: [],
      //   // website_created_at_start: '',
      //   // website_created_at_end: '',
      //   // website_updated_at_start: '',
      //   // website_updated_at_end: ''
      // },
      sort_by: "name.asc",
      limit: 10,
      offset: 0
    },
    websiteListView: false,
    recentWebsiteVisibility: true,
    pinnedWebsiteVisibility: true
  },

  reducers: {
    setWebsiteDetails: (state, action: PayloadAction<any>) => {
      state.websiteDetails = action.payload;
    },
    setWebsiteParams: (state, action: PayloadAction<any>) => {
      state.params = action.payload;
    },
    setWebsiteListLimit: (state, action: PayloadAction<any>) => {
      state.params.limit = action.payload;
    },
    setWebsiteListOffset: (state, action: PayloadAction<any>) => {
      state.params.offset = action.payload;
    },
    setWebsiteListFilterSearchQuery: (state, action: PayloadAction<any>) => {
      state.params.filters.search_query = action.payload;
    },
    setWebsiteListViewRedux: (state, action: PayloadAction<any>) => {
      state.websiteListView = action.payload;
    },
    setrecentWebsiteVisibilityRedux: (state, action: PayloadAction<any>) => {
      state.websiteListView = action.payload;
    },
    setPinnedWebsiteVisibilityRedux: (state, action: PayloadAction<any>) => {
      state.websiteListView = action.payload;
    },
  },
});

export const {
  setWebsiteDetails,
  setWebsiteParams,
  setWebsiteListLimit,
  setWebsiteListOffset,
  setWebsiteListFilterSearchQuery,
  setWebsiteListViewRedux,
  setrecentWebsiteVisibilityRedux,
  setPinnedWebsiteVisibilityRedux
} = authSlice.actions;

export default authSlice.reducer;
