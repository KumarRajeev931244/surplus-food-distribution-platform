"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import {
  Package,
  Clock3,
  CheckCircle2,
  Plus,
  MapPin,
} from "lucide-react";

interface Donation {
  _id: string;
  title: string;
  quantity: string;
  location: string;
  status: string;
  createdAt: string;
}

export default function DonorDashboardPage() {
  const [loading, setLoading] =
    useState(true);

  const [donations, setDonations] =
    useState<Donation[]>([]);

  const [stats, setStats] = useState({
    total: 0,
    available: 0,
    picked: 0,
  });

  // =========================
  // FETCH DONOR DATA
  // =========================

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "/api/dashboard/donor"
      );

      const data = await res.json();

      if (data.success) {
        setDonations(data.donations);

        setStats(data.stats);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <main className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-100 pt-24 pb-16">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">
              Donor Dashboard
            </h1>

            <p className="mt-3 text-gray-600">
              Manage your food donations and track collection status.
            </p>
          </div>

          <Link
            href="/food/add"
            className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-5 py-3 font-medium text-white shadow-lg transition hover:scale-[1.02]"
          >
            <Plus size={18} />
            Add Donation
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Total */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Total Donations
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  {stats.total}
                </h2>
              </div>

              <div className="rounded-2xl bg-green-100 p-4 text-green-600">
                <Package size={24} />
              </div>
            </div>
          </div>

          {/* Available */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Available
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  {stats.available}
                </h2>
              </div>

              <div className="rounded-2xl bg-yellow-100 p-4 text-yellow-700">
                <Clock3 size={24} />
              </div>
            </div>
          </div>

          {/* Picked */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Collected
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-900">
                  {stats.picked}
                </h2>
              </div>

              <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-700">
                <CheckCircle2 size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Donation List */}
        <div className="mt-12">
          
          <div className="mb-6 flex items-center justify-between">
            
            <h2 className="text-2xl font-bold text-gray-900">
              Your Donations
            </h2>

            <button
              onClick={fetchDashboard}
              className="rounded-2xl border bg-white px-5 py-2 text-sm font-medium transition hover:bg-gray-100"
            >
              Refresh
            </button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-64 animate-pulse rounded-3xl bg-white"
                />
              ))}
            </div>
          ) : donations.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

              {donations.map((donation) => (
                <div
                  key={donation._id}
                  className="rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-xl"
                >
                  
                  <div className="flex items-start justify-between">
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {donation.title}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500">
                        Quantity: {donation.quantity}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-medium ${
                        donation.status ===
                        "picked"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {donation.status}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={16} />
                    {donation.location}
                  </div>

                  <div className="mt-5 text-sm text-gray-400">
                    Added on{" "}
                    {new Date(
                      donation.createdAt
                    ).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed bg-white p-12 text-center text-gray-500">
              <Link href={`/food/add`}>Add Food</Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}