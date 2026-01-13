import Image from "next/image";
import {Inter} from "next/font/google";
import Link from "next/link";

import logo from "@/public/logo.png";


const inter = Inter({subsets: ["latin"]})

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={inter.className}>
                <header style={{display: "flex", flexDirection: "row"}}>
                    <Image src={logo} height="72" width="72" alt="App Logo"/>
                    <h1>Healkita</h1>
                    <Link href="/sign-up">Get Started</Link>
                </header>
                {children}
                <footer>
                    <h1>Made by Assaifydeveloper</h1>
                </footer>
            </body>
        </html>
    );
}
