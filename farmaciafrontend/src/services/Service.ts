import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:8080'
})

export const auth = async (url: string, data: object, setData: Function) => {
  const resp = await api.post(url, data)
  console.log(resp);
  setData(resp.data)
}

export const getWithoutToken = async (url: string, setData: Function) => {
  const resp = await api.get(url)
  setData(resp.data)
}

interface ResponseData {
  id: number;
  name: string;
  // outros campos conforme necessário
}

export const post = async(url: string, data: object, setData: Function, headers: object) => {
  const resp = await api.post(url, data, headers)
  setData(resp.data)
}
