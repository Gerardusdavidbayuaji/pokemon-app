import axiosWithConfig from "../axiosWithConfig";
import { Request, Response, Pokemon } from ".";

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

export const getDetailPokemon = async (id: number) => {
  try {
    const response = await axiosWithConfig(`/pokemon/${id}`);
    return response.data as Pokemon;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
