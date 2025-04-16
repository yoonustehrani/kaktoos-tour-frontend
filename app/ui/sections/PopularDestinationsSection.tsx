'use client';

import Link from "next/link";
import { useState } from "react";

type Data = {
    title: string
    tours_count: number,
    image: string
}

function ExpandableCard({active, handleClick, data}: {active: boolean, handleClick: () => any, data: Data}) {
    return (
        <div 
            style={{ 
                backgroundImage: `url('/images/cards/${data.image}.webp')`
            }}
            onClick={handleClick} 
            className={`w-full md:w-1/6 duration-1000 rounded-3xl overflow-hidden bg-center md:bg-top bg-cover ${active ? 'grow h-96' : 'grow-0 h-24 cursor-pointer'} md:h-[40rem]`}
        >
            <div className="w-full h-full bg-black/50 p-5 flex items-end">
                <div className={`w-full ${active ? 'flex h-fit' : 'h-full md:h-fit'} items-center justify-between text-antiFlashWhite relative`}>
                    <div className={`${active ? '' : 'md:rotate-90 md:-mb-9 md:mr-12 origin-right'} relative duration-1000 flex flex-col md:gap-2`}>
                        <h4 className="font-semibold text-lg md:text-3xl">تور {data.title}</h4>
                        <p>{data.tours_count} مورد تور</p>
                    </div>
                    {active && (
                        <Link className={`flex absolute left-0 z-10 gap-1 items-center duration-500 delay-1000 ease-in-out opacity-100 w-fit border rounded-full py-1 px-2 text-xl bg-black/50`} href={`/tours/${data.image}`}>
                            <span>مشاهده تورها</span>
                            <i className="inline-block fi fi-rs-arrow-left h-5"></i>
                        </Link>
                    )}
                </div>
            </div>
            {/* duration-1000 ${active ? '' : 'rotate-90' } */}
        </div>
    )
}

const cards = [
    {
        title: 'دبی',
        tours_count: 12,
        image: 'dubai'
    },
    {
        title: 'سوییس',
        tours_count: 2,
        image: 'switzerland'
    },
    {
        title: 'استرالیا',
        tours_count: 1,
        image: 'australia'
    },
    {
        title: 'مصر',
        tours_count: 6,
        image: 'egypt'
    },
]

export default function PopularDestinationsSection()
{
    const [activatedCard, setActivatedCard] = useState(0);
    return (
        <section className="w-full bg-antiFlashWhit flex flex-col items-center gap-2 py-6 px-3">
            <h3 className="text-gray-900 font-bold text-4xl">مقصدهای پیشنهادی</h3>
            <p className="mb-8 text-gray-500">مقصدهای متناسب سلیقه مسافران کاکتوس</p>
            <div className="w-full md:w-4/5 flex flex-col md:flex-row-reverse gap-4">
                {cards.map((c, i) => (
                    <ExpandableCard 
                        handleClick={() => setActivatedCard(x => i)}
                        key={i} 
                        active={i == activatedCard}
                        data={c}
                    />
                ))}
            </div>
        </section>
    )
}