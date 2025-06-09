import { TOUR_RESULT } from "@/app/utils/types"
import Image from "next/image"
import Link from "next/link"
import TourCardButton from "./TourCardButton";
import { convertToJalali, farsiNumber, getJMoment, getTourHref } from "@/app/utils";
import TourDatesCloseButton from "./TourDatesCloseButton";

type Props = {
    tours: TOUR_RESULT[]
}

export default function Tours({tours}: Props)
{
    return (
        <section className="rounded-lg p-4 w-full md:grow bg-white border border-black/10 shadow-sm">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {tours.map(tour => {
                    let countries = [...new Set(tour.destinations.map(x => x.country_code))]
                    return (
                        <article key={tour.id} className={`bg-white border border-black/10 overflow-hidden rounded-md shadow-sm flex flex-col gap-4`}>
                            <div className="w-full relative">
                                <div className="relative h-fit">
                                    <Image className="w-full h-auto" width={300} height={300} alt="" src={`/images/tour-${tour.destinations[0].country_code.toLowerCase()}.jpg`}/>
                                    <TourCardButton>
                                        <ul className="flex flex-col gap-2 overflow-y-auto h-full">
                                            <li className="text-base font-bold flex items-center justify-center gap-2">
                                                <p className="text-center">تاریخ های برگزاری</p>
                                                <TourDatesCloseButton />
                                            </li>
                                            {tour.dates.map(date => (
                                               <li key={date.id} className="text-sm">
                                                    <Link href={getTourHref(tour) + `?date=${date.id}`} className="flex items-center gap-3 duration-300 bg-gray-400 hover:bg-buff px-2 py-1 rounded-md">
                                                        <span className="fi fi-rs-calendar text-2xl"></span>
                                                        <div className="flex flex-col items-start">
                                                            <span>{convertToJalali(date.start_date)} - {convertToJalali(date.end_date)}</span>
                                                            <span>{`از`} {date.min_adult_price_display}</span>
                                                        </div>
                                                    </Link>
                                               </li> 
                                            ))}
                                        </ul>
                                    </TourCardButton>
                                </div>
                                <div className="absolute h-fit -bottom-3 w-full pr-2 pl-4">
                                    <div className="w-full flex justify-between items-end">
                                        <div className="w-12 h-12 border-4 bg-white border-white rounded-md text-xl flex items-center"></div>
                                        <div className="h-8 z-50">
                                            {countries.map((c) => (
                                                <span key={c} className="inline-block w-auto h-7 rounded-md opacity-90 overflow-hidden -mx-2">
                                                    <Image className="h-full w-auto" width={45} height={45} alt="" src={`/flags/1x1/${c.toLowerCase()}.svg`}/>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 py-4 flex flex-col justify-between gap-4 grow">
                                <Link href={getTourHref(tour)} className="font-bold text-2xl">{tour.title}</Link>
                                <hr className="opacity-90"/>
                                <div className="flex items-center justify-between text-gray-500">
                                    <span className="flex items-center gap-2">
                                        <span>ماهان ایر</span>
                                        <i className="h-5 fi fi-rs-plane"></i>
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span>{tour.number_of_nights} شب</span>
                                        <i className="h-5 fi fi-rs-moon"></i>
                                    </span>
                                </div>
                                <hr className="opacity-90"/>
                                <div className="flex justify-between items-center gap-4">
                                    <p className="text-nowrap text-gray-600">شروع قیمت‌</p>
                                    <p className="text-pretty text-left font-bold">{
                                        farsiNumber(tour.dates.find(x => x.min_adult_price === tour.min_adult_price).min_adult_price_display)    
                                    }</p>
                                </div>
                                <div className="flex justify-center">
                                    <Link className="px-3 duration-300 py-1 text-white bg-gray-700 rounded-full flex items-center gap-1 font-semibold" href={getTourHref(tour)}>
                                        <span className="text-lg h-4 fi fi-rs-eye"></span>
                                        مشاهده
                                    </Link>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}