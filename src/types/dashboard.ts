export interface DashboardStats {
  totalDonations: number;
  ngoPartners: number;
  mealsDistributed: number;
  pendingRequests: number;
}

export interface Donation {
  _id: string;
  title: string;
  quantity: string;
  location: string;
  status: string;
  createdAt: string;
}