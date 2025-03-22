'use client';

import { Formik } from "formik"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useRouter } from "nextjs-toploader/app"
import SearchForm from "./SearchForm";

const queryClient = new QueryClient()

export default function NewTourSearchForm()
{
    const router = useRouter();
    return (
        <QueryClientProvider client={queryClient}>
            <Formik
                initialValues={{
                    origins: null,
                    destinations: null,
                    start_date: null,
                    end_date: null,
                    nights: null
                } as {
                    origins: null|number[],
                    destinations: null|number[],
                    start_date: null|string,
                    end_date: null|string,
                    nights: null|number
                }}
                onSubmit={(values) => {
                    let queries: string[] = []
                    Object.entries(values).filter(([k, v]) => v).forEach(([k, v]) => {
                        if (Array.isArray(v)) {
                            k += '[]'
                            v.forEach(x => {
                                queries.push(`${k}=${x}`)
                            })
                            return;
                        }
                        queries.push(`${k}=${v}`)
                    })
                    router.push('/tours?' + queries.join('&'))
                }}
            >
                <SearchForm />
            </Formik>
        </QueryClientProvider>
    )
}