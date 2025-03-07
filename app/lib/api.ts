import axios, { AxiosError } from "axios";
import { JOURNEY_COURSE, TOUR, TOUR_PAGE_RESULT, TOUR_SEARCH_API_RESPONSE } from "../utils/types";

class HttpApi {
    public client;
    constructor() {
        this.client = axios.create({
            baseURL: `${process.env.SERVICE_API}/api`
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

export async function getTour(id: string) {
    try {
        const response = await new HttpApi().client.get<TOUR>(`/tours/${id}`)
        return response.data
    } catch (error) {
        throw error;
    }
}


export async function getTourDetails(id: string) {
    try {
        const response = await new HttpApi().client.get<TOUR_PAGE_RESULT>(`/tours/${id}/details`)
        return response.data
    } catch (error) {
        throw error;
    }
}

export async function getJourney(tourId: string, dateId: number) {
    try {
        const response = await new HttpApi().client.get<JOURNEY_COURSE[]>(`/tours/${tourId}/dates/${dateId}/journey`)
        return response.data
    } catch (error) {
        throw error;
    }
}
