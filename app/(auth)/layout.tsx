//dependencies

import { Inter } from "next/font/google";

//styles 

import "@/app/globals.scss"

const inter = Inter({subsets: ["latin"]});

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={`${inter.className}`}>{children}</body>
        </html>
    );
}
