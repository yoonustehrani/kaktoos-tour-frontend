import Image from "next/image";

export default function Logo() {
    const path = "/images/logo";
    return (
        <picture className="h-full w-auto">
          {/* Dark mode image */}
          <source
            media="(prefers-color-scheme: dark)"
            srcSet={`
                ${path}/logo-white-400.webp 400w,
                ${path}/logo-white-200.webp 200w,
                ${path}/logo-white-100.webp 100w    
            `}
            sizes="(max-width: 600px) 100px, (max-width: 1600px) 200px, 400px"
          />
          {/* Light mode image */}
          <source
            media="(prefers-color-scheme: light)"
            srcSet={`
                ${path}/logo-green-400.webp 400w,
                ${path}/logo-green-200.webp 200w,
                ${path}/logo-green-100.webp 100w                
            `}
            sizes="(max-width: 600px) 100px, (max-width: 1600px) 200px, 400px"
          />
          {/* Fallback image */}
          <Image
            src={`${path}/logo-green-400.webp`} // Default light mode image
            alt="Kaktoos Seir logo"
            width={400}
            height={400}
            className="h-full w-auto"
            priority
          />
        </picture>
    );
}