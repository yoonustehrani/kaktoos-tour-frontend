'use client';

export default function GoogleMapPinSection()
{
    return (
        <div className="overflow-hidden border border-gray-300 shadow-md w-full h-[400px] mt-6 md:mt-16">
            <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.1426175076485!2d59.50411928758034!3d36.333093216433966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c8d6563e82d01%3A0xd87929d22ff3d058!2sRazavi%20Khorasan%20Province%2C%20Mashhad%2C%20District%2011%2C%2015%20Daneshjoo%2C%20Arax%2C%20Iran!5e0!3m2!1sen!2sde!4v1744105353477!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}