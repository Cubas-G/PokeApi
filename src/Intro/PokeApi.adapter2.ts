import axios from "axios";

export class PokeApiAdapter2 {
  readonly axios = axios;

  async get<T>(url: string) {
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  async post(url: string, data: any) {}
  async put(url: string, data: any) {}
  async patch(url: string, data: any) {}
  async delete(url: string,) {}

  
  
}
