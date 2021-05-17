import apiString from './apiString'
import instance from './instance'
import { AxiosRequestConfig } from 'axios'

const playSound = async(text: string) => {
  const cfg: AxiosRequestConfig = {
    method: 'POST',
    url: apiString.sound,
    data: {
      text: text
    },
    responseType: 'blob', // Important

  }
  const res = await instance.run(cfg)
  return res
}

export default { playSound }