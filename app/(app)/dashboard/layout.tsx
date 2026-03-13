import { Poppins } from "next/font/google";
import styles from "./styles.module.scss";
import "@/app/globals.scss";
import Link from "next/link";
import { IoHome, IoStatsChart } from "react-icons/io5";
import AuthProvider from "@/components/authProvider";
import { TbReport } from "react-icons/tb";
import { FaCirclePlus } from "react-icons/fa6";
import Image from "next/image";
import applogo from "@/public/logo.png";

interface LayoutPropsType {
    children: React.ReactNode;
}

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default function Layout({ children }: LayoutPropsType) {
    return (
        <html>
            <body className={`${poppins.className} ${styles["body"]}`}>
                <AuthProvider>
                    <nav className={styles["nav"]}>
                        <section className={styles["logo-container"]}>
                            <div className={styles["inner"]}>
                                <Image
                                    className={styles["app-logo"]}
                                    alt="app logo"
                                    src={applogo}
                                    height="64"
                                />
                                <div className={styles["title"]}>
                                    <h1>Healkita</h1>
                                    <p>Health Tracker App</p>
                                </div>
                            </div>
                            <p className={styles["developer"]}>
                                by Assaifydeveloper
                            </p>
                        </section>
                        <ul>
                            <li>
                                <Link
                                    href="/dashboard/"
                                    className={styles["active"]}
                                >
                                    <IoHome className={styles["icon"]} />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/stats">
                                    <IoStatsChart className={styles["icon"]} />
                                    Stats
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/analysis">
                                    <TbReport className={styles["icon"]} />
                                    Analysis
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/input">
                                    <FaCirclePlus className={styles["icon"]} />
                                    Input
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles["page"]}>
                        <header className={styles["header"]}>Header</header>
                        <main className={styles["main"]}>Main {children}</main>
                        <footer className={styles["footer"]}>Footer</footer>
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
}
