import axios from "axios";
import { COUNTRY, DESTINATION, DESTINATIONS_GROUPPED, JOURNEY_COURSE, ORIGIN } from "./types";

const http = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`
})

export const getOrigins = async (term?: string):Promise<ORIGIN[]> => (
    http.get('/locations/origin/search', {
        params: {
            term: term == '' ? undefined : term
        }
    }).then(r => r.data)
)

export const getDestinations = async (term?: string):Promise<DESTINATIONS_GROUPPED> => (
    http.get('/locations/destination/search', {
        params: {
            term: term == '' ? undefined : term
        }
    }).then(r => r.data)
)