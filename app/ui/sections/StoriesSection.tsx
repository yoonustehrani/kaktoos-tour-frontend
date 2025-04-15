'use client';

import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import ModalForm from "../forms/NewTourSearchForm/components/ModalForm";
import Modal from "../Modal";
import './stories.css';
import Link from "next/link";


type Story = {
    id: number;
    image: string;
    title: string;
    story: string;
}

function Story({story, activate}: {story: Story, activate: (story: Story) => void}) {
    return (
        <li className="flex flex-col items-center space-y-2 relative" onClick={() => activate(story)}>
            <div className="bg-gradient-to-tr from-yellow-500 to-pink-600 rounded-full p-1">
                <div className="block bg-white p-1 rounded-full transform transition hover:rotate-12 duration-300">
                    <Image loading="lazy" className="size-20 rounded-full" width={100} height={100} src={`/images/stories/${story.image}`}  alt="image" />
                </div>
            </div>
            <p className="bg-white/85 border border-black/10 px-2 rounded-full absolute -bottom-2 text-sm">{story.title}</p>
        </li>
    )
}

function ProgressBar({seconds, id}: {seconds: number, id: string|number }) {
    const [progress, setProgress] = useState<number>(0)

    useEffect(() => {
        setProgress(0)
        let step = 1;
        const interval = setInterval(() => {
            setProgress(0.5 * step)
            step++;
        }, (seconds * 1000) / 200);

        return () => clearInterval(interval)
    }, [id])

    return (
        <progress key={id} className="w-full rounded-full h-[6px]" color="#ffffff" max="100" value={progress}>{progress}%</progress>
    )
}


const mock_stories: Story[] = [
    {
        id: 1,
        image: 'shiraz.png',
        title: 'تور شیراز',
        story: 's-shiraz.jpg',
    },
    {
        id: 2,
        image: 'kish.png',
        story: 's-kish.jpg',
        title: 'تور کیش'
    },
    {
        id: 3,
        image: 'kish2.png',
        story: 's-kish-2.jpg',
        title: 'تور کیش ۲'
    },
    {
        id: 4,
        image: 'istanbul.png',
        story: 's-istanbul.jpg',
        title: 'تور استانبول'
    },
    {
        id: 5,
        image: 'oman.png',
        story: 's-oman.jpg',
        title: 'تور عمان'
    },
    {
        id: 6,
        image: 'india.png',
        story: 's-india.jpg',
        title: 'تور هند'
    }
]

const seconds = 3;

export default function StoriesSection()
{
    // const displayStory = useState<boolean>(false)
    const [activeStory, setActiveStory] = useState<Story>()
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (activeStory) {
            modalRef.current?.showModal()
            let tout = setTimeout(() => {
                let i = mock_stories.findIndex(x => x.id === activeStory.id)
                modalRef.current?.close()
                if (typeof (mock_stories[i + 1]) === 'undefined') {
                    return;
                }
                setActiveStory(mock_stories[i + 1])
                modalRef.current?.showModal()
            }, seconds * 1000 + 400);
            return () => clearTimeout(tout)
        }
    }, [activeStory])

    return (
        <section className="w-4/5 bg-gray-100 border border-black/10 shadow-lg rounded-full -mt-14 px-8 pt-2 pb-5 z-20">
            <ul className="md:flex items-center justify-center gap-4">
                {mock_stories.map((props, i) => (
                    <Story activate={story => setActiveStory(story)} story={props} key={i}/>
                ))}
            </ul>
            <Modal ref={modalRef} handleClose={() => {
                setTimeout(() => {
                    if (! modalRef.current?.open) {
                        setActiveStory(undefined)
                    }
                }, 500);
            }}>
                <div className='w-full relative max-w-[24rem] aspect-[9/16] bg-transparent overflow-hidden dark:bg-darkBlue-oxford border-2 border-black/10 shadow-md dark:text-antiFlashWhite rounded-3xl flex flex-col justify-between'>
                    {activeStory && (
                        <>
                            <div className="py-1 px-3 absolute w-full">
                                <ProgressBar id={activeStory.id} seconds={seconds}/>
                            </div>
                            <img className="h-full w-full" src={`/images/stories/${activeStory.story}`}/>
                            <div className="h-16 absolute bottom-0 w-full bg-black/60 flex items-center justify-center gap-4">
                                <Link href={'/tours'} className="bg-websiteOrange text-white dark:bg-darkBlue-marian-light pl-3 pr-1 py-1 rounded-full flex items-center gap-2">
                                    <span className="fi fi-rs-link w-8 h-8 bg-black/10 rounded-full shadow-inner shadow-black/20"></span>
                                    <span>صفحه تـــور</span>
                                </Link>
                                <Link href={'/contact'} className="bg-[#61BC67] text-white pl-3 pr-1 py-1 rounded-full flex items-center gap-2">
                                    <span className="fi fi-rs-phone-flip w-8 h-8 bg-black/10 rounded-full shadow-inner shadow-black/20"></span>
                                    <span>تماس و رزرو</span>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </Modal>
        </section>
    )
}