import Image from "next/image";
import { BaloonIcon, ConfettiIcon, GiftBoxIcon, GlitterIcon } from "@/app/ui/header/icons";
import Link from "next/link";

export default function SpecialOfferCard()
{
    return (
        <div className="py-6 px-5 w-fit rounded-2xl shadow-md bg-white border border-black/10 h-fit absolute -top-12 right-full -mr-12 flex flex-col gap-4">
            <div className="w-full flex gap-2 items-center">
                <div>
                    {/* <GlitterIcon height={40} width={40}/> */}
                    {/* <BaloonIcon height={40} width={40}/> */}
                    <GiftBoxIcon height={40} width={40}/>
                    {/* <ConfettiIcon height={40} width={40}/> */}
                </div>
                <h2 className="text-2xl text-gray-700 font-semibold">پیشنهاد ویژه</h2>
            </div>
            <hr className="border-gray-200"/>
            <div className="flex gap-2 items-center text-lg col-span-full min-w-max">
                <Image className="rounded-full" alt="" src={'/flags/1x1/fr.svg'} width={30} height={30}/>
                <h3 className="font-bold">تور فرانسه نوروز ۱۴۰۴</h3>
            </div>
            <div className="w-full min-w-80 grid grid-cols-2 p-2 justify-items-stretch gap-x-6 gap-y-4  text-gray-700">
                <h4 className="col-span-full text-lg font-semibold text-gray-700">
                    - اطلاعات تور
                </h4>
                <div className="flex gap-2 items-center">
                    <span className="w-10 h-10 bg-sky-100 text-sky-700 rounded-lg flex items-center justify-center">
                        <i className="h-4 fi fi-rs-calendar"></i>
                    </span>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold">تاریخ</span>
                        <span className="text-xs text-gray-500">۲۸ فروردین</span>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="w-10 h-10 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center">
                        <i className="h-4 fi fi-rs-moon"></i>
                    </span>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold">اقامت</span>
                        <span className="text-xs text-gray-500">۳ شب</span>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center">
                        <i className="h-4 fi fi-rs-dollar"></i>
                    </span>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold">قیمت</span>
                        <span className="text-xs text-gray-500">از ۱۰۰/۰۰۰/۰۰۰ تومان</span>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="w-10 h-10 bg-yellow-100 text-yellow-700 rounded-lg flex items-center justify-center">
                        <i className="h-4 fi fi-rs-plane-alt"></i>
                    </span>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold">ایرلاین</span>
                        <span className="text-xs text-gray-500">ماهان ایر</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex items-center justify-center gap-3">
                <Link className="px-3 duration-300 py-1 text-white bg-[#FE6700] rounded-full flex items-center gap-1 font-semibold" href={'/tours'}>
                    <span className="text-lg h-4 fi fi-rs-eye"></span>
                    مشاهده
                </Link>
                <Link className="px-3 duration-300 py-1 text-emerald-700 flex items-center gap-1 font-semibold" href={'tel:+989150001234'}>
                    <span className="text-lg h-4 fi fi-rs-phone-flip"></span>
                    رزرو کنید
                </Link>
            </div>
        </div>
    )
}