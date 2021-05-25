import { AxiosRequestConfig } from 'axios'
import apiString from './apiString'
import instance from './instance'
import { Translate, IResp } from '../type/api.type'

const translate = async(text: string) => {
  const cfg: AxiosRequestConfig = {
    method: 'POST',
    url: apiString.translate,
    data: {
      text
    }
  }
  const res = await instance.run(cfg) as IResp<Translate>
  return res
}

export default { translate }