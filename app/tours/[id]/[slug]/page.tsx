import { getTour, getTourDetails } from "@/app/lib/api"
import BreadCrumbs, { BreadCrumbItem } from "@/app/ui/nav/BreadCrumbs"
import Nav from "@/app/ui/nav/Nav"
import DatesNav from "@/app/ui/tour-page/DatesNav"
import JourneyCourse from "@/app/ui/tour-page/JourneyCourse"
import PricingListContainer from "@/app/ui/tour-page/PricingListContainer"
import { getJalaliMomentOf } from "@/app/utils"
import { unstable_cache } from "next/cache"
import Image from "next/image"
import { Suspense } from "react"

type PageProps = {
    searchParams: {
        date: string
    }
    params: {
        id: string
        slug: string
    }
}

export async function generateMetadata({ params }: PageProps) {
    const {id} = await params
    const tour = await unstable_cache(() => getTour(id), ['tour', id], { revalidate: 5 * 60, tags: ['tour']})()
    return {
      title: tour.title,
    }
}

export default async function Page({params, searchParams}: PageProps) {
    const {id, slug} = await params
    const href = `/tours/${id}/${slug}`;
    const queryDate = (await searchParams).date
    const tour = await unstable_cache(() => getTourDetails(id), ['tour', id], { revalidate: false, tags: ['tour']})()
    let links: BreadCrumbItem[] = [{href: '/tours', text: 'تور ها'}, {href: href, text: tour.title}];
    const currentDate = queryDate ? tour.dates.find(x => x.id == Number(queryDate)) : tour.dates[0];
    const countries = [...new Set(tour.destinations.map(x => x.country_code))]
    if (! currentDate) {
        throw new Error()
    }

    if (queryDate) {
        links.push({text: `${getJalaliMomentOf(currentDate.start_date).format('jD jMMMM jYYYY')}`})
    }

    return (
        <>
            <header className="w-full px-8 py-2 bg-antiFlashWhite">
                <Nav />
            </header>
            <main className="bg-white flex flex-wrap gap-x-8 gap-y-8 py-12 px-3 lg:px-8 w-full overflow-hidden">
                <BreadCrumbs links={links}/>
                <div className="flex items-center gap-3 w-full">
                    <div className="flex items-center">
                        {countries.map(c => (
                            <span key={c}>
                                <Image className="rounded-full -mx-2" src={`/flags/1x1/${c.toLowerCase()}.svg`} height={60} width={60} alt="Country Flag" />
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl font-bold">{tour.title} - {tour.number_of_nights} شب</h1>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-3">
                    <aside className="overflow-hidden w-full lg:w-fit bg-white border border-black/10 shadow-md rounded-md p-3 h-fit">
                        <DatesNav dates={tour.dates} currentDateId={currentDate.id}/>
                    </aside>
                    <section className="grow">
                        <h3 className="my-5 font-bold text-2xl flex flex-wrap items-center gap-3">
                            <span>💰</span>
                            <span>شروع قیمت این تاریخ</span>
                            <span>از {currentDate.min_adult_price_display}</span>
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
                            {currentDate.pricing_lists.map(pl => (
                                <PricingListContainer key={pl.id} destinations={tour.destinations} pricingList={pl}/>
                            ))}
                        </div>
                        <section className="w-full p-3 mt-4">
                            <h3 className="mb-5 font-bold text-2xl flex flex-wrap items-center gap-3">
                                <span className="fi fi-rs-route"></span>
                                <span>برنامه سفر</span>
                            </h3>
                            <Suspense fallback={`loading ...`}>
                                <JourneyCourse destinations={tour.destinations} tourId={tour.id} dateId={currentDate.id}/>
                            </Suspense>
                        </section>
                    </section>
                </div>
            </main>
        </>
    )
}