import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';;


export const axiosWrapper = (baseUrl: string, service: string, componentType: string, subSystem: string) => {
  const requestUrl = baseUrl + '/' + service + '?' + componentType + '=' + subSystem;
  return axios.get(requestUrl).then(response => {
    return response.data
  })
}

