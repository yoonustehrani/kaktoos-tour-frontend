import axios from "axios";
import { COUNTRY, ORIGIN } from "./types";

const http = axios.create({
    baseURL: 'http://localhost/api'
})

export const getOrigins = async (term?: string):Promise<ORIGIN[]> => (
    http.get('/locations/origin/search', {
        params: {
            term: term == '' ? undefined : term
        }
    }).then(r => r.data)
)

export const getDestinations = async (term?: string):Promise<ORIGIN[]> => (
    http.get('/locations/destination/search', {
        params: {
            term: term == '' ? undefined : term
        }
    }).then(r => r.data)
)