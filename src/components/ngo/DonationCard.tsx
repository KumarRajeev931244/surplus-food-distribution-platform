"use client";

import { MapPin, Clock } from "lucide-react";

interface Props {
  title: string;
  quantity: string;
  location: string;
  expiry: string;
}

export default function DonationCard({
  title,
  quantity,
  location,
  expiry,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
      
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {title}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Quantity: {quantity}
          </p>
        </div>

        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
          Available
        </span>
      </div>

      <div className="mt-5 space-y-3 text-sm text-gray-500">
        
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>
            Expiry:{" "}
            {new Date(expiry).toLocaleString()}
          </span>
        </div>
      </div>

      <button className="mt-6 w-full rounded-2xl bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700">
        Accept Donation
      </button>
    </div>
  );
}