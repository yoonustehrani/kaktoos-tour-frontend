import { getCategories } from "@/app/lib/api";
import { Category } from "@/app/utils/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CategoriesProps {

}


function CategoryItem({id, slug, title, image_src}: Category) {
    return (
        <Link href={`/tours/categories/${slug}`} className="flex flex-col gap-2 items-center">
            <div className="overflow-hidden flex items-center justify-center rounded-full size-20 md:size-40">
                <img
                    src={image_src ?? ''}
                    className="w-full h-full object-cover"
                    alt="Forest category"
                    width={0}
                    height={0}
                />
            </div>
            <span className="text-white text-sm md:text-xl font-semibold">{title}</span>
        </Link>
    )
}

const CategoriesSection: FC<CategoriesProps> = async () => {
    const categories = await getCategories({
        classification_id: 1
    })
    return (
        <section className="bg-websiteGreen w-full md:px-4 h-fit md:my-10 flex flex-col items-center gap-3 py-8">
            <h3 className="text-white font-bold text-4xl">دسته بندی تورها</h3>
            <p className="md:mb-6 text-gray-300">بر اساس ویژگی ها موردنظر شما برای مقصد تور</p>
            <div className="overflow-x-auto snap-center w-full">
                <div className="py-4 md:px-6 grid grid-flow-col grid-rows-2 gap-x-6 gap-y-3 w-max min-w-full px-4 md:w-4/5 md:flex flex-wrap justify-center md:gap-y-10 md:gap-x-20">
                    {categories.map(c => {
                        return (
                            <CategoryItem key={c.id} {...c}/>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default CategoriesSection;