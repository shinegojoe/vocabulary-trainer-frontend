import apiString from './apiString'
import instance from './instance'
import { AxiosRequestConfig } from 'axios'
import { Text, IResp } from '../type/api.type'

const getText = async(vId: number) => {
  const cfg: AxiosRequestConfig = {
    method: 'GET',
    url: apiString.text,
    params: {
      vId
    }
  }
  const res = await instance.run(cfg) as IResp<Text[]>
  return res
}

const add = async(vId: number, text: string) => {
  const cfg: AxiosRequestConfig = {
    method: 'POST',
    url: apiString.text,
    data: {
      vId,
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