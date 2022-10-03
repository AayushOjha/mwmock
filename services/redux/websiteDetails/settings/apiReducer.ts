import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const delay = async (ms: any) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const getWebsiteById = createAsyncThunk(
  'get website by id',
  async (websiteId: any) => {
    try {
      const response = await axios.get(
        `admin/api/websites/${websiteId}?client_id=1`
      )
      await delay(1000)
      return response
    } catch (error: any) {
      return error.response
    }
  }
)


export const getWebsiteSettingAPI = createAsyncThunk(
  'get website setting by id',
  async (websiteId: any) => {
    try {
      const response = await axios.post(
        `admin/api/websites/${websiteId}/website_setting?client_id=1`
      )
      await delay(1000)
      return response
    } catch (error: any) {
      return error.response
    }
  }
)

export const updateWebsiteSettingAPI = createAsyncThunk(
  'update website setting by id',
  async (prop: any) => {
    try {
      const response = await axios.post(
        `admin/api/websites/${prop.websiteId}/website_setting?client_id=1`, prop.body
      )
      await delay(1000)
      return response
    } catch (error: any) {
      return error.response
    }
  }
)


export const getWebsiteSeoSettingAPI = createAsyncThunk(
  'update website seo setting by id',
  async (websiteId: any) => {
    try {
      const response = await axios.get(
        `admin/api/websites/${websiteId}/seo_setting?client_id=1`
      )
      await delay(1000)
      return response
    } catch (error: any) {
      return error.response
    }
  }
)
export const updateWebsiteSeoSettings = createAsyncThunk(
  'update website seo setting by id',
  async (prop: any) => {
    try {
      const response = await axios.post(
        `admin/api/websites/${prop.websiteId}/seo_setting?client_id=1`, prop.body
      )
      await delay(1000)
      return response
    } catch (error: any) {
      return error.response
    }
  }
)


