import Link from "next/link";
import Logo from "./Logo";

export default function({
    className = ''
}: {
    className?: string
}) {
    return (
        <nav className={`h-20 px-3 py-2 w-full flex justify-between items-center gap-4 ${className}`}>
            {/* bg-black/10 dark:bg-white/10 */}
            <Link href="/" className="h-full w-full flex justify-center md:w-fit md:justify-start text-2xl gap-2 items-center font-bold text-emerald-900 dark:text-white">
                <Logo />
                <span>کاکتوس سیر</span>
            </Link>
            <ul className="hidden md:flex grow gap-4 h-full items-center justify-center text-xl font-semibold">
                <li>
                    <Link href="/">تور خارجی</Link>
                </li>
                <li>
                    <Link href="/">تور داخلی</Link>
                </li>
                <li>
                    <Link href="/">مجله توریسم</Link>
                </li>
                <li>
                    <Link href="/">تماس با ما</Link>
                </li>
            </ul>
        </nav>
    )
}