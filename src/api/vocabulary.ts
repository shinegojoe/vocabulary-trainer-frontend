import { AxiosRequestConfig } from 'axios'
import apiString from './apiString'
import instance from './instance'

const get = async() => {
  const cfg: AxiosRequestConfig = {
    method: 'GET',
    url: apiString.vocabulary
  }
  const res = instance.run(cfg)
  return res
}

const add = async(vocabulary: string) => {
  const cfg: AxiosRequestConfig = {
    method: 'POST',
    url: apiString.vocabulary,
    data: {
      vocabulary
    }
  }
  const res = instance.run(cfg)
  return res
}

const checkedUpdate = async(val: boolean, id: number) => {
  const cfg: AxiosRequestConfig = {
    method: 'PATCH',
    url: `${apiString.vocabulary}/updateChecked`,
    data: {
      id: id,
      checked: val ? 1 : 0
    }
  }
  const res = await instance.run(cfg)
  return res
}

const del = async(id: number) => {
  const cfg: AxiosRequestConfig = {
    method: 'DELETE',
    url: `${apiString.vocabulary}/${id}`
  }
  const res = await instance.run(cfg)
  return res
}

export default { get, add, checkedUpdate, del}