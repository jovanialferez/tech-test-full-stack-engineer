export interface Lead {
  id: number;
  status: string;
  description: string;
  category: string;
  location: string;
  price: number;
  contactName: string;
  contactNumber: string;
  contactEmail: string;
  creationTimestamp: number; // in unixtimestamp (seconds)
}

export const createFromResponse = (response: any): Lead => {
  return {
    id: response.id,
    status: response.status,
    description: response.description,
    category: response.category.name,
    location: `${response.suburb.name} ${response.suburb.postcode}`,
    price: response.price,
    contactName: response.contactName,
    contactNumber: response.contactPhone,
    contactEmail: response.contactEmail,
    creationTimestamp: response.creationTimestamp,
  }
}