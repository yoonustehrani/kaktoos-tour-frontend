import Image from "next/image";
import Link from "next/link";
import SpecialOfferCard from "../cards/SpecialOfferCard";
import Nav from "../nav/Nav";
import NewTourSearchForm from "../forms/NewTourSearchForm/NewTourSearchForm";

export default function MainHeader()
{
    return (
        <header className="w-full px-2 md:px-8 py-2 bg-antiFlashWhite">
            <Nav />
            <section 
            
            style={{ 
                backgroundImage: `url('/world-map.svg')`,
             }}
            
            className="relative bg-contain bg-center flex flex-col-reverse md:flex-row justify-center items-top gap-12 md:gap-3 xl:gap-40 w-full md:px-3 xl:px-6 py-6 mb-4 mt-4">
                <div className="w-full md:w-1/2 px-3 xl:px-6 flex flex-col justify-around gap-4 text-gray-800 dark:text-gray-300">
                    <div className="w-fit">
                        <div className="flex items-center justify-between h-fit">
                            <Image className="h-14 md:h-28 w-auto" width={80} height={80} src={`/passport.svg`} alt=""/>
                            <h1 className="text-4xl md:text-8xl w-full text-center md:w-fit font-extrabold text-eerieBlack dark:text-antiFlashWhite relative">کاکتوس&nbsp;<span aria-label="تور">تـــور</span></h1>
                        </div>
                        <h2 className="text-2xl md:text-4xl mt-6 text-center w-fit md:break-keep md:text-nowrap">کاکتوس، مجری تخصصی تورهای داخلی و خارجی</h2>
                    </div>
                    {/* <p className="text-lg text-justify">با سال‌ها تجربه در صنعت گردشگری، بهترین و متنوع‌ترین تورها را به مقاصد محبوب داخلی و خارجی ارائه می‌دهیم. تورهای کاکتوس با برنامه‌ریزی حرفه‌ای، <em className="underlined">خدمات باکیفیت و قیمت‌های رقابتی</em> <span aria-label="Money bag">💰</span>، سفری به‌یادماندنی را برای شما رقم می‌زند.</p> */}
                    {/* <p className="text-lg font-semibold text-right flex items-center gap-2"><span className="inline-block w-5 h-5 rounded-full bg-black"></span> برای اطلاع از آخرین تورها و تخفیف‌های ویژه، از گزینه های زیر استفاده کنید:</p> */}
                    {/* <div className="flex flex-col justify-end items-center sm:flex-row text-lg gap-4 mt-4">
                        <Link href={'/tours'} className="bg-[#FE6700] text-white dark:bg-darkBlue-marian-light px-3 py-2 rounded-full flex items-center gap-2">
                            <span className="fi fi-rs-search w-8 h-8 bg-black/10 rounded-full shadow-inner shadow-black/20"></span>
                            <span>جستجوی تور</span>
                        </Link>
                        <Link href={'/contact'} className="bg-[#61BC67] text-white px-3 py-2 rounded-full flex items-center gap-2">
                            <span className="fi fi-rs-phone-flip w-8 h-8 bg-black/10 rounded-full shadow-inner shadow-black/20"></span>
                            تماس با کاکتوس
                        </Link>
                    </div> */}
                    <NewTourSearchForm />
                </div>
                <div className="w-full hidden md:flex md:w-1/2 h-64 sm:h-72 md:h-[30rem] items-end justify-center">
                    <div className="w-full h-full relative flex justify-start items-end">
                        <div className="w-auto h-full relative bg-white/60 rounded-t-full">
                            <img src="/images/traveller.webp" alt="" className="h-full pt-6 px-10 w-auto border-b-2 border-green-900" />
                            {/* <Image
                                src={`/images/traveller.webp`} // Default light mode image
                                alt="Kaktoos Seir logo"
                                fill={true}
                                className="h-96 "
                            /> */}
                            <SpecialOfferCard />
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}