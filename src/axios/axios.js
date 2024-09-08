import mainHttp from "./index";


const httpConfig = {
    mainHttp: mainHttp,
}

export const initAxiosApiCall = (async (method = 'post', api, payload = '', axiosHttpsMethod = 'mainHttp') => {

    const https = httpConfig[axiosHttpsMethod];
    try {
        const response = await https[method](`${api}`, payload);
        const res = response?.data || null;
        return res;
    } catch (err) {
        return err;
    } finally {
    }
})