import apiString from './apiString'
import instance from './instance'
import { AxiosRequestConfig } from 'axios'
import { Page,  IResp } from '../type/api.type'

const list = async() => {
  const cfg: AxiosRequestConfig = {
    method: 'GET',
    url: apiString.page
  }
  const res = await instance.run(cfg) as IResp<Page[]>
  return res
}

const add = async(data: Page) => {
    const cfg: AxiosRequestConfig = {
        method: 'POST',
        url: apiString.page,
        data: data
    }
    const res = await instance.run(cfg) as IResp<string>
    return res
}

const del = async(id: number) => {
    const cfg: AxiosRequestConfig = {
        method: 'DELETE',
        url: `${apiString.page}/${id}`,
    }
    const res = await instance.run(cfg) as IResp<string>
    return res
}

export default { list, add, del }