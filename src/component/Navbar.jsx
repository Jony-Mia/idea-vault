"use client";
import { useState } from "react";
import { Button, Dropdown } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { nunito } from "@/app/layout";
import BookLogo from "@/app/assets/logo.png";
import ToggleTheme from "./ToggleTheme";
import { ArrowRightFromSquare, Bars, Person } from "@gravity-ui/icons";
import { BookOpen } from "lucide-react";
import Logout from "@/app/lib/Logout";
import { useUser } from "@/context/UserContextProvider";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/ideas", label: "Ideas" },
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
    { href: "/addIdea", label: "Add Idea" },
];

const Navbar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useUser();

    const userInitials = user?.name
        ? user.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()
        : "NA";

    const isActive = (href) => pathname === href;

    return (
        <div suppressHydrationWarning className="relative border-b border-slate-200/70 bg-white/95 backdrop-blur-xl shadow-sm">
            <div className="pointer-events-none absolute right-8 top-1/2 h-32 w-32 -translate-y-1/2 rounded-3xl border border-sky-300/40 bg-sky-400/10 blur-xl animate-float" />
            <div className="pointer-events-none absolute left-6 top-6 h-24 w-24 rounded-3xl border border-violet-300/30 bg-violet-500/10 blur-xl animate-float-slow" />

            <nav className="relative mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4">
                    <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                        <div className="rounded-3xl bg-slate-100 p-2 shadow-sm shadow-slate-200/50 ring-1 ring-slate-200/70">
                            <Image src={BookLogo} alt="Idea Vault Logo" height="48" width="48" className="rounded-full" />
                        </div>
                        <div>
                            <p className={`${nunito.className} text-lg font-semibold text-slate-900`}>Idea Vault</p>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Startup Lab</p>
                        </div>
                    </Link>

                    <div className="flex items-center gap-3">
                        <div className="hidden items-center gap-3 sm:flex">
                            <ToggleTheme />
                            {user ? (
                                <Dropdown>
                                    <Button variant="outline" className="p-2 text-slate-700">
                                        <Bars className="h-5 w-5" />
                                    </Button>
                                    <Dropdown.Popover>
                                        <Dropdown.Menu aria-label="User menu">
                                            <Dropdown.Item key="profile" as={Link} href="/profile">
                                                <div className="flex items-center gap-2">
                                                    <Person className="h-4 w-4" />
                                                    My Profile
                                                </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item key="ideas" as={Link} href="/ideas">
                                                <div className="flex items-center gap-2">
                                                    <BookOpen className="h-4 w-4" />
                                                    Browse ideas
                                                </div>
                                            </Dropdown.Item>
                                            <Logout className="flex items-center gap-2 text-red-500">
                                                <ArrowRightFromSquare className="h-4 w-4 text-red-500" />
                                                <span className="text-red-500">Sign Out</span>
                                            </Logout>
                                        </Dropdown.Menu>
                                    </Dropdown.Popover>
                                </Dropdown>
                            ) : (
                                <div className="hidden items-center gap-3 sm:flex">
                                    <Link href="/login">
                                        <Button variant="outline" className="font-medium text-slate-700">
                                            Login
                                        </Button>
                                    </Link>
                                    <Link href="/signup">
                                        <Button className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600">
                                            Sign Up
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* <ToggleTheme /> */}
                        {/* <Button variant="outline" className="sm:hidden bg-red-400 p-2 text-slate-700" onClick={() => setMenuOpen((open) => !open)}> */}

                        <div className="sm:hidden">
                            <Dropdown className="">
                                <Dropdown.Trigger variant="outline" className="sm:hidden bg-red-400 p-2 text-slate-700">
                                    <Bars className="h-5 w-5" />
                                </Dropdown.Trigger>
                                <Dropdown.Popover>
                                    <Dropdown.Menu aria-label="User menu">
                                        <Dropdown.Item key="profile" as={Link} href="/profile">
                                            <div className="flex items-center gap-2">
                                                <Person className="h-4 w-4" />
                                                My Profile
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item key="ideas" as={Link} href="/ideas">
                                            <div className="flex items-center gap-2">
                                                <BookOpen className="h-4 w-4" />
                                                Browse ideas
                                            </div>
                                        </Dropdown.Item>
                                        <Logout className="flex items-center gap-2 text-red-500">
                                            <ArrowRightFromSquare className="h-4 w-4 text-red-500" />
                                            <span className="text-red-500">Sign Out</span>
                                        </Logout>
                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown>


                        </div>
                        {/* <Bars className="h-5 w-5" /> */}
                        {/* </Button> */}
                    </div>
                </div>

                <div className="hidden w-fit mx-auto items-center justify-center rounded-[28px] border border-slate-200 bg-slate-50 px-4 py-3 shadow-inner shadow-slate-100/80 lg:flex">
                    <ul className="flex flex-wrap items-center justify-center gap-3">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${isActive(item.href)
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/10"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        {user && (
                            <li>
                                <Link
                                    href="/profile"
                                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${isActive("/profile")
                                        ? "bg-orange-100 text-orange-600"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-orange-600"
                                        }`}
                                >
                                    Profile
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                {menuOpen && (
                    <div className="rounded-[32px] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/10 sm:hidden">
                        <ul className="space-y-3">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`block rounded-3xl px-4 py-3 text-sm font-medium transition ${isActive(item.href)
                                            ? "bg-blue-100 text-blue-600"
                                            : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                                            }`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            {user ? (
                                <li>
                                    <Link
                                        href="/profile"
                                        className={`block rounded-3xl px-4 py-3 text-sm font-medium transition ${isActive("/profile")
                                            ? "bg-orange-100 text-orange-600"
                                            : "text-slate-600 hover:bg-slate-100 hover:text-orange-600"
                                            }`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        Profile
                                    </Link>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link href="/login" className="block rounded-3xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setMenuOpen(false)}>
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/signup" className="block rounded-3xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-600" onClick={() => setMenuOpen(false)}>
                                            Sign Up
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
