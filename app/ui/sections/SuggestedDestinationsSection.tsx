import DestinationCardWithButton from "../cards/DestinationCardWithButton"

const cards = [
    {
        id: 1,
        name_fa: 'آنتالیا',
        image: 'turkey-card.webp', 
        tours_count: 3,
        country_code: 'TR'
    },
    {
        id: 2,
        name_fa: 'پاتایا',
        image: 'thailand-card.webp', 
        tours_count: 3,
        country_code: 'TR'
    },
    {
        id: 3,
        name_fa: 'لندن',
        image: 'england-card.webp', 
        tours_count: 3,
        country_code: 'GB'
    },
    {
        id: 4,
        name_fa: 'رم',
        image: 'italy-card.webp', 
        tours_count: 3,
        country_code: 'IT'
    }
]


export default function SuggestedDestinationsSection()
{
    return (
        <section className="w-full flex flex-col gap-3 items-center justify-center">
            <h3 className="text-white font-bold text-4xl">مقصدهای پرطرفدار</h3>
            <p className="mb-6 text-gray-300">مقصدهای موردعلاقه مسافران کاکتوس</p>
            <ul className="w-full px-2 lg:w-4/5 grid grid-cols-2 lg:grid-cols-4 gap-3">
                {cards.map(c => (
                    <li key={c.id} className="bg-transparent">
                        <DestinationCardWithButton {...c}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}