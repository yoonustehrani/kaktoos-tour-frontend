'use client';

export default function TourDatesCloseButton() {
    return (
        <span onClick={(e) => {
            e.currentTarget.closest('.moveable-button')?.classList.toggle('active')
        }} className="fi fi-rs-cross hover:cursor-pointer p-3"></span>
    )
}