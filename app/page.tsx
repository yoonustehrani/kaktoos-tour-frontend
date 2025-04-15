import NewTourSearchForm from "./ui/forms/NewTourSearchForm/NewTourSearchForm";
import SuggestedDestinationsSection from "./ui/sections/SuggestedDestinationsSection";
import PopularDestinationsSection from "./ui/sections/PopularDestinationsSection";
import MainHeader from "./ui/header/MainHeader";
import Image from "next/image";
import Link from "next/link";
import ToursOnCalendarSection from "./ui/sections/ToursOnCalendarSection";
import StoriesSection from "./ui/sections/StoriesSection";

export default function Home() {
    return (
        <>
            <MainHeader />
            <section className="bg-websiteGreen w-full md:px-3 flex flex-wrap justify-center gap-y-12 pb-12">
                <StoriesSection />
                <SuggestedDestinationsSection />
            </section>
            <PopularDestinationsSection />
            <section className="bg-websiteGreen w-full px-4 h-96 my-10 flex flex-col items-center gap-3 py-8">
                <h3 className="text-white font-bold text-4xl">دسته بندی تورها</h3>
                <p className="mb-6 text-gray-300">بر اساس ویژگی ها موردنظر شما برای مقصد تور</p>
                <div className="py-4 px-6 w-4/5 flex flex-wrap justify-center gap-20">
                    <Link href={`/tours`} className="flex flex-col gap-2 items-center">
                        <div className="overflow-hidden flex items-center justify-center rounded-full size-40">
                            <Image
                                src="/images/categories/forest.svg"
                                className="w-full h-full object-cover"
                                alt="Forest category"
                                width={0}
                                height={0}
                            />
                        </div>
                        <span className="text-white text-xl font-semibold">جنگل و بافت طبیعی</span>
                    </Link>
                    <Link href={`/tours`} className="flex flex-col gap-2 items-center">
                        <div className="overflow-hidden flex items-center justify-center rounded-full size-40">
                            <Image
                                src="/images/categories/desert.svg"
                                className="w-full h-full object-cover"
                                alt="Forest category"
                                width={0}
                                height={0}
                            />
                        </div>
                        <span className="text-white text-xl font-semibold">صحرایی</span>
                    </Link>
                    <Link href={`/tours`} className="flex flex-col gap-2 items-center">
                        <div className="overflow-hidden flex items-center justify-center rounded-full size-40">
                            <Image
                                src="/images/categories/mountain.svg"
                                className="w-full h-full object-cover"
                                alt="Forest category"
                                width={0}
                                height={0}
                            />
                        </div>
                        <span className="text-white text-xl font-semibold">کوهستانی</span>
                    </Link>
                    <Link href={`/tours`} className="flex flex-col gap-2 items-center">
                        <div className="overflow-hidden flex items-center justify-center rounded-full size-40">
                            <Image
                                src="/images/categories/beach-2.svg"
                                className="w-full h-full object-cover"
                                alt="Forest category"
                                width={0}
                                height={0}
                            />
                        </div>
                        <span className="text-white text-xl font-semibold">ساحلی</span>
                    </Link>
                    <Link href={`/tours`} className="flex flex-col gap-2 items-center">
                        <div className="overflow-hidden flex items-center justify-center rounded-full size-40">
                            <Image
                                src="/images/categories/city.svg"
                                className="w-full h-full object-cover"
                                alt="Forest category"
                                width={0}
                                height={0}
                            />
                        </div>
                        <span className="text-white text-xl font-semibold">شهری</span>
                    </Link>
                    <Link href={`/tours`} className="flex flex-col gap-2 items-center">
                        <div className="overflow-hidden flex items-center justify-center rounded-full size-40">
                            <Image
                                src="/images/categories/country-2.svg"
                                className="w-full h-full object-cover"
                                alt="Forest category"
                                width={0}
                                height={0}
                            />
                        </div>
                        <span className="text-white text-xl font-semibold">برون شهری</span>
                    </Link>
                </div>
            </section>
            <ToursOnCalendarSection />
        </>
    )
}