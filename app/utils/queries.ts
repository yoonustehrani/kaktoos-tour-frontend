import axios from "axios";
import { COUNTRY, DESTINATION, DESTINATIONS_GROUPPED, JOURNEY_COURSE, ORIGIN } from "./types";

const http = axios.create({
    baseURL: 'http://service.tour.kaktoos.example/api'
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