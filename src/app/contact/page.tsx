'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Basic validation
  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      return "All fields are required";
    }
    if (!form.email.includes("@")) {
      return "Enter valid email";
    }
    return "";
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setSuccess(error);
      return;
    }

    try {
      setLoading(true);

      // 👉 Replace with your API later
      await new Promise((res) => setTimeout(res, 1000));

      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setSuccess("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-orange-50 px-4 md:px-6 py-20 text-gray-800">

      {/* 🔹 Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-5xl font-bold">
          Contact <span className="text-green-600">Us</span>
        </h1>
        <p className="mt-4 md:mt-6 text-gray-600">
          Reach out to us for support, collaboration, or any queries.
        </p>
      </motion.div>

      {/* 🔹 Main Section */}
      <div className="mt-14 md:mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10">

        {/* 📝 Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white shadow-xl rounded-3xl p-6 md:p-8 space-y-4 md:space-y-5"
        >
          <h2 className="text-xl md:text-2xl font-semibold">
            Send a Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-black/20 rounded-xl px-4 py-3 outline-none focus:border-black placeholder:text-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-black/20 rounded-xl px-4 py-3 outline-none focus:border-black placeholder:text-gray-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full border border-black/20 rounded-xl px-4 py-3 outline-none focus:border-black placeholder:text-gray-400"
          />

          {/* Status Message */}
          {success && (
            <p className="text-sm text-center text-green-600">
              {success}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-11 rounded-xl bg-black text-white hover:bg-gray-900"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>

        {/* 📍 Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4 md:space-y-6"
        >
          {/* Email */}
          <div className="bg-white shadow-lg rounded-3xl p-5 md:p-6 flex items-center gap-4">
            <Mail className="text-green-600" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-gray-600">
                support@ngobridge.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-lg rounded-3xl p-5 md:p-6 flex items-center gap-4">
            <Phone className="text-orange-500" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm text-gray-600">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white shadow-lg rounded-3xl p-5 md:p-6 flex items-center gap-4">
            <MapPin className="text-emerald-600" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-sm text-gray-600">
                Delhi, India
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}