import axios, { AxiosError } from "axios";
import { TOUR_SEARCH_API_RESPONSE } from "../utils/types";

class HttpApi {
    public client;
    constructor() {
        this.client = axios.create({
            baseURL: 'http://host.docker.internal/api'
        })
    }
}

export type TOUR_SEARCH_PARAMS = {
    countries?: string[],
    origins?: number[],
    destinations?: number[],
    nights?: number[]
}

export async function getTours(params: TOUR_SEARCH_PARAMS) {
    try {
        const response = await new HttpApi().client.post<TOUR_SEARCH_API_RESPONSE>('/tours/search', params, {
            params: {
                per_page: 10
            }
        })
        return response.data
    } catch (error) {
        throw error
        // if (error instanceof AxiosError) {
            
        // }
    }
}