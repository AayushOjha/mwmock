import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const websiteDetailsHeaderSlice = createSlice({
  name: 'websiteDetailsHeader',
  initialState: {
    headerDetails:{
      logoDetails:{
        logoAllignment:'',
        logoShape:''
      },
      links:[]
      // {
      //   mainLink:{
      //     label:'',
      //     link:'',
      //     subLinks:{
      //       label:'',
      //       link:''
      //     }
      //   }
      // }
    }
  },


  reducers: {
    setHeaderDetails: (state, action: PayloadAction<any>) => {
      state.headerDetails = action.payload;
    },
    setLogoDetails: (state, action: PayloadAction<any>)=>{
      state.headerDetails.logoDetails = action.payload;
    },
    setLogoShape: (state, action: PayloadAction<any>)=>{
      state.headerDetails.logoDetails.logoShape = action.payload;
    },
    setLogoAllignment: (state, action: PayloadAction<any>)=>{
      state.headerDetails.logoDetails.logoAllignment = action.payload;
    },
    setLinks: (state, action: PayloadAction<any>)=>{
      state.headerDetails.links = action.payload;
    },
    
    // setBookingSortBy: (state, action: PayloadAction<any>) => {
      // state.sort_by = action.payload;
    // },
  },
});

export const {
  // setUserDetails,
  // setBookingSortBy,
} = websiteDetailsHeaderSlice.actions;

export default websiteDetailsHeaderSlice.reducer;
