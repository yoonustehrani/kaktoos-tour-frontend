'use client';

import Image from "next/image";
import Link from "next/link";
import InterActiveCalendar from "../calendars/InterActiveCalendar";

export default function ToursOnCalendarSection() {
    return (
        <section className="flex flex-row gap-20">
            <div className="w-1/2 flex justify-end">
                <InterActiveCalendar />
            </div>
            <div className="w-1/2 py-10">
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                    <li>
                        <Link href={`/tours`} className="border border-black/10 shadow-md flex gap-5 justify-between pl-4 items-center rounded-lg w-fit min-w-80 relative pr-20 h-20">
                            <div className="absolute -right-10 overflow-hidden flex items-center justify-center rounded-lg size-24 shadow-sm">
                                <Image
                                    className="w-full h-full object-cover"
                                    alt=""
                                    src={'/images/tour-it.jpg'}
                                    height={100}
                                    width={100}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xl font-bold">تور یونان تابستان ۱۴۰۴</span>
                                <span>از ۲۰/۰۰۰/۰۰۰ تومان</span>
                            </div>
                            <i className="fi fi-rs-arrow-left text-xl h-5 bg-gray-100 box-content p-2 rounded-lg"></i>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/tours`} className="border border-black/10 shadow-md flex gap-5 justify-between pl-4 items-center rounded-lg w-fit min-w-80 relative pr-20 h-20">
                            <div className="absolute -right-10 overflow-hidden flex items-center justify-center rounded-lg size-24 shadow-sm">
                                <Image
                                    className="w-full h-full object-cover"
                                    alt=""
                                    src={'/images/tour-it.jpg'}
                                    height={100}
                                    width={100}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xl font-bold">تور یونان تابستان ۱۴۰۴</span>
                                <span>از ۲۰/۰۰۰/۰۰۰ تومان</span>
                            </div>
                            <i className="fi fi-rs-arrow-left text-xl h-5 bg-gray-100 box-content p-2 rounded-lg"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}