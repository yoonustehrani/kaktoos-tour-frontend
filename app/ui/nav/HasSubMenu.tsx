'use client';

import Image from "next/image";
import Link from "next/link";
import { ReactNode, TouchEvent, useEffect, useRef, useState } from "react";

type Props = {
    title: string;
}

type HProps = {
    children: ReactNode;
    active: boolean;
    handleClick: () => void
    // key: "country" | "category"
}

function SubHeader({active, children, handleClick}: HProps) {
    return (
        <li onClick={handleClick} className={`px-2 py-1 rounded-md ${active ? 'bg-white' : 'cursor-pointer'}`}>
            <span className="flex items-center gap-1">
                {children}
                {!active && (<i className="fi ml-2 fi-rs-angle-small-left size-5"></i>)}
            </span>
        </li>
    )
}


function SubMenuList({active, children}: {active: boolean; children: ReactNode}) {
    return (
        <ul className={`w-fit ${active ? 'grid' : 'hidden'} grid-cols-2 text-base gap-4 mt-3`}>{children}</ul>
    )
}



export default function HasSubMenu({ title }: Props) {
    const [display, setDisplay] = useState(false);
    const [subMenu, setSubMenu] = useState<string>()
    const anchorRef = useRef<HTMLLIElement>(null); // Ref specifically for the <a> tag

    useEffect(() => {
        function handleClickOutside(event) {
        // Close if click is outside the anchor tag
        if (anchorRef.current && !anchorRef.current.contains(event.target)) {
            setDisplay(false);
            setSubMenu(undefined);
        }
        }

        // Only listen if dropdown is open
        if (display) {
        document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [display]);

    return (
        <li className="relative" ref={anchorRef}>
            <a onClick={(e) => {
                e.preventDefault()
                setDisplay(x => !x)
            }} className="flex items-center gap-1" href="#outbound">
                <span>{title}</span>
                <i className={`fi size-5 ${display ? 'fi-rs-angle-small-up' : 'fi-rs-angle-small-down'}`}></i>
            </a>
            {display && (
                <div className="fixed top-0 right-0 h-full bg-antiFlashWhite w-4/5 md:absolute md:top-auto md:right-auto z-50 md:h-fit md:w-max rounded-lg shadow-lg p-3 md:mt-2">
                    {/*   flex gap-2  */}
                    <div className="md:flex gap-3 w-full h-full md:w-fit md:h-fit">
                        <div className="w-full md:w-max min-w-48 rounded-lg h-full p-3 flex flex-col justify-center gap-4">
                            <p className="text-sm font-semibold text-gray-700">{title}</p>
                            <ul className="flex flex-col gap-2 min-w-full w-max text-xl md:grow">
                                <li id="country" onTouchEnd={(e) => setSubMenu(e.currentTarget.id)} onMouseEnter={(e) => setSubMenu(e.currentTarget.id)} className={`flex gap-3 items-center ${subMenu === 'country' ? 'bg-gray-200' : ''} hover:bg-gray-200 duration-300 cursor-pointer min-w-52 rounded-md py-1 px-1`}>
                                    <i className="fi fi-rs-flag size-5 box-content text-emerald-800 bg-emerald-800/40 p-2 rounded-lg"></i>
                                    <span className="text-gray-800 text-lg">کشور ها</span>
                                    <i className="fi fi-rs-angle-left size-3 text-xs mr-auto"></i>
                                </li>
                                <li id="category" onTouchEnd={(e) => setSubMenu(e.currentTarget.id)} onMouseEnter={(e) => setSubMenu(e.currentTarget.id)} className={`flex gap-3 items-center ${subMenu === 'category' ? 'bg-gray-200' : ''} hover:bg-gray-200 duration-300 cursor-pointer min-w-52 rounded-md py-1 px-1`}>
                                    <i className="fi fi-rs-category size-5 box-content text-orange-600 bg-orange-600/40 p-2 rounded-lg"></i>
                                    <span className="text-gray-800 text-lg">دسته بندی ها</span>
                                    <i className="fi fi-rs-angle-left size-3 text-xs mr-auto"></i>
                                </li>
                                <Link href={`/tours`} className={`flex gap-3 mt-auto items-center hover:text-gray-900 duration-300 cursor-pointer min-w-52 rounded-md py-1 px-1`}>
                                    <span className="text-gray-800 text-lg">همه تورهای خارجی</span>
                                    <i className="fi fi-rs-arrow-left size-3 text-xs mr-auto"></i>
                                </Link>
                            </ul>
                        </div>
                        {subMenu && (
                            <div className="fixed top-0 right-0 flex flex-col justify-center md:justify-start md:relative z-[101] w-4/5 md:w-max md:min-w-48 bg-stone-50 rounded-lg shadow-lg min-h-full md:min-h-96 p-3">
                                <p className="text-sm font-semibold text-gray-700">{subMenu === 'country' ? 'کشورها' : 'دسته بندی ها'}</p>
                                <SubMenuList active={subMenu === 'country'}>
                                    <li className="flex items-center">
                                        <Image className="rounded-md size-8" alt="" src={`/flags/1x1/de.svg`} height={40} width={40} />
                                        <Link href={`/tours?countries[]=DE`}>آلمان</Link>
                                    </li>
                                    <li className="flex items-center">
                                        <Image className="rounded-md size-8" alt="" src={`/flags/1x1/it.svg`} height={40} width={40} />
                                        <Link href={`/tours?countries[]=IT`}>ایتالیا</Link>
                                    </li>
                                    <li className="flex items-center">
                                        <Image className="rounded-md size-8" alt="" src={`/flags/1x1/fr.svg`} height={40} width={40} />
                                        <Link href={`/tours?countries[]=FR`}>فرانسه</Link>
                                    </li>
                                    <li className="flex items-center">
                                        <Image className="rounded-md size-8" alt="" src={`/flags/1x1/tr.svg`} height={40} width={40} />
                                        <Link href={`/tours?countries[]=TR`}>ترکیه</Link>
                                    </li>
                                    <li className="flex items-center">
                                        <Image className="rounded-md size-8" alt="" src={`/flags/1x1/th.svg`} height={40} width={40} />
                                        <Link href={`/tours?countries[]=TH`}>تایلند</Link>
                                    </li>
                                </SubMenuList>
                                <SubMenuList active={subMenu === 'category'}>
                                    <li className="flex items-center">
                                        <Image className="rounded-full size-8" alt="" src={`/images/categories/forest.svg`} height={40} width={40} />
                                        <Link href={`/tours`}>جنگل و بافت طبیعی</Link>
                                    </li>
                                    <li className="flex items-center">
                                        <Image className="rounded-full size-8" alt="" src={`/images/categories/desert.svg`} height={40} width={40} />
                                        <Link href={`/tours`}>صحرایی</Link>
                                    </li>
                                    <li className="flex items-center">
                                        <Image className="rounded-full size-8" alt="" src={`/images/categories/mountain.svg`} height={40} width={40} />
                                        <Link href={`/tours`}>کوهستانی</Link>
                                    </li>
                                    <li className="flex items-center">
                                        <Image className="rounded-full size-8" alt="" src={`/images/categories/beach.svg`} height={40} width={40} />
                                        <Link href={`/tours`}>ساحلی</Link>
                                    </li>
                                    <li className="flex items-center">
                                        <Image className="rounded-full size-8" alt="" src={`/images/categories/city.svg`} height={40} width={40} />
                                        <Link href={`/tours`}>شهری</Link>
                                    </li>
                                </SubMenuList>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </li>
    )
}