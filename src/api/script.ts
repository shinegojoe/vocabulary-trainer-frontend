import apiString from './apiString'
import instance from './instance'
import { AxiosRequestConfig } from 'axios'

const getScript = async(name: string, word: string) => {
  const cfg: AxiosRequestConfig = {
    method: 'GET',
    url: apiString.script,
    params: {
      name,
      word
    }
  }
  const res = await instance.run(cfg)
  return res
}

export default { getScript }