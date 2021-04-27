import axios, { AxiosInstance, AxiosRequestConfig} from 'axios'

class Axios{
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      timeout: 20000
    })
    this.useRequsetInterceptor()
  }
  useRequsetInterceptor(): void {
    this.instance.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        return config
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error)
      }
    )
  }
  useResponseInterceptor() {

  }
  async run(config: AxiosRequestConfig) {
    const res = await this.instance(config)
    // console.log('xx', res)
    return res.data
  }

}

const axiosHelper = new Axios()
export default axiosHelper