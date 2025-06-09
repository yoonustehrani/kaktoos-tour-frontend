'use client'

import { submitContactForm } from "@/app/lib/actions"
import { useActionState, useId } from "react"

function ErrorList({errors}: {errors: string[]}) {
    return (
        <ul className="w-full flex flex-col gap-1 text-sm mt-2 px-2 text-red-500">
            {errors.map((e) => (
                <li key={useId()}>{e}</li>
            ))}
        </ul>
    )
}

export default function ContactForm() {
    const [formState, action, isPending] = useActionState(submitContactForm, undefined)

    function hasErrors(key: string) {
        if (formState && formState.success === false && (formState.errors?.[key] ?? []).length > 0) {
            return true
        }
        return false;
    }

    function getErrors(key: string) {
        return (formState?.success === false && formState.errors?.[key]) || []
    }

    return (
        <form action={action} className="grid grid-cols-2 gap-4 bg-white p-6 rounded-2xl">
            <div className="col-span-full mb-6">
                <h4 className="text-3xl font-bold">فرم درخواست <span className="text-websiteOrange">تماس</span></h4>
                <p className="text-sm text-gray-700 mt-3 w-4/5 text-justify">با پر کردن فرم زیر کارشناسان ما با شما تماس خواهند گرفت تا شمارا راهنمایی کنند.</p>
            </div>
            {formState && formState.message && (
                <div className={`col-span-full rounded-md p-3 text-sm ${formState.success ? 'bg-green-300 text-green-800' : 'bg-red-300 text-red-800'}`}>
                    {formState.message}
                </div>
            )}
            <div className="relative flex flex-col">
                <div className="size-6 absolute top-2 left-3 text-gray-400">
                    <i className="fi fi-rs-user text-2xl"></i>
                </div>
                <input aria-invalid={hasErrors('fullname')} name="fullname" type="text" placeholder="نام و نام خانوادگی *" className="form-input w-full pl-10 pr-3" required />
                {hasErrors('fullname') && <ErrorList errors={getErrors('fullname')}/>}
            </div>
            <div className="relative flex flex-col">
                <div className="size-6 absolute top-2 left-3 text-gray-400">
                    <i className="fi fi-rs-phone-flip text-2xl"></i>
                </div>
                <input aria-invalid={hasErrors('phone')} name="phone" type="text" placeholder="شماره تلفن *" className="form-input w-full pl-10 pr-3" required />
                {hasErrors('phone') && <ErrorList errors={getErrors('phone')}/>}
            </div>
            <div className="col-span-full relative">
                <div className="size-6 absolute left-3 top-3 text-gray-400">
                    <i className="fi fi-rs-comment text-2xl"></i>
                </div>
                <textarea aria-invalid={hasErrors('text')} name="text" placeholder="سوال یا توضیحات *" rows={6} className="form-input w-full pl-10 pr-3 resize-none" required></textarea>
                {hasErrors('text') && <ErrorList errors={getErrors('text')}/>}
            </div>
            <div className="col-span-full flex justify-center mt-6">
                <button type="submit" disabled={isPending} className="bg-websiteOrange text-white px-3 py-2 rounded-full flex justify-between items-center gap-3"> {/** min-w-44 md:w-auto justify-between md:justify-start */}
                    <span className="font-bold">ارسال درخواست</span>
                    <span className="fi fi-rs-paper-plane w-8 h-8 bg-black/10 rounded-full shadow-inner shadow-black/20"></span>
                </button>
            </div>
        </form>
    )
}