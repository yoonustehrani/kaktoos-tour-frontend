'use client';

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";

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


export default function HasSubMenu({ title }: Props) {
    const [display, setDisplay] = useState(false);
    const [subMenu, setSubMenu] = useState<"country" | "category">("country")
    return (
        <li className="relative">
            <a onClick={(e) => {
                e.preventDefault()
                setDisplay(x => !x)
            }} className="flex items-center gap-1" href="#outbound">
                <span>{title}</span>
                <i className={`fi size-5 ${display ? 'fi-rs-angle-small-up' : 'fi-rs-angle-small-down'}`}></i>
            </a>
            {display && (
                <div className="absolute z-50 bg-white rounded-md shadow-sm p-4 mt-2 flex gap-2 h-fit w-max">
                    <ul className="flex flex-col gap-2 w-max bg-gray-100 rounded-md">
                        <SubHeader handleClick={() => setSubMenu("country")} active={subMenu === "country"}>
                            <i className="fi ml-2 fi-rs-flag"></i>
                            کشور ها
                        </SubHeader>
                        <SubHeader handleClick={() => setSubMenu("category")} active={subMenu === "category"}>
                            <i className="fi ml-2 fi-rs-category"></i>
                            دسته بندی ها
                        </SubHeader>
                    </ul>
                    <div className="grow">
                        <ul className="w-fit grid grid-cols-2 gap-4">
                            {subMenu === 'country' && (
                                <>
                                    <li className="flex items-center">
                                        <Image className="rounded-full size-8" alt="" src={`/flags/1x1/de.svg`} height={40} width={40} />
                                        <Link href={`/tours?countries[]=DE`}>آلمان</Link>
                                    </li>
                                    <li className="flex items-center">
                                        <Image className="rounded-full size-8" alt="" src={`/flags/1x1/it.svg`} height={40} width={40} />
                                        <Link href={`/tours?countries[]=IT`}>ایتالیا</Link>
                                    </li>
                                    <li className="flex items-center">
                                        <Image className="rounded-full size-8" alt="" src={`/flags/1x1/fr.svg`} height={40} width={40} />
                                        <Link href={`/tours?countries[]=FR`}>فرانسه</Link>
                                    </li>
                                    <li className="flex items-center">
                                        <Image className="rounded-full size-8" alt="" src={`/flags/1x1/tr.svg`} height={40} width={40} />
                                        <Link href={`/tours?countries[]=TR`}>ترکیه</Link>
                                    </li>
                                    <li className="flex items-center">
                                        <Image className="rounded-full size-8" alt="" src={`/flags/1x1/th.svg`} height={40} width={40} />
                                        <Link href={`/tours?countries[]=TH`}>تایلند</Link>
                                    </li>
                                </>
                            )}
                            {subMenu === 'category' && (
                                <>
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
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </li>
    )
}