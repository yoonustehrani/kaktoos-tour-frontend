import "./globals.css";
import type { Metadata } from "next";
import Footer from "./ui/footer/Footer";
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
	title: {
		template: "%s | Kaktoos Tour",
		default: "Kaktoos Tour"
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fa" dir="rtl" className="w-screen overflow-x-hidden">
			<body
				className={`subpixel-antialiased overflow-x-hidden w-full`}
			>
				<NextTopLoader color="#173F29" />
				{children}
				<Footer />
			</body>
		</html>
	);
}
