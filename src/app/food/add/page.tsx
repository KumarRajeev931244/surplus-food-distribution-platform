"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { Loader2 } from "lucide-react";

export default function AddFoodPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    quantity: "",
    location: "",
    expiry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        "/api/food/add",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Food added successfully");

        router.push("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-100 pt-28 pb-16">
  <div className="mx-auto max-w-3xl px-4">

    {/* Header */}
    <div className="mb-10 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
        Add Food Donation
      </h1>

      <p className="mt-3 text-base text-gray-600">
        Help NGOs redistribute surplus food to people in need.
      </p>
    </div>

    {/* Form Card */}
    <div className="overflow-hidden rounded-[32px] border border-white/30 bg-white/70 shadow-2xl backdrop-blur-xl">

      {/* Top Banner */}
      <div className="bg-linear-to-r from-green-600 to-emerald-500 px-8 py-6">
        <h2 className="text-2xl font-bold text-white">
          Donation Details
        </h2>

        <p className="mt-1 text-sm text-green-100">
          Fill all required information carefully.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-7 p-8"
      >

        {/* Food Title */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Food Title
          </label>

          <input
            type="text"
            name="title"
            placeholder="e.g. Veg Biryani"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-800 outline-none transition duration-200 placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Quantity
          </label>

          <input
            type="text"
            name="quantity"
            placeholder="e.g. 20 plates"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-800 outline-none transition duration-200 placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
          />
        </div>

        {/* Location */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Pickup Location
          </label>

          <input
            type="text"
            name="location"
            placeholder="Enter pickup address"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-800 outline-none transition duration-200 placeholder:text-gray-400 focus:border-green-500 focus:ring-4 focus:ring-green-100"
          />
        </div>

        {/* Expiry */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Expiry Time
          </label>

          <input
            type="datetime-local"
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-800 outline-none transition duration-200 focus:border-green-500 focus:ring-4 focus:ring-green-100"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-green-600 px-5 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.01] hover:shadow-green-200 disabled:cursor-not-allowed disabled:opacity-70 bg-amber-200"
        >
          {loading ? (
            <>
              <Loader2
                size={20}
                className="animate-spin"
              />
              Adding Donation...
            </>
          ) : (
            "Add Donation"
          )}
        </button>
      </form>
    </div>
  </div>
</main>
  );
}