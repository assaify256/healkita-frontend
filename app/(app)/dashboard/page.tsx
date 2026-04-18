import AuthProvider from "@/components/authProvider";
import styles from "./styles.module.scss";
import { IoFootsteps } from "react-icons/io5";
import { FaFire, FaPills } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { GiMeal } from "react-icons/gi";

export default function Page() {
    return (
        <div className={styles["home-grids"]}>
            <section className={`${styles["box"]} ${styles["weather"]}`}>
                <h2>Weather</h2>
            </section>
            <section className={`${styles["box"]} ${styles["tips"]}`}>
                <h2>Tips</h2>
            </section>
            <section className={`${styles["box"]} ${styles["todo"]}`}>
                <h2>To Do List</h2>
            </section>
            <section className={`${styles["box"]} ${styles["step"]}`}>
                <h2>
                    <IoFootsteps className={styles["icon"]} />
                    Steps
                </h2>
            </section>
            <section className={`${styles["box"]} ${styles["activity"]}`}>
                <h2>
                    <FaFire className={styles["icon"]} />
                    Activities
                </h2>
            </section>
            <section className={`${styles["box"]} ${styles["drink"]}`}>
                <h2>
                    <IoIosWater className={styles["icon"]} />
                    Hydrations
                </h2>
            </section>
            <section className={`${styles["box"]} ${styles["medication"]}`}>
                <h2>
                    <FaPills className={styles["icon"]} />
                    Medications
                </h2>
            </section>
            <section className={`${styles["box"]} ${styles["nutrition"]}`}>
                <h2>
                    <GiMeal className={styles["icon"]} />
                    Nutritions
                </h2>
            </section>
            <section className={`${styles["box"]} ${styles["composition"]}`}>
                <h2>Body Compositions</h2>
            </section>
            <section className={`${styles["box"]} ${styles["quote"]}`}>
                <h2>Quotes</h2>
            </section>
        </div>
    );
}
