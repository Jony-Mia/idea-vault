import { poppins, nunito } from '@/app/layout';
import { LogoFacebook as Facebook, Envelope as Mail, MapPin, LogoGithub as Github } from '@gravity-ui/icons';
import Link from 'next/link';
import BookLogo from '@/app/assets/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={`bg-linear-to-br from-slate-900 via-slate-800 to-slate-950 text-white ${poppins.className}`}>
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="rounded-2xl bg-slate-800 p-2 shadow-lg shadow-slate-900/30">
                                <Image src={BookLogo} alt="Idea Vault Logo" height="50" width="50" />
                            </div>
                            <div>
                                <p className={`${nunito.className} text-xl font-bold text-white`}>Idea Vault</p>
                                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Startup idea studio</p>
                            </div>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            A community vault for startup ideas. Share, refine, and validate concepts with builders worldwide.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 hover:bg-blue-500 transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 hover:bg-blue-500 transition-colors duration-300"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className={`${nunito.className} text-lg font-semibold mb-6 text-blue-300`}>Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-400"></span>Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/all-book" className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-400"></span>Browse ideas
                                </Link>
                            </li>
                            <li>
                                <Link href="/addIdea" className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-400"></span>Share an idea
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-400"></span>About
                                </Link>
                            </li>
                            <li>
                                <Link href="/resources" className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-400"></span>Resources
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-400"></span>Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile" className="text-slate-300 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-blue-400"></span>My profile
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={`${nunito.className} text-lg font-semibold mb-6 text-blue-300`}>Popular Topics</h4>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-blue-400"></span>AI & automation
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-blue-400"></span>Sustainability
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-blue-400"></span>Health tech
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-blue-400"></span>Community apps
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={`${nunito.className} text-lg font-semibold mb-6 text-blue-300`}>Stay Connected</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-slate-300 text-sm">ajonymia321@gmail.com</p>
                                    <p className="text-slate-400 text-xs">We reply within 24 hours</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
                                <div>
                                    <p className="text-slate-300 text-sm">Narsingdi, Dhaka, Bangladesh</p>
                                    <p className="text-slate-400 text-xs">Reading Room District</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-700">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <p className="text-slate-400 text-sm">
                            © {new Date().getFullYear()} Idea Vault. Crafted with ❤️ for early-stage founders.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                            <Link href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-blue-300 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
