import Link from "next/link";

export interface BreadCrumbItem {
    href?: string
    text: string
}

export default function BreadCrumbs({links}: {links: BreadCrumbItem[]})
{
    return (
        <nav aria-label="Breadcrumb" className="w-full p-3 dark:bg-darkBlue-oxford">
            <ol className="text-gray-600 dark:text-gray-200 flex items-center gap-3">
                <li className="flex items-center gap-3">
                    <Link href="/" className="hover:underline py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </Link>
                    <span className="text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </span>
                </li>
                {links.map((l, i) => {
                    let isLast = links.length - 1 === i;
                    return (
                        <li key={i} className="flex items-center gap-3">
                            {isLast || !l.href ? (
                                <span className="text-gray-600 dark:text-gray-400 py-1">
                                    {l.text}
                                </span>
                            ) : (
                                <Link href={l.href} className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-[5px] duration-300 py-1">
                                    <span>{l.text}</span>
                                </Link>
                            )}
                            {!isLast && (
                                <span className="text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}