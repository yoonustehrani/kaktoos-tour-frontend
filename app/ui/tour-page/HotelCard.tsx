import { Hotel, HotelPackagePivot, LOCATION } from "@/app/utils/types";
import Image from "next/image";
import { FunctionComponent } from "react";

interface HotelCardProps {
    hotel: (Hotel & HotelPackagePivot)
    destination: (LOCATION & {
        number_of_nights: number,
        required_visa: boolean,
        visa_preparation_days: number,
        order: number
        location_id: number
    })
}
 
const HotelCard: FunctionComponent<HotelCardProps> = ({hotel, destination}) => {
    return (
        <div key={hotel.id} className="overflow-hidden rounded-md">
            <div className="w-full overflow-hidden max-w-full">
                <Image className="w-full h-auto" alt={hotel.name} src={`/images/hotel/${hotel.id}.jpeg`} height={400} width={400} />
            </div>
            <div className="bg-gray-900 py-3 px-2 flex flex-col items-center gap-2 text-sm">
                <h5 className="text-right text-base font-semibold flex gap-2 items-center justify-center max-w-32"><i className="fi fi-rs-hotel"></i> {hotel.name_fa || hotel.name}</h5>
                <div className="w-full flex items-center justify-center relative pt-2 pb-3">
                    <hr className="w-full"/>
                    <span className="absolute text-xs flex flex-row-reverse justify-center gap-1 bg-gray-950 rounded-full py-1 px-2 w-fit">
                        {Array.from({length: hotel.stars}).map((x, i) => (
                            <i key={i} className="h-3 fi fi-rs-star text-yellow-400"></i>
                        ))}
                        {Array.from({length: 5 - hotel.stars}).map((x, i) => (
                            <i key={i} className="h-3 fi fi-rs-star text-gray-600"></i>
                        ))}
                    </span>
                </div>
                <span className="flex gap-2 text-gray-400">
                    <i className="fi fi-rs-bed"></i>
                    <span>{destination.number_of_nights} {`شب`}</span>
                </span>
                <hr />
                <span className="flex gap-2 text-gray-400">
                    <i className="fi fi-rs-marker"></i>
                    <span>{destination.name_fa} - {destination.name}</span>
                </span>
            </div>
            {/*  */}
        </div>
    );
}
 
export default HotelCard;