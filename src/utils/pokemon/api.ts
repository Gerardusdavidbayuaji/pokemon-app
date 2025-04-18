import axiosWithConfig from "../axiosWithConfig";
import { Request, Response } from ".";

export const getPokemon = async (params?: Request) => {
  try {
    let query = "";

    if (params) {
      const queryParams: string[] = [];

      let key: keyof typeof params;
      for (key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }

      query = queryParams.join("&");
    }

    const url = query ? `/pokemon?${query}` : `/pokemon`;

    const response = await axiosWithConfig.get(url);
    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
