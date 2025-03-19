import Cactus from "./ui/vectors/Cactus";
import SandDune from "./ui/vectors/SandDune";
import Link from "next/link";
import SearchTourForm from "./ui/forms/SearchTourForm/SearchTourForm";
import Nav from "./ui/nav/Nav";
import Footer from "./ui/footer/Footer";

export default function Home() {
	return (
		<>
		{/* rgb(249, 248, 239) */}
			<header className="w-full bg-beige dark:bg-darkBlue-oxford flex flex-col">
				<Nav />
				<section className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-3 xl:gap-20 w-full px-3 xl:px-6 pt-3 pb-6 mb-24 mt-4">
					<div className="md:w-1/2 bg-transparent px-3 xl:px-6 flex flex-col gap-4 text-gray-800 dark:text-gray-300">
						<h1 className="text-5xl mb-20 w-full text-center md:w-fit font-bold text-eerieBlack dark:text-antiFlashWhite relative">کاکتوس&nbsp;<span aria-label="تور" className="-mr-28 mt-12 absolute inline-block">تـــور</span></h1>
						{/* <p className="text-xl text-justify">برگزار کننده تور های داخلی و خارجی از مبدا مشهد</p>
						 */}
						<h2 className="text-2xl text-justify">کاکتوس، مجری تخصصی <strong>تورهای داخلی و خارجی</strong>&nbsp;<span aria-label="airplane emoji">✈️</span> از مبدا مشهد</h2>
						<p className="text-xl text-justify">با سال‌ها تجربه در صنعت گردشگری، بهترین و متنوع‌ترین تورها را به مقاصد محبوب داخلی و خارجی ارائه می‌دهیم. تورهای کاکتوس با برنامه‌ریزی حرفه‌ای، <em className="underlined">خدمات باکیفیت و قیمت‌های رقابتی</em> <span aria-label="Money bag">💰</span>، سفری به‌یادماندنی را برای شما رقم می‌زند.</p>
						<p className="text-xl text-justify">برای اطلاع از آخرین تورها و تخفیف‌های ویژه، از گزینه های زیر استفاده کنید:</p>
						<div className="flex flex-col items-center sm:flex-row text-lg gap-4">
							<Link href={'/tours'} className="bg-butterscotch border-raw-umber dark:bg-darkBlue-marian-light dark:border-darkBlue-marian-dark border-b-4 border-r-4 px-3 py-1 rounded-md flex items-center gap-2"> {/** min-w-44 md:w-auto justify-between md:justify-start */}
								<span className="fi fi-rs-search w-8 h-8 bg-black/10 rounded-full shadow-inner shadow-black/20"></span>
								جستجوی تور
							</Link>
							<Link href={'/contact'} className="bg-appleGreen dark:bg-avocado border-dark-moss-green border-b-4 border-r-4 px-2 py-1 rounded-md flex items-center gap-2"> {/** min-w-44 md:w-auto justify-between md:justify-start */}
								<span className="fi fi-rs-phone-flip w-8 h-8 bg-black/10 rounded-full shadow-inner shadow-black/20"></span>
								تماس با کاکتوس
							</Link>
						</div>
					</div>
					<div className="w-full md:w-1/2 h-64 sm:h-72 md:h-[30rem] flex items-end justify-center overflow-hidden">
						<div className="w-full h-fit relative flex justify-center items-end">
							<div className="w-fit absolute mb-[10%]">
								<Cactus className="h-52 md:h-96" />
							</div>
							<SandDune />
						</div>
					</div>
				</section>
			</header>
			<main className="w-full h-auto">
				<section className="w-full h-fit bg-vanilla dark:bg-gray-900 py-8 md:pt-0 flex justify-center">
					<SearchTourForm />
				</section>
			</main>
		</>
	);
}
