import { AxiosRequestConfig } from 'axios'
import apiString from './apiString'
import instance from './instance'
import { Vocabulary, IResp } from '../type/api.type'

const list = async (pageId: number) => {
    const cfg: AxiosRequestConfig = {
        method: 'GET',
        url: apiString.vocabulary,
        params: {
            pageId
        }
    }
    const res = await instance.run(cfg) as IResp<Vocabulary[]>
    return res
}

const get = async () => {
    const cfg: AxiosRequestConfig = {
        method: 'GET',
        url: apiString.vocabulary,
    }
    const res = await instance.run(cfg)
    return res
}

const update = async (id: number, text: string) => {
    const cfg: AxiosRequestConfig = {
        method: 'PATCH',
        url: `${apiString.vocabulary}/${id}`,
        data: {
            vocabulary: text
        }
    }
    const res = await instance.run(cfg)
    return res
}



const add = async (vocabulary: string, pageId: number) => {
    const cfg: AxiosRequestConfig = {
        method: 'POST',
        url: apiString.vocabulary,
        data: {
            vocabulary,
            pageId
        }
    }
    const res = await instance.run(cfg)
    return res
}

const checkedUpdate = async (val: boolean, id: number) => {
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

const del = async (id: number) => {
    const cfg: AxiosRequestConfig = {
        method: 'DELETE',
        url: `${apiString.vocabulary}/${id}`
    }
    const res = await instance.run(cfg)
    return res
}

export default { list, add, checkedUpdate, del, get, update }