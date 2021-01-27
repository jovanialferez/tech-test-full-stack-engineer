export interface Lead {
  id: number;
  status: string;
  category: string;
  location: string;
  price: number;
  contactName: string;
  contactNumber: string;
  contactEmail: string;
  creationTimestamp: number; // in unixtimestamp (seconds)
}