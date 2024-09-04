interface DeliveryData {
  quantity: number;
  serialNumber: string;
  result: string;
}

interface Delivery {
  id: number;
  orderNumber: string;
  customer: string;
  service: string;
  status: string;
  result?: string;
  quantity?: number;
  serialNumber?: string;
}
