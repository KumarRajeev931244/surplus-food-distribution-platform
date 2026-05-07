"use client";

import { useEffect, useState } from "react";

import {
  Package,
  CheckCircle2,
} from "lucide-react";



import DonationCard from "@/components/ngo/DonationCard";

import {
  Donation,
  NgoStats,
} from "@/types/ngo";
import NgoStatCard from "@/components/ngo/NgoStatsCard";

export default function NgoDashboardPage() {
  const [loading, setLoading] =
    useState(true);

  const [stats, setStats] =
    useState<NgoStats>({
      availableDonations: 0,
      pickedDonations: 0,
    });

  const [donations, setDonations] =
    useState<Donation[]>([]);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "/api/ngo/dashboard"
      );

      const data = await res.json();

      if (data.success) {
        setStats(data.stats);

        setDonations(
          data.recentDonations
        );
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
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            NGO Dashboard
          </h1>

          <p className="mt-3 text-gray-600">
            Manage food collection and help reduce food waste.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          
          <NgoStatCard
            title="Available Donations"
            value={stats.availableDonations}
            icon={Package}
          />

          <NgoStatCard
            title="Collected Donations"
            value={stats.pickedDonations}
            icon={CheckCircle2}
          />
        </div>

        {/* Donations */}
        <div className="mt-12">
          
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Available Donations
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
                <DonationCard
                  key={donation._id}
                  title={donation.title}
                  quantity={donation.quantity}
                  location={donation.location}
                  expiry={donation.expiry}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed bg-white p-12 text-center text-gray-500">
              No donations available right now.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}