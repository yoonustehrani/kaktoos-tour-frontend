'use client';

import { CurrencyType, PricingRoomType } from "@/app/lib/enums"
import { PRINCING_GROUPPED } from "@/app/utils/types"

interface Props {
    pricings: PRINCING_GROUPPED
}

export default function PricingTable({
    pricings
}: Props) {
    const PricingRoomTypes = PricingRoomType().cases
    return (
        <table className="table-auto w-full text-center rounded-md overflow-hidden">
            <thead className="text-xs font-semibold bg-darkBlue-marian-dark">
                <tr>
                    <th className="p-2">نوع اتاق</th>
                    {(Object.keys(pricings) as unknown as Array<keyof typeof PricingRoomTypes>).map((rt) => (
                        <th key={rt}>{PricingRoomType().getValue(rt)}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr className="bg-darkBlue-marian-light">
                    <th className="p-2 bg-darkBlue-marian-dark">نرخ</th>
                    {(Object.entries(pricings)).map(([key, prices]) => (
                        <td key={key} className="p-2">
                            <p className="flex justify-center flex-wrap gap-1">
                                {prices.map((p, pIndex) => (
                                    <span key={pIndex}>{p.price.toLocaleString('fa')} {CurrencyType().getValue(p.currency)}
                                    {(prices.length - 1) !== pIndex && ` +`}
                                    </span>
                                ))}
                            </p>
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    )
}