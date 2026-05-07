'use client'
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Users, Truck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Utensils className="h-10 w-10 text-green-600" />,
      title: "Donors List Surplus Food",
      desc: "Restaurants, hotels, and individuals add details of available surplus food including quantity and pickup location."
    },
    {
      icon: <Users className="h-10 w-10 text-orange-500" />,
      title: "NGOs Request Pickup",
      desc: "Verified NGOs browse available food and send requests to collect it in real-time."
    },
    {
      icon: <Truck className="h-10 w-10 text-emerald-600" />,
      title: "Food is Collected & Distributed",
      desc: "NGOs pick up the food and distribute it to needy people efficiently."
    }
  ];

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
          How <span className="text-green-600">It Works</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          A simple and efficient process to connect food donors with NGOs
          and reduce food wastage.
        </p>
      </motion.div>

      {/* 🔹 Steps */}
      <div className="mt-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -8 }}
          >
            <Card className="rounded-3xl shadow-lg border-none text-center">
              <CardContent className="p-8">

                {/* Step Number */}
                <div className="text-sm font-bold text-gray-400 mb-2">
                  Step {index + 1}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {step.desc}
                </p>

              </CardContent>
            </Card>
          </motion.div>
        ))}

      </div>

      {/* 🔹 Extra Section (Optional for marks) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">
          Why This Process Matters
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This streamlined workflow ensures that surplus food is not wasted
          and reaches those in need quickly, improving efficiency and reducing hunger.
        </p>
      </motion.div>

    </div>
  );
}