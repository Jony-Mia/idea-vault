"use client";
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import Link from "next/link";
// import { Bars, BookOpen, Person, ArrowRightFromSquare } from '@gravity-ui/icons';
// import { authClient, useSession } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";
import { nunito } from "@/app/layout";
import BookLogo from "@/app/assets/logo.png"
import Image from "next/image";
const Navbar = () => {
    // const { data } = useSession();
    // const router = useRouter();
    const path = usePathname();

    // const userInitials = data?.user?.name
    //     ? data.user.name
    //           .split(' ')
    //           .map((part) => part[0])
    //           .join('')
    //           .slice(0, 2)
    //           .toUpperCase()
    //     : 'Name';

    async function logout() {
        await authClient.signOut();
        router.push("/login");
    }

    return (
        <div>
            {/* Desktop Navbar */}
            <nav className="fixed top-0 py-2 z-40 w-full border-b border-slate-200/50 hidden lg:block bg-white/95 backdrop-blur-lg shadow-sm">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <div className=" p-2 rounded-xl">
                                {/* <BookOpen className="h-6 w-6 text-white" /> */}
                                <Image src={BookLogo} alt={"Book Logo"} height="50" width="50" className="rounded-full" />
                            </div>
                            <span className={`${nunito.className} text-xl font-bold text-slate-900`}><span className="text-blue-400 font-bold">Idea</span> Vault</span>
                        </Link>
                    </div>

                    <ul className="flex items-center gap-8">
                        <li>
                            <Link
                                className={`px-3 py-2 rounded-lg transition-colors ${path === '/'
                                        ? 'text-blue-400 px-4 bg-[#c8eff683] font-semibold'
                                        : 'text-slate-600 hover:text-blue-400 hover:bg-slate-50'
                                    }`}
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`px-3 py-2 rounded-lg transition-colors ${path === '/all-book'
                                         ? 'text-blue-400 px-4 bg-[#c8eff683] font-semibold'
                                        : 'text-slate-600 hover:text-blue-400 hover:bg-slate-50'
                                    }`}
                                href="/all-book"
                            >
                                Ideas
                            </Link>
                        </li>
                        {/* {data?.user && (
                            <li>
                                <Link
                                    className={`px-3 py-2 rounded-lg transition-colors ${
                                        path === '/profile'
                                            ? 'text-[#df8620] bg-[#fff7ed] font-semibold'
                                            : 'text-slate-600 hover:text-[#df8620] hover:bg-slate-50'
                                    }`}
                                    href="/profile"
                                >
                                    Profile
                                </Link>
                            </li>
                        )} */}
                    </ul>

                    <div className="flex items-center gap-4">
                        {/* {data?.user ? (
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#df8620] to-[#fe9a00] text-white font-semibold shadow-md">
                                        {userInitials}
                                    </div>
                                    <div className="hidden md:block">
                                        <p className={`${nunito.className} text-sm font-semibold text-slate-900`}>
                                            {data.user.name}
                                        </p>
                                        <p className="text-xs text-slate-500">{data.user.email}</p>
                                    </div>
                                </div>

                                {/* <Dropdown>
                                    <Dropdown.Trigger> *
                                        <Button variant="ghost" className="p-2">
                                            <Bars className="h-5 w-5" /> 
                                            Bars
                                        </Button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Popover>
                                    
                                    <Dropdown.Menu aria-label="User menu">
                                        <Dropdown.Item key="profile" as={Link} href="/profile">
                                            <div className="flex items-center gap-2">
                                                <Person className="h-4 w-4" />
                                                My Profile
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item key="borrowed" as={Link} href="/borrowed">
                                            <div className="flex items-center gap-2">
                                                <BookOpen className="h-4 w-4" />
                                                My Borrowed Books
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item key="logout" onClick={logout} className="text-red-600">
                                            <div className="flex items-center gap-2">
                                                <ArrowRightFromSquare className="h-4 w-4" />
                                                Sign Out
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                    
                                    </Dropdown.Popover>
                                    </Dropdown>
                            </div>
                        ) : ( */}
                        <div className="flex items-center gap-3">
                            <Link href="/login">
                                <Button variant="ghost" className="font-medium">
                                    Login
                                </Button>
                            </Link>
                            <Link href="/signup">
                                <Button className="bg-blue-400 text-white font-semibold rounded-lg px-6 py-2 hover:shadow-lg transition-all">
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;