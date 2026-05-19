import { poppins, nunito } from '@/app/layout';
import { BookOpen, LogoFacebook as Facebook, Envelope as Mail, MapPin, LogoGithub as Github, Twitter } from '@gravity-ui/icons';
import Link from 'next/link';
import BookLogo from "@/app/assets/logo.png"
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white  ${poppins.className}`}>
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className=" p-2 rounded-xl">
                                <Image src={BookLogo} alt={"Book Logo"} height="50" width="50" />
                            </div>
                            <span className={`${nunito.className} text-xl font-bold`}>
                              <span className='text-blue-400 text-2xl font-bold'>Idea</span>  Vault </span>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            A community vault for startup ideas. Share, refine, and validate concepts with builders worldwide.</p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </Link>

                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
                                aria-label="GitHub"
                            >
                                <Github className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className={`${nunito.className} text-lg font-semibold mb-6 text-blue-400`}>Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/all-book" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                    All Books
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile" className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="/borrowed" className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                    My Borrowed Books
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className={`${nunito.className} text-lg font-semibold mb-6 text-blue-400`}>Categories</h4>
                        <ul className="space-y-3">
                            <li>
                                <span className="text-slate-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                    Fiction & Literature
                                </span>
                            </li>
                            <li>
                                <span className="text-slate-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                    Science & Technology
                                </span>
                            </li>
                            <li>
                                <span className="text-slate-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                    History & Biography
                                </span>
                            </li>
                            <li>
                                <span className="text-slate-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                                    Self-Help & Wellness
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h4 className={`${nunito.className} text-lg font-semibold mb-6 text-blue-400`}>Stay Connected</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-slate-300 text-sm">ajonymia321@gmail.com</p>
                                    <p className="text-slate-400 text-xs">We reply within 24 hours</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-slate-300 text-sm">Narsingdi, Dhaka, Bangladesh</p>
                                    <p className="text-slate-400 text-xs">Reading Room District</p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup
                        <div className="mt-6">
                            <p className="text-slate-300 text-sm mb-3">Get weekly reading recommendations</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#df8620] transition-colors"
                                />
                                <button className="px-4 py-2 bg-gradient-to-r from-[#df8620] to-[#fe9a00] text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
                                    Join
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-sm">
                            © {new Date().getFullYear()} Lumen Library. Crafted with ❤️ for book lovers everywhere.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-slate-400">
                            <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
                            <span>All rights reserved by <span className='text-blue-500 font-bold '> Jony Mia</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;