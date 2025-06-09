'use client';

import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import HasSubMenu from "./HasSubMenu";
import { useRef } from "react";


export default function({
    className = ''
}: {
    className?: string
}) {
    const menuRef = useRef<HTMLUListElement>(null)
    return (
        <nav className={`h-20 px-3 py-2 w-full flex justify-between items-center gap-4`}>
            <Link href="/" className="h-full w-full flex justify-center md:w-fit md:justify-start text-3xl gap-2 items-center font-bold text-emerald-900">
                {/* <Logo />
                        */}
                <Image
                    src={`/images/logo/logo-green-400.webp`} // Default light mode image
                    alt="Kaktoos Seir logo"
                    width={400}
                    height={400}
                    className="h-full w-auto"
                    priority
                />
                <span>کاکتوس سیر</span>
            </Link>
            <ul ref={menuRef} className="hidden top-0 right-0 h-full bg-white md:bg-transparent shadow-lg md:shadow-none rounded-lg p-4 z-[99] min-w-[80%] w-fit md:flex grow gap-4 md:h-full items-center justify-center text-xl font-semibold">
                <HasSubMenu title="تور خارجی"/>
                <li>
                    <Link className="under" href="/">تور داخلی</Link>
                </li>
                <li>
                    <Link className="under" href="https://kaktoosseir.com/mag">مجله توریسم</Link>
                </li>
                <li>
                    <Link className="under" href="/contact">تماس با ما</Link>
                </li>
            </ul>
            <div className="fixed md:hidden bottom-0 left-0 z-[100] w-full h-16 bg-white border-t border-gray-200">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <button onClick={() => {
                        menuRef.current?.classList.toggle('fixed')
                        menuRef.current?.classList.toggle('hidden')
                        menuRef.current?.classList.toggle('flex')
                        menuRef.current?.classList.toggle('flex-col')
                    }} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
                        <svg 
                        className="w-5 h-5 mb-2 text-gray-500 group-hover:text-blue-600"
                        enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m40.421 296.421c-22.289 0-40.421-18.132-40.421-40.421s18.132-40.421 40.421-40.421h431.158c22.289 0 40.421 18.132 40.421 40.421s-18.132 40.421-40.421 40.421z"/><path d="m40.421 107.789c-22.289 0-40.421-18.131-40.421-40.421s18.132-40.421 40.421-40.421h431.158c22.289 0 40.421 18.132 40.421 40.421s-18.132 40.421-40.421 40.421z"/><path d="m40.421 485.053c-22.289 0-40.421-18.132-40.421-40.421s18.132-40.421 40.421-40.421h431.158c22.289 0 40.421 18.132 40.421 40.421s-18.132 40.421-40.421 40.421z"/></g></svg>
                        <span className="text-sm text-gray-500 group-hover:text-blue-600">فهرست</span>
                    </button>
                    <Link href={'/'} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
                        <svg 
                        className="w-5 h-5 mb-2 text-gray-500 group-hover:text-blue-600"
                        viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0"/></svg>
                        <span className="text-sm text-gray-500 group-hover:text-blue-600">خانه</span>
                    </Link>
                    <Link href={'/tours'} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
                        <svg 
                        className="w-5 h-5 mb-2 text-gray-500 group-hover:text-blue-600"
                        clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Icon"><path d="m22.75 13.28c0-1.073-1.009-2.03-2.35-2.03h-9.25c-1.091 0-1.9.798-1.9 1.67v7.16c0 .871.809 1.67 1.9 1.67h9.25c1.341 0 2.35-.958 2.35-2.031z"/><path d="m5.25 8v-4.895c0-.117.032-.225.096-.301.021-.025.043-.054.075-.054h3.158c.032 0 .054.029.075.054.064.076.096.184.096.301v4.895c0 .414.336.75.75.75s.75-.336.75-.75v-4.895c0-1.059-.789-1.855-1.671-1.855h-3.158c-.882 0-1.671.796-1.671 1.855v4.895c0 .414.336.75.75.75s.75-.336.75-.75z"/><path d="m18.75 10.5c0-.966-.783-1.75-1.75-1.75h-2c-.967 0-1.75.784-1.75 1.75v1.5c0 .414.336.75.75.75h4c.414 0 .75-.336.75-.75zm-1.5 0v.75h-2.5v-.75c0-.138.112-.25.25-.25h2c.138 0 .25.112.25.25z"/><path d="m3.25 21v1c0 .414.336.75.75.75s.75-.336.75-.75v-1c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"/><path d="m12.25 21v1c0 .414.336.75.75.75s.75-.336.75-.75v-1c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"/><path d="m18.25 21v1c0 .414.336.75.75.75s.75-.336.75-.75v-1c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"/><path d="m8.898 21.75c-.412-.474-.648-1.068-.648-1.67v-7.16c0-1.359 1.2-2.67 2.9-2.67h1.6v-.65c0-1.3-1.05-2.35-2.35-2.35h-6.8c-1.3 0-2.35 1.05-2.35 2.35v10.25c0 1.049.851 1.9 1.9 1.9z"/></g></svg>
                        <span className="text-sm text-gray-500 group-hover:text-blue-600">تورها</span>
                    </Link>
                    <Link href={'/contact'} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group">
                        <svg 
                            className="w-5 h-5 mb-2 text-gray-500 group-hover:text-blue-600"
                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 401.998 401.998" enableBackground={`new 0 0 401.998 401.998`}
                            xmlSpace="preserve">
                        <g>
                            <path d="M401.129,311.475c-1.137-3.426-8.371-8.473-21.697-15.129c-3.61-2.098-8.754-4.949-15.41-8.566 c-6.662-3.617-12.709-6.95-18.13-9.996c-5.432-3.045-10.521-5.995-15.276-8.846c-0.76-0.571-3.139-2.234-7.136-5 c-4.001-2.758-7.375-4.805-10.14-6.14c-2.759-1.327-5.473-1.995-8.138-1.995c-3.806,0-8.56,2.714-14.268,8.135 c-5.708,5.428-10.944,11.324-15.7,17.706c-4.757,6.379-9.802,12.275-15.126,17.7c-5.332,5.427-9.713,8.138-13.135,8.138 c-1.718,0-3.86-0.479-6.427-1.424c-2.566-0.951-4.518-1.766-5.858-2.423c-1.328-0.671-3.607-1.999-6.845-4.004 c-3.244-1.999-5.048-3.094-5.428-3.285c-26.075-14.469-48.438-31.029-67.093-49.676c-18.649-18.658-35.211-41.019-49.676-67.097 c-0.19-0.381-1.287-2.19-3.284-5.424c-2-3.237-3.333-5.518-3.999-6.854c-0.666-1.331-1.475-3.283-2.425-5.852 s-1.427-4.709-1.427-6.424c0-3.424,2.713-7.804,8.138-13.134c5.424-5.327,11.326-10.373,17.7-15.128 c6.379-4.755,12.275-9.991,17.701-15.699c5.424-5.711,8.136-10.467,8.136-14.273c0-2.663-0.666-5.378-1.997-8.137 c-1.332-2.765-3.378-6.139-6.139-10.138c-2.762-3.997-4.427-6.374-4.999-7.139c-2.852-4.755-5.799-9.846-8.848-15.271 c-3.049-5.424-6.377-11.47-9.995-18.131c-3.615-6.658-6.468-11.799-8.564-15.415C98.986,9.233,93.943,1.997,90.516,0.859 C89.183,0.288,87.183,0,84.521,0c-5.142,0-11.85,0.95-20.129,2.856c-8.282,1.903-14.799,3.899-19.558,5.996 c-9.517,3.995-19.604,15.605-30.264,34.826C4.863,61.566,0.01,79.271,0.01,96.78c0,5.135,0.333,10.131,0.999,14.989 c0.666,4.853,1.856,10.326,3.571,16.418c1.712,6.09,3.093,10.614,4.137,13.56c1.045,2.948,2.996,8.229,5.852,15.845 c2.852,7.614,4.567,12.275,5.138,13.988c6.661,18.654,14.56,35.307,23.695,49.964c15.03,24.362,35.541,49.539,61.521,75.521 c25.981,25.98,51.153,46.49,75.517,61.526c14.655,9.134,31.314,17.032,49.965,23.698c1.714,0.568,6.375,2.279,13.986,5.141 c7.614,2.854,12.897,4.805,15.845,5.852c2.949,1.048,7.474,2.43,13.559,4.145c6.098,1.715,11.566,2.905,16.419,3.576 c4.856,0.657,9.853,0.996,14.989,0.996c17.508,0,35.214-4.856,53.105-14.562c19.219-10.656,30.826-20.745,34.823-30.269 c2.102-4.754,4.093-11.273,5.996-19.555c1.909-8.278,2.857-14.985,2.857-20.126C401.99,314.814,401.703,312.819,401.129,311.475z"/>
                        </g>
                        </svg>
                        <span className="text-sm break-keep text-nowrap text-gray-500 group-hover:text-blue-600">تماس با ما</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}