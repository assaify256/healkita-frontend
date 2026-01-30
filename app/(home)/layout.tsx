// modules
import Image from "next/image";
import {Inter} from "next/font/google";
import Link from "next/link";

//files

import logo from "@/public/logo.png";

//styles
import styles from "./styles.module.scss";
import "../../app/globals.scss";


const inter = Inter({subsets: ["latin"]})

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={inter.className}>
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
