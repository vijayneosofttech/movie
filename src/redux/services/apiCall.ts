// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {AUTHENTICATION_TOKEN} from '../../utilities/constants';
import axios, {
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios';

export default async (apiData: ApiDataType): Promise<any> => {
  return new Promise((resolve, reject) => {
    callApi(apiData, resolve, reject);
  });
};

export interface ApiDataType {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS';
  url: string;
  useFormData?: boolean;
  payload?: any;
  sendToken?: boolean;
}

export async function callApi(
  {method, url, payload, sendToken = true, useFormData}: ApiDataType,
  resolve: (value?: any) => void,
  reject: (reason?: any) => void,
): Promise<void> {
  let headers: RawAxiosRequestHeaders | AxiosHeaders = {};

  // headers.Authorization = `Bearer ${process.env.API_KEY}`;
  // if (process.env.API_KEY) {
  // }

  let axiosData: AxiosRequestConfig = {
    method: method,
    headers: headers,
    url: url,
    maxBodyLength: Infinity,
  };

  if (method === 'GET' || method === 'DELETE') {
  } else {
    if (useFormData) {
      headers['Content-Type'] = 'multipart/form-data';
      var formData = await getFormData(payload);
      axiosData.data = formData;
    } else {
      headers['Content-Type'] = 'application/json';
      axiosData.data = JSON.stringify(payload);
    }
  }

  try {
    let response: AxiosResponse = await axios(axiosData);
    checkResponse(response, resolve, reject);
  } catch (err: any) {
    let response = err.response;
    if (response) {
      checkResponse(response, resolve, reject);
    } else {
      reject(err.message ? {error: err.message} : {error: err.message});
      return;
    }
  }
}

function checkResponse(
  response: AxiosResponse,
  resolve: (value?: any) => void,
  reject: (reason?: any) => void,
): void {
  if (
    response.status === 200 ||
    response.status === 201 ||
    response.status === 204
  ) {
    // success
    resolve(response.data || {});
    return;
  } else if (response.status === 401) {
    // makeUserLogout();
    reject(response.data);
    return;
  } else if (response.status === 400) {
    reject(response.data);
    return;
  } else if (response.status === 500) {
    // internal server error
    reject({err: 'Something Went Wrong'});
    return;
  } else {
    reject(response);
    return;
  }
}

function getFormData(data: Record<string, any>): FormData {
  let formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value) === true) {
      for (var i = 0; i < value.length; i++) {
        formData.append(`${key}`, value[i]);
      }
    } else {
      formData.append(`${key}`, value);
    }
  }
  return formData;
}
