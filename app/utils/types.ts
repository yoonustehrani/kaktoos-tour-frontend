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

export type ORIGIN = LOCATION & { tours_from_count: number }

export type DESTINATION = (LOCATION & {
    tours_count: number
    country: COUNTRY
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
    errors: [{[key: string]: string[]}],
    message: string
}

export type HttpError = AxiosError<ErrorResponse>