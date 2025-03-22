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

export type TOUR = {
    id: string
    title: string
    slug: string
    active: boolean
    number_of_nights: number
    created_at: string
    updated_at: string
}

export interface TOUR_RESULT extends TOUR {
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
    nights?: number
    page?: string;
}

export type SEARCH_TOUR_ROUTE_PROPS = {
    searchParams?: Promise<SEARCH_TOUR_ROUTE_SEARCH_PARAMS>
}


export type TOUR_DATE = {
    id: number
    tour_id: string
    start_date: string
    end_date: string
    min_adult_price: number
    min_adult_price_display: string
}

export type PricingList = {
    id: ID
    min_adult_price: number
    min_adult_price_display: string
}

export type TOUR_PACKAGE = {
    id: ID
    title: string
}

export type Hotel = {
    id: ID,
    location_id: number,
    name: string,
    name_fa: string,
    featured_image_url: null|string,
    stars: 0 | 1 | 2 | 3 | 4 | 5
}

export type HotelPackagePivot = {
    service: string,
    room_style: string,
    details: null|string
}

export type PRICING = {
    price: number
    currency: string
    room_type: number
}

export type PRINCING_GROUPPED = {
    [key: string]: PRICING[]
}

export type AIRLINE = {
    code: string,
    name: string,
    name_fa: string|null,
    icao: string|null,
    logo: string|null
}

export type AIRPORT = {
    IATA_code: string,
    name: string
    name_fa: string|null
    country_code: string,
    city_name: string
    city_name_fa: string
    is_international: boolean
}

export type JOURNEY_COURSE = {
    id: ID
    order: number,
    origin_location_id: number
    origin: LOCATION,
    destination_location_id: number
    destination: LOCATION,
    transportation_type: 'A' | 'B' | 'T' | 'S',
    departure_type: string,
    departure_id: string,
    departure_time: string,
    duration: string,
    transition_time: string,
    arrival_type: string,
    arrival_id: string,
    transportation_firm_type: string,
    transportation_firm_id: string,
    item_number: string,
    baggage: number
    transportation_firm: AIRLINE // TODO
    arrival: AIRPORT // TODO
    departure: AIRPORT // TODO
}

export interface TOUR_PAGE_RESULT extends TOUR {
    origin: LOCATION
    dates: {
        id: number
        tour_id: string
        start_date: string
        end_date: string
        min_adult_price: number
        min_adult_price_display: string
        pricing_lists: (PricingList & {
            package: (TOUR_PACKAGE & {
                hotels: (Hotel & HotelPackagePivot)[]
            })
            pricings: PRINCING_GROUPPED
        })[]
    }[]
    destinations: (LOCATION & {
        location_id: ID,
        number_of_nights: number,
        required_visa: boolean,
        visa_preparation_days: number,
        order: number
    })[]
}