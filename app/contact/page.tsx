import ContactForm from "../ui/forms/ContactForm/ContactForm";
import BreadCrumbs from "../ui/nav/BreadCrumbs";
import Nav from "../ui/nav/Nav";
import GoogleMapPinSection from "../ui/sections/GoogleMapPinSection";

export default function ContactPage()
{
    return (
        <>
            <header className="w-full px-8 py-2 bg-antiFlashWhite">
                <Nav />
            </header>
            <main className="bg-white pt-4">
                <BreadCrumbs links={[{href: '/contact', text: 'تماس با ما'}]}/>
                <section className="w-full flex flex-col items-center">
                    <h1 className="text-gray-900 font-bold text-4xl">تماس با تیم <span className="text-[#61BC67]">کاکتوس</span></h1>
                    <p className="mb-8 text-gray-500">آماده پشتیبانی و پاسخ به سوالات شما هستیم</p>
                    <div className="w-fit grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border border-black/10 rounded-xl shadow h-fit flex items-center gap-4 p-4">
                            <i className="fi fi-rs-marker size-9 text-4xl box-content p-4 rounded-full bg-[#61BC67] "></i>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-bold">دفتر مرکزی</h3>
                                <p className="text-sm text-justify">مشهد، خیابان دانشجو، دانشجو 15، برج آراکس</p>
                            </div>
                        </div>
                        <div className="border border-black/10 rounded-xl shadow h-fit flex items-center gap-4 p-4">
                            <i className="fi fi-rs-clock size-9 text-4xl box-content p-4 rounded-full bg-[#61BC67] "></i>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-bold">ساعات کاری</h3>
                                <p className="text-sm text-justify">روزهای کاری از ساعت 9 صبح الی 5 بعدازظهر</p>
                            </div>
                        </div>
                        <div className="border border-black/10 rounded-xl shadow h-fit flex items-center gap-4 p-4 min-h-full">
                            <i className="fi fi-rs-phone-flip size-9 text-4xl box-content p-4 rounded-full bg-[#61BC67]"></i>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-bold">مرکز تماس</h3>
                                <a href="tel:+985138668003" className="text-sm">
                                    <span dir="ltr" className="flex-1 inline-block">051 - 3866 8003</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <GoogleMapPinSection />
                <div style={{ 
                    backgroundImage: `url('/images/contact-us-form-background.webp')`
                 }} className="w-full bg-fixed bg-no-repeat bg-cover bg-center">
                    <div className="w-full h-fit bg-black/60 flex justify-center items-center px-3 py-16 mt-6 md:mt-16">
                        <div className="w-full md:w-4/5 h-full flex justify-end">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}