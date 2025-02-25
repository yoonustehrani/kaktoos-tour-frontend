import { AxiosError } from "axios"

export type ID = number
export type UUID = string
export type ULID = string

export type LOCATION = {
    id: ID
    name: string
    name_fa: string
    country_code: string
}

export type ORIGIN = LOCATION & { tours_count: number }

export type DESTINATION = (LOCATION & {
    tours_count: number
    country: COUNTRY
})

export type MERE_DESTINATION = (LOCATION & {
    tours_count: number
})

export type DESTINATIONS_GROUPPED = {
    [key: string]: DESTINATION[]
}

export type COUNTRY = {
    code: string
    name: string
    name_fa: string
}

export type ErrorResponse = {
    errors: [{ [key: string]: string[] }],
    message: string
}

export type HttpError = AxiosError<ErrorResponse>

export type TOUR_META_NIGHT = {
    nights: number,
    tours_count: number
}

export type TOUR_SEARCH_META = {
    destinations: MERE_DESTINATION[],
    countries: (COUNTRY & { tours_count: number })[],
    price: {
        min: number,
        max: number
    },
    origins: ORIGIN[],
    number_of_nights: TOUR_META_NIGHT[]
}

export interface PAGINATED_RESULTS<DATA_TYPE> {
    current_page: number,
    data: DATA_TYPE,
    path: string,
    first_page_url: string,
    next_page_url: string,
    prev_page_url: string,
    from: number,
    to: number,
    per_page: string
}

export type TOUR_RESULT = {
    id: string
    title: string
    slug: string
    active: boolean
    number_of_nights: number
    created_at: string
    updated_at: string
    earliest_start_date: string
    min_adult_price: number
    min_adult_price_max: number
    origin: LOCATION
    dates: {
        id: number
        tour_id: string
        start_date: string
        end_date: string
        min_adult_price: number
        min_adult_price_display: string
    }[]
    destinations: {
        name: string
        name_fa: string
        country_code: string
    }[]
}

export type TOUR_SEARCH_API_RESPONSE = {
    meta: TOUR_SEARCH_META,
    results: PAGINATED_RESULTS<TOUR_RESULT[]>
}

export type TOURS_COUNT_OBJECT = { tours_count: number }

export type SEARCH_TOUR_ROUTE_SEARCH_PARAMS = {
    'countries[]'?: string[];
    page?: string;
}

export type SEARCH_TOUR_ROUTE_PROPS = {
    searchParams?: Promise<SEARCH_TOUR_ROUTE_SEARCH_PARAMS>
}