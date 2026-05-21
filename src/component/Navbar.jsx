"use client";
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

const navItems = [
    { href: "/", label: "Home" },
    { href: "/all-book", label: "Ideas" },
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
    { href: "/addIdea", label: "Add Idea" },
];

const Navbar = () => {
    const pathname = usePathname();
    const { data } = useSession();
    const user = data?.user;

    const userInitials = user?.name
        ? user.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()
        : "IV";

    const isActive = (href) => pathname === href;

    return (
        <div className="border-b border-slate-200/70 bg-white/95 backdrop-blur-xl shadow-sm">
            <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                    <div className="rounded-2xl bg-slate-100 p-2 shadow-sm shadow-slate-200/50">
                        <Image src={BookLogo} alt="Idea Vault Logo" height="48" width="48" className="rounded-full" />
                    </div>
                    <div>
                        <p className={`${nunito.className} text-lg font-semibold text-slate-900`}>Idea Vault</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Startup idea studio</p>
                    </div>
                </Link>

                <ul className="hidden items-center gap-4 lg:flex">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`rounded-full px-4 py-2 text-sm font-medium transition ${isActive(item.href)
                                    ? "bg-blue-100 text-blue-600"
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

                <div className="flex items-center gap-3">
                    <ToggleTheme />
                    {user ? (
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3 rounded-full bg-linear-to-br from-orange-500 to-yellow-400 px-3 py-2 text-white shadow-md">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/10 text-sm font-semibold">
                                    {userInitials}
                                </span>
                                <div className="hidden sm:block">
                                    <p className="text-sm font-semibold text-slate-900">{user.name}</p>
                                    <p className="text-[11px] text-slate-500">{user.email}</p>
                                </div>
                            </div>

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
                                        <Dropdown.Item key="ideas" as={Link} href="/all-book">
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
            </nav>
        </div>
    );
};

export default Navbar;
