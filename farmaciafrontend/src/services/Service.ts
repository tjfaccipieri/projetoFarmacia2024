import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:8080'
})

export const auth = async (url: string, data: object, setData: Function) => {
  const resp = await api.post(url, data)
  console.log(resp);
  setData(resp.data)
}