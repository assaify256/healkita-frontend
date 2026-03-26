import { Poppins } from "next/font/google";
import styles from "./styles.module.scss";
import "@/app/globals.scss";
import Link from "next/link";
import { IoGlobeOutline, IoHome, IoStatsChart } from "react-icons/io5";
import AuthProvider from "@/components/authProvider";
import { TbReport } from "react-icons/tb";
import { FaCirclePlus } from "react-icons/fa6";
import Image from "next/image";
import applogo from "@/public/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { PiFileMagnifyingGlassFill } from "react-icons/pi";
import NavLink from "./nav-link";

interface LayoutPropsType {
    children: React.ReactNode;
}

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export default async function Layout({ children, params }: LayoutPropsType) {
    const { tag } = await params;
    console.log(tag);
    return (
        <html>
            <body className={`${poppins.className} ${styles["body"]}`}>
                <SideNav>
                    <ul>
                        <NavLink
                            href="/dashboard"
                            icon={<IoHome className={styles["icon"]} />}
                            text="Dashboard"
                        />
                        <NavLink
                            href="/dashboard/stats"
                            icon={<IoStatsChart className={styles["icon"]} />}
                            text="Stats"
                        />
                        <NavLink
                            href="/dashboard/analysis"
                            icon={
                                <PiFileMagnifyingGlassFill
                                    className={styles["icon"]}
                                />
                            }
                            text="Analysis"
                        />
                        <NavLink
                            href="/dashboard/input/"
                            icon={<FaCirclePlus className={styles["icon"]} />}
                            text="Input"
                        />
                    </ul>
                </SideNav>
                <header className={styles["header"]}>
                    <div className={styles["avatar-wrapper"]}>
                        <FaUserCircle className={styles["avatar"]} />
                    </div>
                    <div>
                        <p>Username</p>
                        <p className={styles["tier"]}>
                            <GoDotFill />
                            Free Tier
                        </p>
                    </div>
                </header>
                <main className={styles["main"]}>{children}</main>
                <footer className={styles["footer"]}>Footer</footer>
            </body>
        </html>
    );
}
interface SideNavProps {
    children: React.ReactNode;
}

function SideNav({ children }: SideNavProps) {
    return (
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
                <p className={styles["developer"]}>by Assaifydeveloper</p>
            </section>
            {children}
        </nav>
    );
}
