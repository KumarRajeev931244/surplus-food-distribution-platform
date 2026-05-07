import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: number;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            {value}
          </h2>
        </div>

        <div className="rounded-2xl bg-green-100 p-4 text-green-600">
          <Icon size={26} />
        </div>
      </div>
    </div>
  );
}