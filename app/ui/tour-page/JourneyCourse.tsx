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
        <div className="my-2 w-full flex flex-col gap-3 text-lg font-normal">
            {journey.map((course, i) => {
                const tour_destination = destinations.find(x => x.id === course.destination_location_id)
                return (
                    <div key={course.id} className="flex flex-col justify-between gap-4">
                        <div className={`${i > 0 && 'hidden'} flex gap-3 items-center`}>
                            <span><i className="ml-2 mr-1 fi fi-rs-marker"></i>{course.origin.name_fa}</span>
                        </div>
                        <div className="w-full flex items-center">
                            <div className={`p-2 -mx-3 flex items-center justify-center rounded-full z-20 bg-gray-900 ${course.transportation_type == 'A' && 'rotate-90'}`}>
                                <i className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-900 shadow-md fi fi-rs-plane-alt"></i>
                            </div>
                            <div className="w-full h-fit py-2 px-6 bg-gray-800 shadow-md rounded-lg flex items-center justify-between">
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
                                <div className="flex flex-col items-center text-xs gap-2 h-auto">
                                    <img className="p-1 bg-antiFlashWhite/50 rounded-full" src={`http://api.kaktoos.example/${course.transportation_firm.logo}`} alt="airline logo" height={45} width={45}/>
                                    <span>{course.transportation_firm.name_fa || course.transportation_firm.name}</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <span className="font-semibold text-sm">ECONOMY</span>
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
                        <div className="flex gap-3 items-center">
                            <span><i className="fi fi-rs-marker ml-2 mr-1"></i>{course.destination.name_fa}</span>
                            {tour_destination && (
                                <span className="text-xs bg-gray-800 px-2 py-1 rounded-full">
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