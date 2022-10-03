import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './auth/authSlice';
import pageSlice from './pages/pagesSlice';
import websiteListSlice from './website-list/websiteListSlice';
// import DashboardDataSlice from './Dashboard/DashboardSlice'
// import BookingListSlice from './Booking/BookingListSlice';
// import VendorDetailsSlice from './VendorDetails/VendorDetailsSlice';

const store = configureStore({
  reducer: {
    authData: AuthSlice,
    websiteData: websiteListSlice,
    pageData: pageSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;


