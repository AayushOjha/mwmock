import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const delay = async (ms: any) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}


export const getAllPagesByWebsite = createAsyncThunk(
  'pageList',
  async (websiteId: any) => {
    try {
      const response = await axios.get(`admin/api/websites/${websiteId}/pages?client_id=1`);
      await delay(1000)
      return response
    }
    catch (error: any) {
      return error.response
    }
  },
);

export const createNewPage = createAsyncThunk(
  'new page',
  async (prop: any) => {
    try {

      const response = await axios.post(`admin/api/websites/${prop.websiteId}/pages?client_id=1`, prop.body);
      return response
    }
    catch (error: any) {
      return error.response
    }
  },
);

export const getPageById = createAsyncThunk(
  'pageList',
  async (props: any) => {
    try {
      const response = await axios.get(`admin/api/websites/${props.websiteId}/pages/${props.pageId}?client_id=1`);
      await delay(1000)
      return response
    }
    catch (error: any) {
      return error.response
    }
  },
);


export const updatePagesById = createAsyncThunk(
  'page update',
  async (props: any) => {
    try {
      const response = await axios.post(`admin/api/websites/${props.websiteId}/pages/${props.pageId}/update_page?client_id=1`, props.body);
      await delay(1000)
      return response
    }
    catch (error: any) {
      return error.response
    }
  },
);







