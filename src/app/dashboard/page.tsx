"use client"
import Link from "next/link";

import StatCard from "@/components/dashboard/StatCard";
import RecentDonation from "@/components/dashboard/RecentDonation";
import DonationChart from "@/components/dashboard/DonationChart";
import DashboardSkeleton from "@/components/dashboard/DashboardSkeleton";

import {
  DashboardStats,
  Donation,
} from "@/types/dashboard";
import { useEffect, useState } from "react";
import { Clock3, Package, Plus, Users, UtensilsCrossed } from "lucide-react";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState<DashboardStats>({
    totalDonations: 0,
    ngoPartners: 0,
    mealsDistributed: 0,
    pendingRequests: 0,
  });

  const [recentDonations, setRecentDonations] =
    useState<Donation[]>([]);
  const [weeklyData, setWeeklyData] = useState<{
    name: string;
    donations: number;
  }[]>([]);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/dashboard");

      const data = await res.json();

      if (data.success) {
        setStats(data.stats);
        setRecentDonations(data.recentDonations);
        setWeeklyData(data.weeklyData || []);
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

  const cards = [
    {
      title: "Total Donations",
      value: stats.totalDonations,
      icon: Package,
    },
    {
      title: "NGO Partners",
      value: stats.ngoPartners,
      icon: Users,
    },
    {
      title: "Meals Distributed",
      value: stats.mealsDistributed,
      icon: UtensilsCrossed,
    },
    {
      title: "Pending Requests",
      value: stats.pendingRequests,
      icon: Clock3,
    },
  ];
  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard
            </h1>

            <p className="mt-2 text-gray-500">
              Track donations and food redistribution.
            </p>
          </div>

          <Link
            href="/food/add"
            className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-5 py-3 font-medium text-white transition hover:scale-[1.02]"
          >
            <Plus size={18} />
            Add Donation
          </Link>
        </div>

        {loading ? (
          <DashboardSkeleton />
        ) : (
          <>
   {/* Stats */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {cards.map((card, index) => (
                <StatCard
                  key={index}
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                />
              ))}
            </div>

            <DonationChart data={weeklyData} />

            {/* Recent Donations */}
            <div className="mt-10 rounded-3xl border bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Recent Donations
                </h2>

                <Link
                  href="/food/list"
                  className="text-sm font-medium text-green-600 hover:underline"
                >
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {recentDonations.length > 0 ? (
                  recentDonations.map((donation) => (
                    <RecentDonation
                      key={donation._id}
                      title={donation.title}
                      quantity={donation.quantity}
                      location={donation.location}
                      status={donation.status}
                    />
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed p-10 text-center text-gray-500">
                    No donations available
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}