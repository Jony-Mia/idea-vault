"use client";
import { usePathname } from "next/navigation";

const Path = () => {
    const path = usePathname()
    return path;
};

export default Path;