'use client'
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-orange-50 px-6 py-20 text-gray-800">

      {/* 🔹 Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-green-600">NGO Food Bridge</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          A platform designed to connect food donors with NGOs to reduce food wastage
          and support communities in need.
        </p>
      </motion.div>

      {/* 🔹 Mission & Vision */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        <motion.div whileHover={{ scale: 1.03 }}>
          <Card className="rounded-3xl shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To reduce food wastage by creating a reliable digital system
                that enables quick and efficient redistribution of surplus food
                from donors to NGOs and needy people.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }}>
          <Card className="rounded-3xl shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To build a hunger-free society where no food is wasted and
                technology helps in efficient food distribution across communities.
              </p>
            </CardContent>
          </Card>
        </motion.div>

      </div>

      {/* 🔹 Problem Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">The Problem We Solve</h2>
        <p className="text-lg text-gray-600">
          Every day, large quantities of edible food are wasted by restaurants,
          events, and households, while many people go hungry. There is a lack of
          coordination between food donors and NGOs. Our platform bridges this gap
          by providing a real-time system for food sharing and redistribution.
        </p>
      </motion.div>

      {/* 🔹 Features / Impact */}
      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

        <Card className="rounded-3xl shadow-md">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg text-green-600 mb-2">Real-Time Connection</h3>
            <p className="text-gray-600 text-sm">
              Connect donors and NGOs instantly for faster food redistribution.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl shadow-md">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg text-orange-500 mb-2">Reduce Waste</h3>
            <p className="text-gray-600 text-sm">
              Prevent food wastage and promote sustainable resource usage.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl shadow-md">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg text-emerald-600 mb-2">Social Impact</h3>
            <p className="text-gray-600 text-sm">
              Help provide meals to underprivileged communities.
            </p>
          </CardContent>
        </Card>

      </div>

      {/* 🔹 Team */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This project is developed by final-year students passionate about
          solving real-world problems using technology and creating social impact.
        </p>
      </motion.div>

    </div>
  );
}