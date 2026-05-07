import { MapPin, Package } from "lucide-react";

interface Props {
  title: string;
  quantity: string;
  location: string;
  status: string;
}

export default function RecentDonation({
  title,
  quantity,
  location,
  status,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border bg-white p-5 transition hover:shadow-md md:flex-row md:items-center md:justify-between">
      <div>
        <div className="flex items-center gap-2">
          <Package size={18} className="text-green-600" />

          <h3 className="font-semibold text-gray-900">
            {title}
          </h3>
        </div>

        <p className="mt-2 text-sm text-gray-500">
          Quantity: {quantity}
        </p>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <MapPin size={16} />
          {location}
        </div>
      </div>

      <div>
        <span
          className={`rounded-full px-4 py-2 text-sm font-medium ${
            status === "picked"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}