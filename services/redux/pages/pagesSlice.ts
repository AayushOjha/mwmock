import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAllPagesByWebsite } from './apiReducer'

export const pageSlice = createSlice({
  name: 'pages',
  initialState: {
    pageList: [],
  },

  reducers: {
    setPageList: (state, action: PayloadAction<any>) => {
      state.pageList = action.payload
    },
  },

  extraReducers: (builder) => {
    //not working right now
    builder.addCase(getAllPagesByWebsite.fulfilled, (state, action) => {
      // console.log('action.payload', action.payload.data)
      setPageList(action?.payload?.data?.pages)
      // console.log('action.payload', action.payload.data)
      return action?.payload?.data?.pages // Add user to the state array
    })
  },
})

export const { setPageList } = pageSlice.actions

export default pageSlice.reducer
