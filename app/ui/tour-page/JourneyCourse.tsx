import { getJourney } from "@/app/lib/api";
import { ID, LOCATION } from "@/app/utils/types";
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
    }
}

export default async function JourneyCourse({tourId, dateId, destinations}: JourneyCourseProps) {
    const journey = await getJourney(tourId, dateId)
    return (
        <div className="my-2 w-full flex flex-col gap-3 text-lg font-normal">
            {journey.map(course => {
                const tour_destination = destinations.find(x => x.id === course.destination_location_id)
                return (
                    <div key={course.id} className="flex gap-2 bg-darkBlue-marian-dark rounded-t-md pr-3 w-fit h-fit py-0 overflow-hidden">
                        <div className="flex items-center gap-3">
                            <span>{course.origin.name_fa} </span>
                            <span className="scale-x-[-1] inline-block text-base h-4">
                                <i className={`fi fi-rs-${getIconClass(course.transportation_type)}`}></i>
                            </span>
                            <span>{course.destination.name_fa}</span>
                        </div>
                        <div className="h-auto scale-y-150 w-4 bg-darkBlue-marian-dark rotate-[30deg] -ml-4"></div>
                        {tour_destination && (
                            <div className="text-sm flex items-center h-auto bg-darkBlue-marian-light px-3 pr-6">{`${tour_destination.number_of_nights} شب اقامت`}</div>
                        )}
                    </div>
                )
            })}
        </div>
    );
}