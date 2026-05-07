'use client'
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Users, HeartHandshake, ArrowRight } from "lucide-react";
import { useState } from "react"
import Footer from "./Footer";
import Navbar from "./Navbar";
import AuthModel from "./AuthModel";
export default function Home(){
    const [authOpen,SetAuthOpen] = useState(false);
      return (
        <>
        <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-orange-50 text-gray-800">
        
        {/* navbar */}
        <Navbar/>
            <section className="px-8 py-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Surplus Food Redistribution <span className="text-green-600">for NGOs</span>
                </h1>

                <motion.p
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.6}}
                className="mt-6 text-lg text-gray-600 max-w-xl">
                A platform connecting food donors with NGOs to ensure surplus food reaches people in need efficiently.
                </motion.p>

                <div className="mt-8 flex gap-4">
                <Button className="rounded-2xl px-6 py-6 text-base" onClick={()=>SetAuthOpen(true)}>
                    Donate Food <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button variant="outline" className="rounded-2xl px-6 py-6 text-base">
                    NGO Access
                </Button>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
            >
                <img
                // src="https://images.unsplash.com/photo-1488459716781-31db52582fe9"
                src={"./foodNGO.jpg"}
                alt="Food donation"
                className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
                />
            </motion.div>
            </section>

            {/* HOW IT WORKS */}
            <section className="px-8 pb-20 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                {
                    icon: <Utensils className="h-10 w-10 text-green-600" />,
                    title: "Donors List Food",
                    desc: "Restaurants and individuals upload surplus food details.",
                },
                {
                    icon: <Users className="h-10 w-10 text-orange-500" />,
                    title: "NGOs Request Pickup",
                    desc: "NGOs view available food and request collection.",
                },
                {
                    icon: <HeartHandshake className="h-10 w-10 text-emerald-500" />,
                    title: "Food Distributed",
                    desc: "Collected food is delivered to those in need.",
                },
                ].map((item, index) => (
                <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Card className="rounded-3xl shadow-lg border-none">
                    <CardContent className="p-8 text-center">
                        <div className="flex justify-center mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </CardContent>
                    </Card>
                </motion.div>
                ))}
            </div>
            </section>
        </div>
        <AuthModel open={authOpen} onClose={()=>SetAuthOpen(false)}/>

        <Footer />
        </>

        
  );
}