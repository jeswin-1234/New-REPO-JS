import Constants from "expo-constants";


const channel = 'local';
// const channel = "staging";
// const channel = 'production';
const localBaseUrl = "192.168.128.201";

const ENV = {
  local: {
    apiURL: `http://${localBaseUrl}:3001/`,
  },
};
const envChannel = Constants.expoConfig.channel || channel;

export const getEnvVars = (env = envChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  // return ENV.production;
  if (env === 'local') {
    return ENV.local;
  }
};

export const getBasePath = (env = envChannel) => {
  // console.log('------env', __DEV__)
  if(env === 'local') {
    return '';
  }
}

export const file_format = {
  fileFormats: ['ppt', 'txt'],
  imageFormats: ['jpg', 'jpeg', 'png', 'webp', 'svg', 'gif', 'heic'],
  videoFormats: ['webm', 'mp4', 'mpeg', 'mpeg4', 'ogg', 'h264', 'mov'],
  audioFormats: ['mp3', 'ogv', 'ogg'],
  wordFormat: ['doc', 'docx'],
  pdfFormat: ['pdf'],
  excelFormat: ['csv', 'xlsx', 'xls']
}









