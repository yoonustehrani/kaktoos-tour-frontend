'use client';

import Image from "next/image";
import Link from "next/link";
import InterActiveCalendar from "../calendars/InterActiveCalendar";
import { useState } from "react";

export type Tour = {
    image_url: string;
    title: string;
    slug: string;
    id: string;
    min_adult_price_display: string;
}

const example: Tour = {
    id: '1x',
    image_url: '/images/tour-it.jpg',
    title: 'تور یونان تابستان ۱۴۰۴',
    slug: 'تور-تابستان',
    min_adult_price_display: '۲۰/۰۰۰/۰۰۰ تومان'
}

export default function ToursOnCalendarSection() {
    const [tours, setTours] = useState<Tour[]>([])
    function loadTours() {
        let data = []
        for (let i = 0; i < Math.floor(Math.random() * 10) + 1; i++) {
            data.push({...example, id: `${i}xef`})
        }
        setTours(data)
    }

    return (
        <section className="w-full bg-antiFlashWhit flex flex-col items-center gap-2 py-6 px-3">
             <h3 className="text-gray-900 font-bold text-4xl">روی تقویم چی داریم؟</h3>
             <p className="mb-8 text-gray-500">بر اساس روزهای ماه بین تورهامون جستجو کن</p>
            <div className="w-full flex flex-row items-center gap-20">
                <div className="w-1/2 flex justify-end">
                    <InterActiveCalendar afterSelect={(date) => loadTours()}/>
                </div>
                <div className="w-1/2 py-10">
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                        {tours.map(t => (
                            <li key={t.id}>
                                <Link href={`/tours/${t.id}/${t.slug}`} className="border border-black/10 shadow-md flex gap-5 justify-between pl-4 items-center rounded-lg w-fit min-w-80 relative pr-20 h-20">
                                    <div className="absolute -right-10 overflow-hidden flex items-center justify-center rounded-lg size-24 shadow-sm">
                                        <Image
                                            className="w-full h-full object-cover"
                                            alt=""
                                            src={t.image_url}
                                            height={100}
                                            width={100}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xl font-bold">{t.title}</span>
                                        <span>از {t.min_adult_price_display}</span>
                                    </div>
                                    <i className="fi fi-rs-arrow-left text-xl h-5 bg-gray-100 box-content p-2 rounded-lg"></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}