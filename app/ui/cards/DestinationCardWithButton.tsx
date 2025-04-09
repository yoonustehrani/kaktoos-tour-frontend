import Image from "next/image";
import Link from "next/link";

type Props = {
    name_fa: string;
    image: string;
    tours_count: number;
    country_code: string;
    id: number
}

export default function DestinationCardWithButton({name_fa, image, tours_count, country_code}: Props)
{
    return (
        <div className="h-auto rounded-3xl relative">
            {/*  */}
            <Image className="align-middle rounded-3xl object-cover w-full aspect-[5/6]" src={`/images/cards/${image}`} alt="" width={300} height={400}/>
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-black/30 text-emerald-950 rounded-3xl">
                <Link href={`/tours`} className="absolute z-20 top-6 right-6 px-3 py-1 text-lg flex items-center gap-2 bg-white/80 hover:bg-white rounded-full">
                    <i className="fi fi-rs-marker h-5"></i>
                    <span>تور {name_fa}</span>
                </Link>
            </div>
            <span style={{ 
                boxShadow: '-4px 4px 0px 3px #0C3923'
             }} className="z-20 absolute bottom-14 -left-0 h-6 w-4 rounded-bl-full bg-transparent">
            </span>
            <div className="z-30 absolute bottom-0 -left-0 h-14 w-20 rounded-tr-full bg-websiteGreen flex items-end justify-center pr-3">
                <Link href={`/tours`} className="p-2 rounded-full bg-transparent border-2 border-gray-100 flex items-center justify-center">
                    <i className="fi fi-rs-arrow-left text-2xl h-6 text-gray-100"></i>
                </Link>
            </div>
            <span style={{ 
                boxShadow: '-5px 6px 1px 0px #0C3923'
             }} className="z-20 absolute -bottom-0 left-20 -ml-[5px] h-7 w-6 rounded-bl-full">
                
            </span>
        </div>
    )
}