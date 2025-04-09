import Image from "next/image";
import Link from "next/link";
import SpecialOfferCard from "../cards/SpecialOfferCard";
import Nav from "../nav/Nav";

export default function MainHeader()
{
    return (
        <header className="w-full px-8 py-2 bg-antiFlashWhite">
            <Nav />
            <section className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-3 xl:gap-12 w-full px-3 xl:px-6 py-6 mb-16 mt-4">
                <div className="md:w-1/2 bg-transparent px-3 xl:px-6 flex flex-col gap-4 text-gray-800 dark:text-gray-300">
                    <h1 className="text-7xl mb-6 w-full text-center md:w-fit font-bold text-eerieBlack dark:text-antiFlashWhite relative">کاکتوس&nbsp;<span aria-label="تور">تـــور</span></h1>
                    <h2 className="text-4xl w-full break-keep text-nowrap">کاکتوس، مجری تخصصی تورهای داخلی و خارجی</h2>
                    <p className="text-lg text-justify">با سال‌ها تجربه در صنعت گردشگری، بهترین و متنوع‌ترین تورها را به مقاصد محبوب داخلی و خارجی ارائه می‌دهیم. تورهای کاکتوس با برنامه‌ریزی حرفه‌ای، <em className="underlined">خدمات باکیفیت و قیمت‌های رقابتی</em> <span aria-label="Money bag">💰</span>، سفری به‌یادماندنی را برای شما رقم می‌زند.</p>
                    <p className="text-lg font-semibold text-right flex items-center gap-2"><span className="inline-block w-5 h-5 rounded-full bg-black"></span> برای اطلاع از آخرین تورها و تخفیف‌های ویژه، از گزینه های زیر استفاده کنید:</p>
                    <div className="flex flex-col justify-end items-center sm:flex-row text-lg gap-4 mt-4">
                        <Link href={'/tours'} className="bg-[#FE6700] text-white dark:bg-darkBlue-marian-light px-3 py-2 rounded-full flex items-center gap-2"> {/** min-w-44 md:w-auto justify-between md:justify-start */}
                            <span className="fi fi-rs-search w-8 h-8 bg-black/10 rounded-full shadow-inner shadow-black/20"></span>
                            <span>جستجوی تور</span>
                        </Link>
                        <Link href={'/contact'} className="bg-[#61BC67] text-white px-3 py-2 rounded-full flex items-center gap-2"> {/** min-w-44 md:w-auto justify-between md:justify-start */}
                            <span className="fi fi-rs-phone-flip w-8 h-8 bg-black/10 rounded-full shadow-inner shadow-black/20"></span>
                            تماس با کاکتوس
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-64 sm:h-72 md:h-[30rem] flex items-end justify-center">
                    <div className="w-full h-full relative flex justify-start items-end">
                        <div className="w-fit h-full relative bg-emerald-800/10 rounded-t-full">
                            <Image
                                src={`/traveller.webp`} // Default light mode image
                                alt="Kaktoos Seir logo"
                                width={400}
                                height={400}
                                className="h-full w-auto border-b-2 border-green-900"
                            />
                            <SpecialOfferCard />
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}