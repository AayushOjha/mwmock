import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



const delay = async (ms: any) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}


export const getFooterDetails = createAsyncThunk(
  'update website seo setting by id',
  async (websiteId: any) => {
    try {
      const response = await axios.get(
        `admin/api/websites/${websiteId}/footer?client_id=1`
      )
      await delay(1000)
      return response
    } catch (error: any) {
      return error.response
    }
  }
)

export const updateFooterDetails = createAsyncThunk(
  'update website seo setting by id',
  async (prop: any) => {
    try {
      const response = await axios.post(
        `admin/api/websites/${prop.websiteId}/footer?client_id=1`, prop.body
      )
      await delay(1000)
      return response
    } catch (error: any) {
      return error.response
    }
  }
)







