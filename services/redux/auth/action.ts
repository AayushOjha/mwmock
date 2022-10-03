import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export default function setUserDetails(state:any, action: PayloadAction<any>) {
    state.userDetails = action.payload;
}


 