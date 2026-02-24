//dependencies
"use client"
import { Inter } from "next/font/google";

//styles 

import "@/app/globals.scss"

const inter = Inter({subsets: ["latin"]});

interface LayoutProps{
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <html>
            <body className={`${inter.className}`}>{children}</body>
        </html>
    );
}
