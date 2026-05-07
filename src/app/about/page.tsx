'use client'
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-orange-50 px-6 py-20">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          About <span className="text-green-600">NGO Food Bridge</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          A platform dedicated to reducing food waste and connecting surplus food donors
          with NGOs to serve communities efficiently.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="shadow-lg rounded-3xl"
        >
          <Card className="rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600">
                Our mission is to minimize food wastage by providing a digital
                platform that enables efficient redistribution of surplus food
                from donors to NGOs and underprivileged communities.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="shadow-lg rounded-3xl"
        >
          <Card className="rounded-3xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600">
                Our vision is to create a hunger-free society where no food is wasted
                and every individual has access to nutritious meals through technology.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Problem Statement */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-16 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          The Problem We Solve
        </h2>
        <p className="text-gray-600 text-lg">
          Every day, a large amount of edible food is wasted by restaurants,
          events, and households, while many people go hungry. There is a lack
          of proper communication and coordination between food donors and NGOs.
          Our platform bridges this gap by providing a real-time, transparent,
          and efficient system for food redistribution.
        </p>
      </motion.div>

      {/* Team Section (Optional) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Our Team
        </h2>
        <p className="text-gray-600">
          This project is developed by final-year students passionate about using
          technology for social good and sustainability.
        </p>
      </motion.div>

    </div>
  );
}