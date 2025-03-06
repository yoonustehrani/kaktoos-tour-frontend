import { FunctionComponent } from "react";
import PricingTable from "./PricingTable";
import { Hotel, HotelPackagePivot, LOCATION, PricingList, PRINCING_GROUPPED, TOUR_PACKAGE } from "@/app/utils/types";
import Image from "next/image";
import HotelCard from "./HotelCard";

type Dest = (LOCATION & {
    number_of_nights: number,
    required_visa: boolean,
    visa_preparation_days: number,
    order: number
    location_id: number
})

type PricingListProps = {
    pricingList: (PricingList & {
        package: (TOUR_PACKAGE & {
            hotels: (Hotel & HotelPackagePivot)[]
        })
        pricings: PRINCING_GROUPPED
    })
    destinations: Dest[]
}
 
const PricingListContainer: FunctionComponent<PricingListProps> = ({pricingList, destinations}) => {
    return (
        <div className="p-4 dark:bg-gray-950/50 rounded-lg">
            <div className="mb-4 flex flex-col items-center gap-4">
                <h4 className="text-2xl font-bold flex items-center gap-2"><i className="h-7 fi fi-rs-box-circle-check"></i> پکیج {pricingList.package.title}</h4>
                <div className="flex flex-wrap gap-4 py-3">
                    {pricingList.package.hotels.map(hotel => (
                        <HotelCard key={hotel.id} hotel={hotel} destination={destinations.find(x => x.location_id === hotel.location_id) as Dest}/>
                    ))}
                </div>
            </div>
            <PricingTable pricings={pricingList.pricings}/>
        </div>
    )
}
 
export default PricingListContainer;