'use client'

import { Card, CardContent, CardHeader } from '../ui/card'
import { ShieldCheck, Zap, Heart, BadgeCheck, FileUp, Check, Clock, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { OrderTrackingParallaxCard } from '../ui/order-tracking-parallax-card'
import { AvatarGroup } from '../ui/avatar-group'

export function Features() {
    return (
        <section id="savings" className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 font-title leading-[0.9]">
                        Why Choose
                        <span className="text-brand font-normal"> Presco?</span>
                    </h2>
                    <p className="text-lg text-zinc-500 max-w-2xl mx-auto font-sans">
                        We are revolutionizing how you buy medicines by bringing the pharmacy to your fingertips.
                    </p>
                </div>

                <div className="mx-auto grid gap-4 lg:grid-cols-5 md:grid-cols-2">
                    {/* Best Price Guarantee */}
                    <Card className="group overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.05)] lg:col-span-3 md:col-span-2 sm:rounded-none lg:rounded-tl-[2.5rem] border-zinc-200/50">
                        <CardHeader className="p-8 md:p-10">
                            <div className="flex items-center gap-2 mb-2">
                                <BadgeCheck className="size-5 text-brand" />
                                <p className="font-black text-2xl text-zinc-900 font-title tracking-tight">Best Price Guarantee</p>
                            </div>
                            <p className="text-zinc-500 mt-3 max-w-sm text-sm font-sans font-medium">
                                Our unique real-time bidding system ensures you get the most competitive prices from verified local pharmacies in your area.
                            </p>
                        </CardHeader>

                        <div className="relative h-fit pl-6 md:pl-8">
                            <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,white_100%)] dark:[background:radial-gradient(75%_95%_at_50%_0%,transparent,hsl(var(--background))_100%)]"></div>

                            {/* Bidding UI Mockup */}
                            <div className="bg-white overflow-hidden rounded-tl-lg border-l border-t p-6 dark:bg-zinc-950 flex flex-col gap-4">
                                <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl border border-zinc-100">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] text-white font-bold">A</div>
                                        <div>
                                            <p className="text-xs font-bold text-zinc-900">Apollo Pharmacy</p>
                                            <p className="text-[10px] text-zinc-400">0.8 km away</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-zinc-900">₹450</p>
                                        <p className="text-[10px] line-through text-red-500">₹520</p>
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    className="flex items-center justify-between p-3 bg-white rounded-xl border border-zinc-100 shadow-sm ring-2 ring-zinc-900/5 scale-105"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] text-white font-bold">M</div>
                                        <div>
                                            <p className="text-xs font-bold text-zinc-900">MedPlus Store</p>
                                            <p className="text-[10px] text-brand tracking-tight font-black uppercase">Cheapest Offer</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-zinc-900">₹390</p>
                                        <div className="bg-brand-light text-brand-dark text-[10px] font-black px-1.5 py-0.5 rounded-md mt-1">SAVE 25%</div>
                                    </div>
                                </motion.div>

                                <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl border border-zinc-100 opacity-50">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] text-white font-bold">W</div>
                                        <div>
                                            <p className="text-xs font-bold text-zinc-900">Wellness Pharmacy</p>
                                            <p className="text-[10px] text-zinc-400">1.5 km away</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-zinc-900">₹420</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl border border-zinc-100 opacity-50">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] text-white font-bold">G</div>
                                        <div>
                                            <p className="text-xs font-bold text-zinc-900">Guardian Health</p>
                                            <p className="text-[10px] text-zinc-400">2.3 km away</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-zinc-900">₹415</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-xl border border-zinc-100 opacity-25">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] text-white font-bold">N</div>
                                        <div>
                                            <p className="text-xs font-bold text-zinc-900">Netmeds Hub</p>
                                            <p className="text-[10px] text-zinc-400">1.2 km away</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-zinc-900">₹405</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Fast Doorstep Delivery */}
                    <Card id="track" className="group overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.05)] lg:col-span-2 md:col-span-1 sm:rounded-none lg:rounded-tr-[2.5rem] border-zinc-200/50 flex flex-col">
                        <div className="p-8 md:p-10">
                            <div className="flex items-center gap-2 mb-4">
                                <Zap className="size-5 text-brand" />
                                <p className="font-black text-2xl text-zinc-900 font-title tracking-tight">Fast Delivery</p>
                            </div>
                            <p className="text-sm text-zinc-500 leading-relaxed font-sans font-medium">
                                Get your medicines delivered within minutes. Track your rider in real-time until they reach your door.
                            </p>
                        </div>

                        <CardContent className="mt-auto flex justify-center">
                            <OrderTrackingParallaxCard
                                orderId="PR-9823"
                                product="Vitality Kit + 3 Meds"
                                status="Out for Delivery"
                                eta="12 mins"
                                className="scale-90 md:scale-100 shadow-none border-0 bg-transparent"
                            />
                        </CardContent>
                    </Card>

                    {/* Patient First Care */}
                    <Card className="group p-8 shadow-[0_0_50px_-12px_rgba(0,0,0,0.05)] lg:col-span-2 md:col-span-1 sm:rounded-none lg:rounded-bl-[2.5rem] md:p-10 border-zinc-200/50 flex flex-col justify-center bg-white overflow-hidden">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Heart className="size-5 text-brand" />
                            <p className="text-center text-2xl font-black text-zinc-900 font-title tracking-tight">Patient First</p>
                        </div>
                        <p className="text-center text-sm text-zinc-500 mb-8 max-w-[200px] mx-auto font-sans font-medium">
                            Join 10,000+ happy patients getting authentic care.
                        </p>

                        <div className="flex justify-center py-4">
                            <AvatarGroup
                                size={48}
                                overlap={16}
                                avatars={[
                                    { src: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=100&h=100", label: "Dr. Sarah J.", alt: "Doctor" },
                                    { src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100&h=100", label: "Dr. Mike R.", alt: "Doctor" },
                                    { src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100", label: "Dr. Anita P.", alt: "Pharmacist" },
                                    { src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=100&h=100", label: "Dr. Kevin L.", alt: "Doctor" },
                                    { src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=100&h=100", label: "Dr. Maria S.", alt: "Doctor" },
                                ]}
                            />
                        </div>

                        <div className="mt-6 flex flex-col items-center gap-2">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg key={i} className="size-3 fill-brand text-brand" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-[10px] font-black text-zinc-900 uppercase tracking-widest">4.9/5 Average Rating</p>
                        </div>
                    </Card>

                    {/* Verified Pharmacy Network */}
                    <Card id="pharmacies" className="group relative shadow-[0_0_50px_-12px_rgba(0,0,0,0.05)] lg:col-span-3 md:col-span-2 sm:rounded-none lg:rounded-br-[2.5rem] border-zinc-200/50 bg-white">
                        <CardHeader className="p-8 md:p-10 pb-0 md:pb-0">
                            <div className="flex items-center gap-2 mb-2">
                                <ShieldCheck className="size-5 text-brand" />
                                <p className="font-black text-2xl text-zinc-900 font-title tracking-tight">Verified Network</p>
                            </div>
                            <p className="text-zinc-500 mt-2 max-w-sm text-sm font-sans font-medium">
                                We partner with licensed local pharmacies to ensure every medicine is authentic and handled with care.
                            </p>
                        </CardHeader>
                        <CardContent className="relative h-fit p-6 md:p-8">
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { name: "Apollo Verified", dist: "0.8km" },
                                    { name: "MedPlus Pro", dist: "1.2km" },
                                    { name: "Wellness Point", dist: "2.1km" },
                                    { name: "City Pharma", dist: "0.5km" }
                                ].map((pharma, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-zinc-50 rounded-2xl border border-zinc-100 transition-colors group-hover:bg-zinc-100/50">
                                        <div className="size-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center">
                                            <ShieldCheck className="size-4 text-zinc-900" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-zinc-900">{pharma.name}</p>
                                            <p className="text-[9px] text-zinc-400 leading-none mt-1">{pharma.dist}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="size-6 rounded-full bg-zinc-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-zinc-400">P{i}</div>
                                    ))}
                                </div>
                                <p className="text-[10px] font-black text-zinc-900 flex items-center gap-1.5 uppercase tracking-tighter">
                                    <Check className="size-3 text-brand" />
                                    100% Licensed Partners
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
