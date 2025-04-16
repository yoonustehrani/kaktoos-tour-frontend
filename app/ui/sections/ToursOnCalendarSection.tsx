'use client';

import Image from "next/image";
import Link from "next/link";
import InterActiveCalendar from "../calendars/InterActiveCalendar";
import { useEffect, useState } from "react";
import { getJalaliMomentOf } from "@/app/utils";

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
    const [selectedDate, setSelectedDate] = useState<string>()
    function loadTours(date: string) {
        let data = []
        for (let i = 0; i < Math.floor(Math.random() * 10) + 1; i++) {
            data.push({...example, id: `${i}xef`})
        }
        setSelectedDate(date)
        setTours(data)
    }

    useEffect(() => {
        if (selectedDate) {
            loadTours(selectedDate)
        }
    }, [selectedDate])

    return (
        <section className="w-full bg-antiFlashWhit flex flex-col items-center gap-2 py-6 px-3">
             <h3 className="text-gray-900 font-bold text-4xl">روی تقویم چی داریم؟</h3>
             <p className="md:mb-8 text-gray-500">بر اساس روزهای ماه بین تورهامون جستجو کن</p>
            <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <InterActiveCalendar afterSelect={(date) => setSelectedDate(date)}/>
                </div>
                <div className="w-full flex flex-col items-center md:items-start gap-10 justify-center md:justify-start md:w-1/2 md:py-10">
                    {selectedDate && (
                        <p className="text-2xl font-semibold flex gap-2 items-center justify-center">
                            <i className="fi fi-rs-calendar size-7"></i>
                            <span>
                                تورهای{` `}{getJalaliMomentOf(selectedDate).format('jD jMMMM')}
                            </span>
                        </p>
                    )}
                    <ul className="w-fit md:w-full grid grid-cols-1 gap-10 pr-6">
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