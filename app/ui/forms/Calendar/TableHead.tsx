const weekDays = [
    {
        index: 1,
        name: 'شنبه',
        short_name: 'ش',
    },
    {
        index: 2,
        name: 'یکشنبه',
        short_name: 'ی',
    },
    {
        index: 3,
        name: 'دوشنبه',
        short_name: 'د',
    },
    {
        index: 4,
        name: 'سه‌شنبه',
        short_name: 'س',
    },
    {
        index: 5,
        name: 'چهارشنبه',
        short_name: 'چ',
    },
    {
        index: 6,
        name: 'پنجشنبه',
        short_name: 'پ',
    },
    {
        index: 7,
        name: 'جمعه',
        short_name: 'ج',
    },
]

export default function TableHead()
{
    return (
        <thead>
            <tr>
                {weekDays.map(day => (
                    <th key={day.index}>
                        <div className="w-full flex justify-center">
                            <span className="text-base font-medium text-center text-gray-800">{day.short_name}</span>
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    )
}