export type SelectOptionType = string | { value: string; text: string } | { value: number; text: string };

export type FoodDeliveryFormType = {
  orderNo: number;
  customerName: string;
  mobile: string;
  email: string;
  paymentMethod: string;
  deliveryIn: number;
  address: {
    streetAddress: string;
    landmark: string;
    city: string;
    state: string;
  };
};
