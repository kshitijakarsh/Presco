'use client'

import React from 'react'
import { Logo } from './Logo'
import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const footerLinks = {
    product: [
        { name: 'How it Works', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'FAQ', href: '#' },
    ],
    company: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Store Partner', href: '#' },
        { name: 'Contact', href: '#' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
    ]
}

export const Footer = () => {
    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 pt-24 pb-12">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Logo />
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                            Revolutionizing healthcare access by connecting patients with local pharmacies through a smart, transparent bidding platform.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                                <Twitter className="size-5" />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                                <Github className="size-5" />
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                                <Linkedin className="size-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-zinc-900 mb-6">Product</h4>
                        <ul className="space-y-4">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-zinc-900 mb-6">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-zinc-900 mb-6">Stay Updated</h4>
                        <p className="text-zinc-500 text-sm mb-6">Subscribe to our newsletter for the latest healthcare tips and offers.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="bg-white border border-zinc-200 rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-zinc-900/5 transition-all"
                            />
                            <button className="bg-zinc-900 text-white rounded-xl px-4 py-2 text-sm font-semibold hover:bg-zinc-800 transition-colors">
                                <Mail className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-400 text-xs">
                        © {new Date().getFullYear()} Presco Inc. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        {footerLinks.legal.map((link) => (
                            <Link key={link.name} href={link.href} className="text-zinc-400 hover:text-zinc-900 text-xs transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
