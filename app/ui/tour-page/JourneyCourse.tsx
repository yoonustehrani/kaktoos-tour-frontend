import { getJourney } from "@/app/lib/api";
import { farsiNumber } from "@/app/utils";
import { ID, LOCATION } from "@/app/utils/types";
import Image from "next/image";
import { FC } from "react";

interface JourneyCourseProps {
    tourId: string
    dateId: number
    destinations: (LOCATION & {
        location_id: ID,
        number_of_nights: number,
        required_visa: boolean,
        visa_preparation_days: number,
        order: number
    })[]
}

function getIconClass(transportation_type: 'A' | 'B' | 'T' | 'S') {
    switch (transportation_type) {
        case 'A':
            return 'plane-alt'
        case 'B':
            return 'bus-alt'
        case 'S':
            return 'ship'
        case 'T':
            return 'train'
    }
}

export default async function JourneyCourse({tourId, dateId, destinations}: JourneyCourseProps) {
    const journey = await getJourney(tourId, dateId)
    return (
        <div className="my-2 w-full flex flex-col gap-8 lg:gap-3 text-lg font-normal max-w-6xl">
            {journey.map((course, i) => {
                const tour_destination = destinations.find(x => x.id === course.destination_location_id)
                return (
                    <div key={course.id} className="flex flex-wrap lg:flex-col justify-between lg:gap-4 w-full">
                        <div className={`${i > 0 && 'lg:hidden'} flex gap-3 lg:items-center`}>
                            <span><i className="ml-2 mr-1 fi fi-rs-marker"></i>{course.origin.name_fa}</span>
                        </div>
                        <div className="w-full order-last lg:order-none self-stretch flex flex-col lg:flex-row items-center">
                            <div className={`p-2 -my-4 lg:-mx-3 flex items-center justify-center rounded-full z-20 border-black/10 bg-beige dark:bg-gray-900 ${course.transportation_type == 'A' ? 'border-t rotate-180 lg:border-t-0 lg:border-b lg:rotate-90' : 'border-b lg:border-b-0 lg:border-l'}`}>
                                <i className="w-8 h-8 flex items-center justify-center rounded-full bg-vanilla dark:bg-sky-900 dark:shadow-md fi fi-rs-plane-alt"></i>
                            </div>
                            <div className="w-full h-fit pb-2 pt-6 px-3 lg:py-2 lg:px-6 bg-white border border-black/10 dark:bg-gray-800 shadow-md rounded-lg grid grid-cols-3 place-content-center place-items-center gap-y-4 lg:flex lg:flex-row items-center justify-between">
                                <div className="flex items-center gap-3 text-xs">
                                    <span><i className="text-xl fi fi-rs-tower-control"></i></span>
                                    <div>
                                        <span className="font-bold">{course.departure.IATA_code}</span>
                                        <br />
                                        <span>{course.departure.name_fa || course.departure.name}</span>
                                    </div>
                                </div>
                                <div className="px-6 text-2xl">
                                    <span className="h-8 fi fi-rs-arrow-left"></span>
                                </div>
                                <div className="flex items-center gap-3 text-xs">
                                    <span><i className="text-xl fi fi-rs-tower-control"></i></span>
                                    <div>
                                        <span className="font-bold">{course.arrival.IATA_code}</span>
                                        <br />
                                        <span>{course.arrival.name_fa || course.arrival.name}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-xs gap-2 h-auto col-span-full pb-5 lg:p-0">
                                    <img className="p-1 bg-antiFlashWhite/50 rounded-full" src={`http://api.kaktoos.example/${course.transportation_firm.logo}`} alt="airline logo" height={45} width={45}/>
                                    <span>{course.transportation_firm.name_fa || course.transportation_firm.name}</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <span className="font-semibold text-sm hidden">ECONOMY</span>
                                    <div className="flex items-center gap-2 text-2xl">
                                        <i className="fi fi-rs-luggage-cart h-6"></i>
                                        <div className="text-xs flex flex-col items-center gap-1">
                                            <span>بار مجاز</span>
                                            <span>{course.baggage}Kg</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-2xl">
                                    <i className="fi fi-rs-clock h-6"></i>
                                    <div className="text-xs flex flex-col items-center gap-1">
                                        <span>ساعت پرواز</span>
                                        <span>{course.departure_time}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-2xl">
                                    <i className="fi fi-rs-duration h-6"></i>
                                    <div className="text-xs flex flex-col items-center gap-1">
                                        <span>مدت پرواز</span>
                                        <span>{course.duration}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 lg:items-center">
                            <span><i className="fi fi-rs-marker ml-2 mr-1"></i>{course.destination.name_fa}</span>
                            {tour_destination && (
                                <span className="h-fit text-xs bg-dark-moss-green text-white dark:text-antiFlashWhite dark:bg-gray-800 px-2 py-1 rounded-full">
                                    {farsiNumber(tour_destination.number_of_nights)} شب اقامت
                                </span>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}