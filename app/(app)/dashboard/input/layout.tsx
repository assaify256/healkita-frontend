import Link from "next/link";
import styles from "./styles.module.scss";

export default function Layout({ children }) {
    return (
        <main className={styles["input-main"]}>
            <h1>Add Health Data</h1>
            <p>Track your daily health activities and measurement</p>
            <div className={styles["input-tab"]}>
                <div>
                    <p>
                        <Link href="/dashboard/input/exercise">Exercise</Link>
                    </p>
                </div>
                <div>
                    <p>
                        <Link href="/dashboard/input/medicine">Medicine</Link>
                    </p>
                </div>
                <div>
                    <p><Link href="/dashboard/input/body-data">Body Data</Link></p>
                </div>
                <div>
                    <p><Link href="/dashboard/input/meal">Meals</Link></p>
                </div>
                <div>
                    <p><Link href="/dashboard/input/drink">Drinks</Link></p>
                </div>
            </div>
            <div className={styles["form-wrapper"]}>{children}</div>
        </main>
    );
}
