import apiString from './apiString'
import instance from './instance'
import { AxiosRequestConfig } from 'axios'

const getText = async(vid: number) => {
  const cfg: AxiosRequestConfig = {
    method: 'GET',
    url: apiString.text,
    params: {
      vid: vid
    }
  }
  const res = await instance.run(cfg)
  return res
}

const add = async(vid: number, text: string) => {
  const cfg: AxiosRequestConfig = {
    method: 'POST',
    url: apiString.text,
    data: {
      vid,
      text
    }
  }
  const res = await instance.run(cfg)
  return res
}

const del = async(id: number) => {
  const cfg: AxiosRequestConfig = {
    method: 'DELETE',
    url: `${apiString.text}/${id}`
  }
  const res = instance.run(cfg)
  return res

}

export default { getText, add, del }