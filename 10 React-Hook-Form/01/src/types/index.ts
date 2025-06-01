export type CheckoutFormType = {
  paymentMethod: string;
  deliveryIn: number;
};

export type DeliveryAddressFormType = {
  streetAddress: string;
  landmark: string;
  city: string;
  state: string;
};

export type FoodItemType = { name: string };

export type FoodDeliveryFormType = {
  address: DeliveryAddressFormType;
  foodItems: FoodItemType[];
} & FoodDeliverMasterFormType &
  CheckoutFormType;

export type FoodDeliverMasterFormType = {
  orderNo: number;
  customerName: string;
  mobile: string;
  email: string;
};

export type SelectOptionType = string | { value: string; text: string } | { value: number; text: string };
