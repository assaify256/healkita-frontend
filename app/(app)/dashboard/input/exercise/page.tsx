"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import { MdOutlineSportsHandball } from "react-icons/md";

export default function Page() {
    const [activityType, setActivityType] = useState("");
    return (
        <div className={styles["form-main"]}>
            <div className={styles["title-container"]}>
                <MdOutlineSportsHandball className={styles["title-icon"]} />
                <h2>Exercise</h2>
            </div>

            <section className={styles["exercise-type"]}>
                <label htmlFor="exercise-type">Select Exercise Type</label>
                <select
                    name="exercise-type"
                    onChange={(event) => setActivityType(event.target.value)}
                >
                    <option value="">Select</option>
                    <option value="walk">Walk, Run, or Jog</option>
                    <option value="other">Other Exercise</option>
                </select>
            </section>
            {activityType && <hr/>}
            {activityType === "walk" && <WalkForm />}
            {activityType === "other" && <ExerciseForm />}
        </div>
    );
}

const WalkForm = () => {
    return (
        <form className={styles["walk-form"]}>
            <section className={styles["step"]}>
                <label>Steps</label>
                <input type="number"/>
            </section>
            <section className={styles["time"]}>
                <label>Time (Minutes)</label>
                <input type="number"/>
            </section>
            <section className={styles["intensity"]}>
                <label>Intensity</label>
            </section>
            <section className={styles["heart"]}>
                <label>Heart Rate</label>
                <input type="number"/>
            </section>
            <section className={styles["note"]}>
                <label>Note</label>
            </section>
            <button className={styles["submit"]} type="submit">Submit</button>
        </form>
    );
};

const ExerciseForm = () => {
    return (
        <form>
            exercise
            <h2>Exercise</h2>
            <label>Exercise Type</label>
            <label>Intensity</label>
            <label>Time (minutes)</label>
            <label>Note</label>
            <label>Heart Rate</label>
            <button type="submit">Submit</button>
        </form>
    );
};
