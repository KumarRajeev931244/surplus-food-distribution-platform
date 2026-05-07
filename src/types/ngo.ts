export interface Donation {
  _id: string;
  title: string;
  quantity: string;
  location: string;
  status: string;
  expiry: string;
}

export interface NgoStats {
  availableDonations: number;
  pickedDonations: number;
}