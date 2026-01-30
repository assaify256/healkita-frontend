import HeroImage from "@/public/hero.png";
import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Page() {
    return (
        <main className={styles["main-content"]}>
            <Hero />
            <WhatItIs />
            <Features />
            <Audience />
            <HowItWorks />
            <AboutProject />
            <Footer />
        </main>
    );
}

function Hero() {
    return (
        <section className={styles["hero-section"]}>
            <Image
                alt="a man that is running"
                src={HeroImage}
                className={styles["hero-image"]}
            />
            <div>
                <h2>Track your health. Gently. Consistently.</h2>
                <p>
                    A lightweight web app for logging daily energy, sleep, mood,
                    and habits — designed for clarity, not overload.
                </p>
                <div>
                    <Link href="/sign-up">Get Started</Link>
                </div>
                <small>
                    No wearables required. No social features. Your data stays
                    simple.
                </small>
            </div>
        </section>
    );
}

function WhatItIs() {
    return (
        <section>
            <div>
                <h2>What this app is</h2>
                <ul>
                    <li>A calm, minimal health tracker</li>
                    <li>Focused on trends, not perfection</li>
                    <li>Designed for daily check-ins under 2 minutes</li>
                </ul>
            </div>
            <div>
                <h2>What this app is not</h2>
                <ul>
                    <li>Not a medical device</li>
                    <li>Not a fitness competition</li>
                    <li>Not another noisy dashboard</li>
                </ul>
            </div>
        </section>
    );
}

function Features() {
    return (
        <section>
            <h2>Features</h2>
            <div>
                <Feature
                    title="Daily Check-In"
                    description="Log energy, sleep, mood, and optional discomfort in under two minutes."
                />
                <Feature
                    title="Simple Trends"
                    description="Weekly and monthly summaries that show direction, not pressure."
                />
                <Feature
                    title="Private by Default"
                    description="Session-based auth, no public profiles, demo accounts auto-reset."
                />
            </div>
        </section>
    );
}

function Feature({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <article>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}

function Audience() {
    return (
        <section>
            <h2>Who this is for</h2>
            <p>
                People who feel overwhelmed by complex trackers, neurodivergent
                users who prefer consistency, and anyone wanting a low-pressure
                health log.
            </p>
        </section>
    );
}

function HowItWorks() {
    return (
        <section>
            <h2>How it works</h2>
            <ol>
                <li>Create an account or use demo mode</li>
                <li>Log a short daily check-in</li>
                <li>Review gentle trends over time</li>
            </ol>
        </section>
    );
}

function AboutProject() {
    return (
        <section>
            <h2>About this project</h2>
            <p>
                Built as a portfolio project demonstrating Next.js App Router,
                Express.js API, session-based authentication, and server-side
                authorization.
            </p>
            <div>
                <a href="/demo">Live Demo</a>
                <a href="https://github.com/yourname/health-tracker">GitHub</a>
            </div>
            <small>
                Demo users and data are automatically reset every 7 days.
            </small>
        </section>
    );
}

function Footer() {
    return (
        <footer>
            <small>Healkita Demo Project</small>
        </footer>
    );
}
