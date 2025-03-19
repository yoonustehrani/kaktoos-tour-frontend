'use client';

import { usePathname } from "next/navigation";
import { useRouter } from 'nextjs-toploader/app';

export default function FilterHead()
{
    const pathname = usePathname();
    const { replace } = useRouter();
    return (
        <section className="flex justify-between items-center">
            <h5 className="text-xl font-bold">فیلتر های جستجو</h5>
            <button onClick={() => {
                replace(pathname)
            }} className="text-sm">بازنشانی</button>
        </section>
    )
}