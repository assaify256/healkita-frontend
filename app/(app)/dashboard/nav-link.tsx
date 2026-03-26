"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";

interface NavLinkProps {
    href: `/${string}`;
    icon: React.ReactNode;
    text: string;
    isActive: boolean;
}

export default function NavLink({
    href = "/",
    icon = <></>,
    text = "Link",
}: NavLinkProps) {
    const path = usePathname();
    console.log(href, path);

    const checkPathIsMain = href === "/dashboard";
    const checkPathIsHref = path === href ? styles["active"] : undefined;
    const checkPathIncludesHref =
        path.includes(href)
            ? styles["active"]
            : undefined;
    return (
        <li>
            <Link
                href={href}
                className={checkPathIsMain? checkPathIsHref: checkPathIncludesHref}
            >
                {icon}
                {text}
            </Link>
        </li>
    );
}
