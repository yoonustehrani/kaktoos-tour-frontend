export default function Hexagon({
    iconClass,
    size,
    className,
    label,
    labelClassName,
    ...props
}: {
    iconClass: string
    size: 0 | 1 | 2
    className: string
    label: string
    labelClassName: string
} & React.ComponentPropsWithoutRef<"div">)
{
    const attrs = [
        ['h-[4rem]', 'w-[6rem]', 'rounded-xl before:rounded-xl after:rounded-xl text-lg'],
        ['h-[5rem]', 'w-[7.5rem]', 'rounded-xl before:rounded-xl after:rounded-xl text-xl'],
        ['h-[6rem]', 'w-[9rem]', 'rounded-2xl before:rounded-2xl after:rounded-2xl text-2xl']
    ][size].join(' ');

    return (
        <div {...props} className={`${className} ${attrs} hexagon relative flex items-center justify-center cursor-pointer`}>
            <span className={`${['text-xl', 'text-3xl', 'text-4xl'][size]} duration-300 rounded-full h-full w-auto aspect-square z-10 block relative ${iconClass}`}></span>
            <span className={`${size > 1 ? 'py-1' : 'py-0'} duration-100 absolute z-20 block w-[130%] -bottom-4 rounded-md shadow-md px-2 text-center ${labelClassName}`}>{label}</span>
        </div>
    )
}