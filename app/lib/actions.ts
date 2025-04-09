'use server'
import { z } from 'zod';
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const FormSchema = z.object({
    fullname: z.string().min(3, "حداقل ۳ حرف"),
    phone: z.string().length(11, "یازده رقم").regex(/09[0-9]{9}/, "تلفن همراه معتبر"),
    text: z.string().min(5, "حداقل ۵ حرف"),
});

type ReturnType =  
| { success: true; message: string }  // Success case
| { success: false; errors: { [key: string]: string[] | undefined }; message: string };  // Error case

export async function submitContactForm(prevState: string | undefined, formData: FormData): Promise<ReturnType> {
    const validatedFields = FormSchema.safeParse({
        fullname: formData.get('fullname'),
        phone: formData.get('phone'),
        text: formData.get('text'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'خطا در خصوص اطلاعات ورودی در فرم توسط شما',
        };
    }

    return { success: true, message: "پاسخ شما با موفقیت ثبت شد." }
    // try {

    //     // redirect('/contact?form_submitted=true')
    // } catch (error) {

    // }
}