import axios from "axios";
import { getEnvVars } from "../shared/constants/env";
import { Platform } from "react-native";
import { getTimeZone, getTimeZoneAsString } from "../shared/utils/date-utils";

let authToken = null;
let onInterceptorsError = null;
export const initAxios = (token, interceptorsError = '') => {
  authToken = token;
  if (interceptorsError) onInterceptorsError = interceptorsError;
}

const API_URLS = {
  main_url: getEnvVars().apiURL,
}

const setInterceptorHeader = (http, token = null, from) => {
  if (token) {
    http.defaults.headers.common["Authorization"] = "Bearer " + token;
  }
  http.defaults.headers.common["Sy-Platform"] = Platform.OS === 'ios' ? 'ios' : 'android';
  http.defaults.headers.common["Timezone"] = getTimeZone();
  http.defaults.headers.common["Zone"] = getTimeZoneAsString();
};

const http = (url = 'main_url') => {
  const https = axios.create({ baseURL: API_URLS[url] });

  https.interceptors.request.use(
    function (config) {
        // console.log("testing===>",config);
        
      return config;
    },
    function (error) {
conaole.log("on error data",error)
      return Promise.reject(error);
    })

  https.interceptors.response.use(function (response) {
    return response;
  },
    function (error) {
      const errMessage = error.response.data.message;
      onInterceptorsError(error?.response);
      return Promise.reject(error);
    });

  setInterceptorHeader(https, authToken, 'new');
  return https;

}


export default http;
