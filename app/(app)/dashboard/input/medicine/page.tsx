"use client";

import { useState } from "react";

export default function Page() {
    const [mode, setMode] = useState("prescription");
    return (
        <div>
            Medicine Page
            <select onChange={(event) => setMode(event.target.value)}>
                <option value="prescription">Enter Prescription</option>
                <option value="consumption">Enter Consumption</option>
            </select>
            {mode === "prescription" ? (
                <PrescriptionForm />
            ) : (
                <ConsumptionForm />
            )}
        </div>
    );
}

const PrescriptionForm = () => {
    return (
        <form>
            <label>Medicine/Supplement Name</label>
            <input />
            <label>Dosage and Unit</label>
            <input type="number" />
            <select>
                <option>mg</option>
                <option>IU</option>
            </select>
            <label>Frequency</label>
            <button type="submit">Submit</button>
        </form>
    );
};

const ConsumptionForm = () => {
    return (
        <form>
            <label>Medicine/Supplement Name</label>
            <select>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option ...</option>
            </select>
            <label>Time Taken</label>
            <input type="time" />
            <button type="submit">Submit</button>
        </form>
    );
};
