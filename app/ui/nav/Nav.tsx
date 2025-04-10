import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import HasSubMenu from "./HasSubMenu";

export default function({
    className = ''
}: {
    className?: string
}) {
    return (
        <nav className={`h-20 px-3 py-2 w-full flex justify-between items-center gap-4`}>
            {/* bg-black/10 dark:bg-white/10 */}
            <Link href="/" className="h-full w-full flex justify-center md:w-fit md:justify-start text-3xl gap-2 items-center font-bold text-emerald-900">
                {/* <Logo />
                        */}
                <Image
                    src={`/images/logo/logo-green-400.webp`} // Default light mode image
                    alt="Kaktoos Seir logo"
                    width={400}
                    height={400}
                    className="h-full w-auto"
                    priority
                />
                <span>کاکتوس سیر</span>
            </Link>
            <ul className="hidden md:flex grow gap-4 h-full items-center justify-center text-xl font-semibold">
                <HasSubMenu title="تور خارجی"/>
                <li>
                    <Link href="/">تور داخلی</Link>
                </li>
                <li>
                    <Link href="https://kaktoosseir.com/mag">مجله توریسم</Link>
                </li>
                <li>
                    <Link href="/contact">تماس با ما</Link>
                </li>
            </ul>
        </nav>
    )
}