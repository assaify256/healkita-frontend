// modules
import Image from "next/image";
import {Poppins} from "next/font/google";
import Link from "next/link";

//files

import logo from "@/public/logo.png";

//styles
import styles from "./layout.module.scss";
import "@/app/globals.scss";


const poppins = Poppins({subsets: ["latin"], weight: "500"})

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={poppins.className}>
                <header className={styles["header"]}>
                    <Image src={logo} height="48" width="48" alt="App Logo"/>
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
